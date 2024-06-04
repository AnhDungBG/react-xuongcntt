// import { useEffect, useState } from "react";
// import instance from "../../../axios";
// import PropTypes from "prop-types";
// function EditProduct({ id }) {
//   const [product, setProduct] = useState(null);
//   useEffect(() => {
//     (async () => {
//       try {
//         const res = await instance.get(`/product/${id}`);
//         setProduct(res.data);
//       } catch (error) {
//         console.log(error);
//       }
//     })();
//   }, [id]);
//   return (
//     <div>
//       <form action="">
//         <div className=" form-group">
//           <label htmlFor="">Name</label>
//           <input type="text" value={product.title} />
//         </div>
//         <div className=" form-group">
//           <label htmlFor="">Price</label>
//           <input type="text" value={product.price} />
//         </div>
//         <div className=" form-group">
//           <label htmlFor="">Brand</label>
//           <input type="text" value={product.brand} />
//         </div>
//       </form>
//     </div>
//   );
// }
// EditProduct.propTypes = {
//   id: PropTypes.number.isRequired,
// };

// export default EditProduct;
