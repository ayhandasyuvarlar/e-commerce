"use client";

import { useFormik } from "formik";
import React from "react";
import { Button } from "primereact/button";
import { Typography } from "@/app/components/Typography";
import Input from "@/app/components/InputText";
import validationLogin from "@/validation/validationLogin";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    validationSchema: validationLogin,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <main className="flex flex-column w-7 gap-2 m-auto mt-0">
      <Typography tag={"h1"} className="mb-5 mt-8">
        Sign İn
      </Typography>
      <form
        className="flex flex-column w-full gap-5 m-auto mt-auto"
        onSubmit={formik.handleSubmit}
      >
        <Input
          title={"userName"}
          formik={formik}
          type={"text"}
          text={"Username"}
          value={formik.values.userName}
          error={formik.touched.userName && formik.errors.userName}
        />
        <Input
          title={"password"}
          formik={formik}
          type={"password"}
          text={"Password"}
          value={formik.values.password}
          error={formik.touched.password && formik.errors.password}
        />

        <Button
          type="submit"
          className="p-3 -mt-2 flex justify-content-center font-bold text-lg bg-bluegray-800"
        >
          Submit
        </Button>
      </form>
    </main>
  );
};

export default Login;
