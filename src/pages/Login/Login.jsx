import LoginBackground from "../../components/LoginBackground/LoginBackground";
import LoginSection from "../../sections/LoginSection/LoginSection";
// style
import "./Login.css";
function Login() {
  return (
    <div className="Login d-flex justify-content-center w-100 m-0 p-0 position-relative mb-2">
      <LoginBackground />
      <div className="LoginHale w-100 h-100 position-absolute"></div>
      <LoginSection />
    </div>
  );
}

export default Login;
