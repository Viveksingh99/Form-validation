import React from "react";
import "../App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

function FormPage() {
  const defaultValue = {
    name: "",
    email: "",
    password: "",
    gender: "",
    condition: false,
    subject: "",
  };

  let validationSchema = yup.object().shape({
    name: yup.string().required("❌Pz enter your name"),
    email: yup
      .string()
      .required("❌Pz enter your email")
      .email("❌Pz enter valid email"),
    password: yup.string().required("❌Pz enter your password").min(8),
    gender: yup.string().required("❌Pz enter your gender"),
    condition: yup.boolean().oneOf([true], "❌Pz accept terms and condition"),
    subject: yup.string().required("❌Pz select subject"),
  });

  const handleSubmit = (value) => {
    console.log("value", value);
  };

  return (
    <div className="App">
      <span className="heading">Form Validation</span>
      <Formik
        initialValues={defaultValue}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
        
          <Field
            className="fild"
            type="text"
            name="name"
            placeholder="enter your name"
          />
          <p className="error">
            <ErrorMessage name="name" />
          </p>
          <Field
            className="fild"
            type="text"
            name="email"
            placeholder="enter your email"
          />
          <p className="error">
            <ErrorMessage name="email" />
          </p>
          <Field
            className="fild"
            type="text"
            name="password"
            placeholder="enter your password"
          />
          <p className="error">
            <ErrorMessage name="password" />
          </p>
          <Field
            className="fild"
            component="select"
            name="gender"
            placeholder="Pz select gender"
          >
            <option value="male">Male</option>
            <option value="fmale">Fmale</option>
          </Field>
          <p className="error">
            <ErrorMessage name="gender" />
          </p>
          <Field className="fild" type="checkbox" name="condition"></Field>I
          accept terms and condition
          <p className="error">
            <ErrorMessage name="condition" />
          </p>
          <label>
            subject
            <Field type="radio" name="subject" value="javaScript"></Field>
            javaScript
          </label>
          <label>
            <Field
              className="fild"
              type="radio"
              name="subject"
              value="react"
            ></Field>
            react
            <p className="error">
              <ErrorMessage name="subject" />
            </p>
          </label>
          <button className="btn" type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default FormPage;
