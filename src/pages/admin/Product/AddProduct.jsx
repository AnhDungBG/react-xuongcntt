// import { useForm } from "react-hook-form";
// import PropTypes from "prop-types";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";

// const schema = z.object({
//   title: z.string().min(1, { message: "Required" }),
//   price: z.number().positive("Price must be a positive number"),
//   brand: z.string().min(1, { message: "Required" }),
// });
// function AddProduct({ onAdd }) {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(schema),
//   });

//   const onSubmit = (data) => {
//     onAdd(data);
//   };
//   return (
//     <div>
//       <form action="" className="" onSubmit={handleSubmit(onSubmit)}>
//         <div className=" form-group">
//           <label htmlFor="">Name</label>
//           <input type="text" {...register("title", { required: true })} />
//           {errors.title && <p>{errors.title.message}</p>}
//         </div>
//         <div className=" form-group">
//           <label htmlFor="">Price</label>
//           <input type="number" {...register("price", { required: true })} />
//           {errors.price?.message && <p>{errors.price?.message}</p>}
//         </div>
//         <div className=" form-group">
//           <label htmlFor="">Brand</label>
//           <input type="text" {...register("brand", { required: true })} />
//           {errors.brand?.message && <p>{errors.brand?.message}</p>}
//         </div>
//         <button type="submit" className="btn btn-primary">
//           {" "}
//           ADD
//         </button>
//       </form>
//     </div>
//   );
// }
// AddProduct.propTypes = {
//   onAdd: PropTypes.func.isRequired,
// };

// export default AddProduct;
