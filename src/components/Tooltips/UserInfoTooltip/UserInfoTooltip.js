import React from "react";

import "./UserInfoTooltip.scss";

import { DropDown } from "../DropDown/DropDown.js";
import { UserInfo, ManagerInfo } from "../../User/Info.js";
import { UserIcon, ManagerIcon } from "../../User/UserIcon/Icon.js";

import MenIconImg from "../components/img/MenIcon.png";
import EmailImg from "../components/img/E-mail.png";
import TelephoneImg from "../components/img/telephon.png";

const MenIcon = <img src={MenIconImg} alt="*" className="ListDot" />;
const Email = <img src={EmailImg} alt="*" className="ListDot" />;
const Telephone = <img src={TelephoneImg} alt="*" className="ListDot" />;

export const UserInfoTooltip = (props) => {
  const Icon = UserIcon();

  return (
    <DropDown
      className={"RoundedUserInfo" + props.styling}
      content={
        <>
          {Icon} Клиент {UserInfo.nickname}
        </>
      }
      TooltipText={
        <ul>
          <li>
            {MenIcon}
            {`${UserInfo.surname} ${UserInfo.name} ${UserInfo.patronymic}`}
          </li>
          <li>
            {Email}
            {UserInfo.email}
          </li>
          <li>
            {Telephone}
            {UserInfo.telephone}
          </li>
        </ul>
      }
    />
  );
};

export const ManagerInfoTooltip = (props) => {
  const Icon = ManagerIcon();

  return (
    <DropDown
      className={"RoundedUserInfo" + props.styling}
      content={<>{Icon} Менеджер S2</>}
      TooltipText={
        <ul>
          <li>
            {MenIcon}
            {`${ManagerInfo.surname} ${ManagerInfo.name} ${ManagerInfo.patronymic}`}
          </li>
          <li>
            {Email}
            {ManagerInfo.email}
          </li>
          <li>
            {Telephone}
            {ManagerInfo.telephone}
          </li>
        </ul>
      }
    />
  );
};
