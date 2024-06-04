import instance from "../axios";
import AuthForm from "../components/AuthForm";

function Login() {
  const handleData = async (data) => {
    try {
      const res = await instance.post(`/login`, data);
      return res;
    } catch (error) {
      return error;
    }
  };
  return <AuthForm title="Login" onSubmit={handleData} />;
}

export default Login;
