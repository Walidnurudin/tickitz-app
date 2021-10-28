import React, { useState } from "react";
import "./index.css";
import { Eye, EyeSlash } from "react-bootstrap-icons";

function Input({ label, handleChange, inputPassword, ...rest }) {
  const [isPassword, setIsPassword] = useState(true);

  const handleEye = () => {
    setIsPassword(!isPassword);
  };

  return (
    <>
      <div className="mb-3 input__component">
        <label htmlFor={label} className="mulish-400 text-secondary">
          {label}
        </label>

        {inputPassword && isPassword ? (
          <>
            <EyeSlash className="text-secondary icon__eye" onClick={handleEye} />
            <input
              {...rest}
              type="password"
              onChange={handleChange}
              className="form-control mulish-400 form__input"
            />
          </>
        ) : inputPassword && !isPassword ? (
          <>
            <Eye className="text-secondary icon__eye" onClick={handleEye} />
            <input
              {...rest}
              type="text"
              onChange={handleChange}
              className="form-control mulish-400 form__input"
            />
          </>
        ) : (
          <input
            {...rest}
            onChange={handleChange}
            className="form-control mulish-400 form__input"
          />
        )}
      </div>
    </>
  );
}

export default Input;
