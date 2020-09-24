import React from "react";
import { Provider } from "react-redux";
import ProductsStore from "./stores/ProductsStore.js";

import Exit from "../../shared/img/exit.png";

import "../../shared/styles/Container.scss";
import "../../shared/styles/Buttons.scss";

import { Header } from "../components/Header/Header.js";
import {
  UserInfoTooltip,
  ManagerInfoTooltip,
} from "../../components/Tooltips/UserInfoTooltip/UserInfoTooltip.js";
import { SideBar } from "../components/SideBar/SideBar.js";
import { UserIcon } from "../../components/User/UserIcon/Icon.js";
import { ClientOfficeContainer } from "./ClientOfficeContainer.js";
import { useHistory } from "react-router-dom";

export const ClientOffice = () => {
  const history = useHistory();

  const component = history.location.pathname;

  return (
    <Provider store={ProductsStore}>
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
        <SideBar content={<UserIcon />} component={component} />
        <ClientOfficeContainer component={component} />
      </main>
    </Provider>
  );
};
