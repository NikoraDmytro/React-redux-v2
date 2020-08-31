import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  MyCheckbox,
  MyTextInput,
  MySubmitButton,
} from "./MyInputs/MyInputs.js";

import { Presentation } from "./Presentetion.js";
import "./SignInForm.scss";

export const SignInForm = () => {
  const history = useHistory();

  return (
    <>
      <div className="SignInForm">
        <Formik
          initialValues={{
            email: "",
            password: "",
            RememberMe: false,
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string().required("Required"),
          })}
          onSubmit={() => {
            history.push("/ClientOffice");
          }}
        >
          <Form>
            <h2>Войти в кабинет</h2>
            <h4>
              Для входа введите логин и Email, которые вы указывали при
              регистрации
            </h4>

            <MyTextInput
              label="Email"
              name="email"
              type="email"
              placeholder="ivan.lazarev@gmail.com"
            />

            <MyTextInput label="Пароль" name="password" type="password" />

            <MyCheckbox name="RememberMe">
              <span>Запомнить меня</span>
            </MyCheckbox>

            <MySubmitButton>Войти в кабинет</MySubmitButton>

            <div className="LinksForHelp">
              <h5>Нет аккаунта?</h5>
              <Link to="">Создать</Link>
              <Link to="">Забыли пароль?</Link>
            </div>
          </Form>
        </Formik>
      </div>
      <Presentation />
    </>
  );
};
