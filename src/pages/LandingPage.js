import React from "react";
import { Header } from "../components/Header/Header.js";
import { Description } from "../components/Description/Description.js";

export const LandingPage = () => (
  <main>
    <Header
      backgroundTheme="gradient-blue"
      logoTheme="white"
      buttonProps={{ content: "Войти", link: "/SignIn", type: "normal" }}
    />
    <Description />
  </main>
);
