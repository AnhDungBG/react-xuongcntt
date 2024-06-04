import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import instance from "../../../axios";
import { useEffect } from "react";
import { productSchema } from "../../../ValidateForm/schemaForm";
function ProductForm({ onChange }) {
  const { id } = useParams();
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
        } catch (error) {
          console.log(error);
        }
      };
      fetchProductEdit();
    }
  }, [id, reset]);
  const onSubmit = (data) => {
    onChange({ ...data, id });
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
        <div className="mb-3">
          <button className="btn btn-primary w-100" type="submit">
            {id ? "Product Edit" : "Product Add"}
          </button>
        </div>
      </form>
    </>
  );
}
ProductForm.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ProductForm;
