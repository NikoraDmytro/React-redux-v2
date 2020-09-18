import React from "react";

import { Tooltip } from "../../components/Tooltips/BasicTooltip/BasicTooltip.js";

import { GenerateId } from "./GenerateId.js";

const GameImgStyle = {
  width: 30 + "%",
  height: 100 + "%",
  float: "left",
};

export function Product(
  vendorCode,
  name,
  description,
  boxSize,
  recommendedRetailPrice,
  remainder,
  priceWithVAT,
  gameImg
) {
  this.checkbox = false;
  this.barcode = GenerateId();
  this.vendorCode = vendorCode;
  this.tooltip = (
    <Tooltip
      content={name}
      TooltipText={
        <>
          <img style={GameImgStyle} src={gameImg} alt="Изображение игры" />
          {description}
        </>
      }
    />
  );
  this.boxSize = boxSize;
  this.recommendedRetailPrice = Number(recommendedRetailPrice);
  this.remainder = Number(remainder) + "шт";
  this.priceWithVAT = Number(priceWithVAT);
  this.order = 0;
  this.orderPrice = 0;
}
