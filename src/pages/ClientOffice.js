import React from "react";
import { Header } from "../components/Header/Header.js";
import Exit from "./img/exit.png";
import "../shared/Container.scss";
import {
  UserInfoTooltip,
  ManagerInfoTooltip,
} from "../components/Tooltips/UserInfoTooltip.js";
import { SideBar } from "../components/SideBar/SideBar.js";
import { UserIcon } from "../components/User/Icon.js";

export const ClientOffice = () => (
  <main style={{ backgroundColor: "#F1F9FF" }}>
    <Header
      backgroundTheme="white"
      logoTheme="none"
      content={
        <>
          <ManagerInfoTooltip styling="blue" />
          <UserInfoTooltip styling="blue" />
        </>
      }
      buttonProps={{
        content: { src: `${Exit}`, alt: "Выйти" },
        link: "/SignIn",
        type: "img",
      }}
    />
    <SideBar content={<UserIcon />} />
  </main>
);
