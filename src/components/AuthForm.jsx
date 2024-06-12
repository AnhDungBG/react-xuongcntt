import { zodResolver } from "@hookform/resolvers/zod";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { registerSchema, loginSchema } from "../ValidateForm/schemaForm";
import instance from "../axios";
import { useNavigate } from "react-router-dom";
function AuthForm({ isRegister }) {
  const navigate = useNavigate();
  const handleData = async (data) => {
    try {
      if (isRegister) {
        const res = await instance.post(`/register`, data);
        navigate("/login");
        return res;
      } else {
        const res = await instance.post(`/login`, data);
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/");
        return res;
      }
    } catch ({ response }) {
      alert(response.data);
    }
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(isRegister ? registerSchema : loginSchema),
  });

  return (
    <div>
      <form onSubmit={handleSubmit(handleData)}>
        <h1>{isRegister ? "Register" : "Login"}</h1>
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
        {isRegister ? (
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirm_password"
              {...register("confirm_password")}
            />
            {errors.confirm_password?.message && (
              <p className="text-danger">{errors.confirm_password?.message}</p>
            )}
          </div>
        ) : null}

        <div className="mb-3">
          <button className="btn btn-primary w-100" type="submit">
            {isRegister ? "Register" : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
}
AuthForm.propTypes = {
  isRegister: PropTypes.bool.isRequired,
};

export default AuthForm;
