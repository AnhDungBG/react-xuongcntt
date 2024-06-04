import { zodResolver } from "@hookform/resolvers/zod";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { registerSchema } from "../ValidateForm/schemaForm";
function AuthForm({ title, onSubmit, buttonText }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: zodResolver(registerSchema) });
  //   const navigate = useNavigate();
  const onSendData = async (data) => {
    const response = await onSubmit(data);
    console.log(response);
    // if (response.data == "ok") {
    //   navigate("/");
    // }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSendData)}>
        <h1>{title}</h1>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            {...register("email", { required: true })}
          />
          {errors.email?.message && (
            <p className="text-danger">{errors.email?.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            {...register("password", { required: true })}
          />
          {errors.password?.message && (
            <p className="text-danger">{errors.password?.message}</p>
          )}
        </div>

        <div className="mb-3">
          <button className="btn btn-primary w-100" type="submit">
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
}
AuthForm.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default AuthForm;
