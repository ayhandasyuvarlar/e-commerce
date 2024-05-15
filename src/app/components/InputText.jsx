import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";
import React from "react";

const Input = ({ formik, title, type, text, error, value }) => {
  return (
    <div className="card flex justify-content-center w-full">
      <FloatLabel className={"w-full"}>
        <InputText
          className="p-3 w-full"
          id={title}
          name={title}
          type={type}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={value}
        />
        {error ? <div>{error}</div> : null}
        <label className="-mt-2 text-gray-400" htmlFor={title}>
          {text}
        </label>
      </FloatLabel>
    </div>
  );
};

export default Input;
