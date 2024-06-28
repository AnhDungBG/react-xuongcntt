import { zodResolver } from "@hookform/resolvers/zod";
import PropTypes from "prop-types";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema, registerSchema } from "../../ValidateForm/schemaForm";
import { authContext } from "../../store/Context";
import styles from "./AuthForm.module.scss";

function AuthForm({ isRegister }) {
  const { login, register: registerUser } = useContext(authContext);

  const navigate = useNavigate();
  const handleData = async (data) => {
    try {
      if (isRegister) {
        await registerUser(data);
        navigate("/login");
      } else {
        await login(data);
        navigate("/");
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
    <div className="m-52">
      <form className={styles.form} onSubmit={handleSubmit(handleData)}>
        <p className={styles.title}>{isRegister ? "Register" : "Login"} </p>
        <p className={styles.message}>
          Sign up now and get full access to our app.{" "}
        </p>
        {isRegister ? (
          <div className={styles.flex}>
            <label>
              <input
                className={styles.input}
                type="text"
                placeholder=""
                {...register("first_name", { required: true })}
              />
              <span>First name</span>
              {errors.first_name?.message && (
                <p className="text-danger">{errors.first_name?.message}</p>
              )}
            </label>
            <label>
              <input
                className={styles.input}
                type="text"
                placeholder=""
                {...register("last_name", { required: true })}
              />
              <span>Last_name</span>
              {errors.last_name?.message && (
                <p className="text-danger">{errors.last_name?.message}</p>
              )}
            </label>
          </div>
        ) : (
          ""
        )}
        <label>
          <input
            className={styles.input}
            type="email"
            placeholder=""
            {...register("email", { required: true })}
          />
          <span>Email</span>
          {errors.email?.message && (
            <p className="text-danger">{errors.email?.message}</p>
          )}
        </label>
        <label>
          <input
            className={styles.input}
            type="password"
            placeholder=""
            {...register("password", { required: true })}
          />
          <span>Password</span>
          {errors.password?.message && (
            <p className="text-danger">{errors.password?.message}</p>
          )}
        </label>
        {isRegister ? (
          <label>
            <input
              className={styles.input}
              type="password"
              placeholder=""
              {...register("confirm_password", { required: true })}
            />
            <span>Confirm password</span>
            {errors.confirm_password?.message && (
              <p className="text-danger">{errors.confirm_password?.message}</p>
            )}
          </label>
        ) : (
          ""
        )}
        <button type="submit" className={styles.submit}>
          {isRegister ? "Register" : "Login"}
        </button>
        <p className="signin">
          {isRegister ? "Already have an acount ?" : "Don't have an account ?"}{" "}
          <Link
            to={
              isRegister
                ? "http://localhost:3001/login"
                : "http://localhost:3001/register"
            }
          >
            {isRegister ? "Sign in" : "Sign up"}
          </Link>{" "}
        </p>
      </form>
    </div>
  );
}
AuthForm.propTypes = {
  isRegister: PropTypes.bool,
};

export default AuthForm;
