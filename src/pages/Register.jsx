import instance from "../axios";
import AuthForm from "../components/AuthForm";
function Register() {
  const handleData = async (data) => {
    try {
      const res = await instance.post(`/register`, data);
      return res;
    } catch (error) {
      return error;
    }
  };
  return (
    <div>
      <AuthForm title="Register" buttonText="Register" onSubmit={handleData} />
    </div>
  );
}

export default Register;
