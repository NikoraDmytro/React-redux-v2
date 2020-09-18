import React from "react";
import { UserInfo, ManagerInfo } from "../Info.js";

import "./Icon.scss";

export const UserIcon = () =>
  UserInfo.icon ? (
    <div className="Icon">
      <img src={UserInfo.icon} alt="icon" />
    </div>
  ) : (
    <div className="Icon">{UserInfo.nickname[0]}</div>
  );
export const ManagerIcon = () =>
  ManagerInfo.icon ? (
    <div className="Icon">
      <img src={ManagerInfo.icon} alt="icon" />
    </div>
  ) : (
    <div className="Icon">{ManagerInfo.nickname[0]}</div>
  );
