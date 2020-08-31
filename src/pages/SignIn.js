import React from "react";
import { Header } from "../components/Header/Header.js";
import { SignInForm } from "../components/SignInForm/SignInForm.js";

export const SignIn = () => {
  const width = document.body.clientWidth;
  return (
    <main>
      <Header
        backgroundTheme={width > 600 ? "none" : "gradient-blue"}
        logoTheme={width > 600 ? "blue" : "white"}
        buttonProps={{ content: "На главную", link: "/", type: "underlined" }}
      />
      <SignInForm />
    </main>
  );
};
