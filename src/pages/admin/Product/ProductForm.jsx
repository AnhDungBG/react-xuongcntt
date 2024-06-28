import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { productSchema } from "../../../ValidateForm/schemaForm";
import instance from "../../../axios";
import { productContext } from "../../../store/Context.jsx";
import { useProductActions } from "./../../../store/MiddleWares";
function ProductForm() {
  const { VITE_CLOUD_NAME, VITE_UPLOAD_PRESET } = import.meta.env;

  const navigate = useNavigate();
  const { id } = useParams();
  const [thumbnailUrl, setThumbnailUrl] = useState(null);
  const [thumbnailOption, setThumbnailOption] = useState("keep");

  const { dispatch } = useContext(productContext);
  const { editProduct, addProduct } = useProductActions(dispatch);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ resolver: zodResolver(productSchema) });

  useEffect(() => {
    if (id) {
      const fetchProductEdit = async () => {
        try {
          const { data } = await instance.get(`/products/${id}`);
          reset(data);
          setThumbnailUrl(data.thumbnail);
        } catch (error) {
          console.log(error);
        }
      };
      fetchProductEdit();
    }
  }, [id, reset]);
  const upLoad = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", VITE_UPLOAD_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${VITE_CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      return data.secure_url;
    } catch (error) {
      console.error("Error uploading the file:", error);
      return null;
    }
  };
  const onSubmit = async (data) => {
    let updateProduct = { ...data };
    switch (thumbnailOption) {
      case "upload":
        if (data.thumbnail && data.thumbnail[0]) {
          const thumbnailUrl = await upLoad(data.thumbnail[0]);
          if (thumbnailUrl) {
            updateProduct = { ...updateProduct, thumbnail: thumbnailUrl };
          } else {
            console.error("Failed to upload thumbnail.");
            return;
          }
        }
        break;

      default:
        break;
    }

    if (id) {
      await editProduct({ data: updateProduct, id });
      navigate("/admin");
    } else {
      await addProduct({ data: updateProduct });
      navigate("/admin");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>{id ? "Product Edit" : "Product Add"}</h1>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            {...register("title", { required: true })}
          />
          {errors.title?.message && (
            <p className="text-danger">{errors.title?.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            {...register("price", { required: true, valueAsNumber: true })}
          />
          {errors.price?.message && (
            <p className="text-danger">{errors.price?.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            {...register("description")}
          />
          {errors.description?.message && (
            <p className="text-danger">{errors.description?.message}</p>
          )}
        </div>
        <div>
          Brand:
          <select name="" id="brand" {...register("brand")}>
            <option value="">--Brand---</option>
            <option value="nike">Nike Air</option>
            <option value="puma">Puma</option>
            <option value="nike_jordan">Nike Jordan</option>
            <option value="nike_Air_Max">Nike Air Max</option>
          </select>
          {errors.brand?.message && (
            <p className="text-danger">{errors.brand?.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label>Thumbnail</label>
          <select
            className="form-control"
            id="thumbnailOption"
            value={thumbnailOption}
            onChange={(e) => setThumbnailOption(e.target.value)}
          >
            <option value="keep">Keep Current Thumbnail</option>
            <option value="link">Add Thumbnail from Link</option>
            <option value="upload">Upload Thumbnail from Local</option>
          </select>
          {thumbnailOption === "link" && (
            <input
              type="text"
              className="form-control"
              id="thumbnail"
              {...register("thumbnail")}
            />
          )}
          {thumbnailOption === "upload" && (
            <input
              type="file"
              className="form-control"
              id="thumbnail"
              {...register("thumbnail")}
            />
          )}
          {errors.thumbnail?.message && (
            <p className="text-danger">{errors.thumbnail?.message}</p>
          )}
          {thumbnailUrl && (
            <img
              src={thumbnailUrl}
              alt=""
              style={{ maxWidth: "200px", marginTop: "10px" }}
            />
          )}
        </div>
        <div className="mb-3">
          <button className="btn btn-primary w-100" type="submit">
            {id ? "Product Edit" : "Product Add"}
          </button>
        </div>
      </form>
    </>
  );
}

export default ProductForm;
