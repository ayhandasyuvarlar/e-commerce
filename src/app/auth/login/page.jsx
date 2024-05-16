"use client";

import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "primereact/button";
import { Typography } from "@/app/components/Typography";
import Input from "@/app/components/InputText";
import validationLogin from "@/validation/validationLogin";
import { signInUser } from "@/redux/auth/signInSlice";
import { Toaster, toast } from "alert";
// signInSlice dosyasını doğru yolda ithal edin

const Login = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.signIn);

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
      email: "",
    },
    validationSchema: validationLogin,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      dispatch(signInUser(values))
        .unwrap()
        .then(() => {
          toast.success("This is a success toast");
          // Başarılı oturum açma işlemi
          resetForm();
        })
        .catch(() => {
          console.log(values);
          // Hata durumunda, Formik'in setSubmitting fonksiyonunu kullanarak butonu yeniden aktif hale getirin
          setSubmitting(false);
        });
    },
  });

  return (
    <main className="flex flex-column w-7 gap-2 m-auto mt-0">
      <Toaster />
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
          title={"email"}
          formik={formik}
          type={"email"}
          text={"E-mail"}
          value={formik.values.email}
          error={formik.touched.email && formik.errors.email}
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
          disabled={formik.isSubmitting || loading}
          type="submit"
          className="p-3 -mt-2 flex justify-content-center font-bold text-lg bg-bluegray-800"
        >
          {loading ? "Submitting..." : "Submit"}
        </Button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </main>
  );
};

export default Login;
