import { useState } from "react";
// style
import "./InputForm.css";
const FormInput = (props) => {
  const { label, id, errorMassage, onChange, ...inputProps } = props;
  const [focused, setFocused] = useState(false);
  const handleFocused = (e) => {
    setFocused(true);
  };
  return (
    <form className="FormInput d-flex flex-column w-100">
      <label className="text-secondary mb-1 mt-2">{label}</label>
      <input
        className="form-control mb-1 border border-secondary rounded"
        onChange={onChange}
        {...inputProps}
        onBlur={handleFocused}
        onFocus={() =>
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span className="d-none text-danger p-2">{errorMassage}</span>
    </form>
  );
};
export default FormInput;
