import { useState } from "react";
import InputForm from "./../../components/FormInput/InputForm";
// style
import "./LoginSection.css";
function LoginSection() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // این خط بخاطر اینکه خیلی باحال بود پاک نکردم
    // فلسفه این کاری که با استیت میکنیم این دو خطه
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
    console.log(values);
  };
  const inputs = [
    {
      id: 1,
      name: "username",
      placeholder: "Username",
      type: "text",
      label: "Username",
      errorMassage:
        "Username should have 3-16 character and shouldn't includes any special character!",
      pattern: "^[A-Za-z1-9]{3,16}",
      required: true,
    },
    {
      id: 2,
      name: "email",
      placeholder: "Email",
      type: "email",
      label: "Email",
      errorMassage: "It should be a valid email address!",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      placeholder: "Birthday",
      type: "date",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      placeholder: "Password",
      type: "password",
      label: "Password",
      errorMassage:
        "Password should be 8-20 character and includes at least 1 letter , 1 number and 1 special character",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      placeholder: "Confirm Password",
      type: "password",
      label: "Confirm Password",
      errorMassage: "Passwords dont match",
      pattern: values.password,
      required: true,
    },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="LoginSection w-75 w-md-50 h-100 rounded-3">
      <form onSubmit={handleSubmit} className="h-100 py-3">
        <h1 className="d-block text-center mb-3">Login</h1>
        {inputs.map((input) => {
          return (
            <InputForm
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          );
        })}
        <button className="btn btn-success">submit</button>
      </form>
    </div>
  );
}

export default LoginSection;
