import React from "react";
import "./index.css";

function Input({ label, handleChange, ...rest }) {
  return (
    <>
      <div className="mb-3 input__component">
        <label htmlFor={label} className="mulish-400 text-secondary">
          {label}
        </label>
        <input {...rest} onChange={handleChange} className="form-control mulish-400 form__input" />
      </div>
    </>
  );
}

export default Input;
