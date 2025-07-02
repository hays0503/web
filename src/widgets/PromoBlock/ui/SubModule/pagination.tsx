import { MotifColor } from "@/shared/style/theme";
import { css } from "@emotion/react";
import { PaginationOptions } from "swiper/types";

export const bulletStyle = css`
  width: 16px;
  height: 16px;
  background-color: white;
  display: inline-block;
  margin-top: 4px;
  border-radius: 50%;
  position: relative;
  bottom: 4px;
  border: 1px solid gray;
  box-shadow: 4px 4px 8px 0px rgba(105, 105, 105, 0.5);
  padding: 1px;
  opacity: 0.5;
`;

export const bulletActiveStyle = css`
  background-color: ${MotifColor.value.base};
  border: 1px solid white;
  box-shadow: 4px 4px 8px 0px rgba(105, 105, 105, 0.5);
  opacity: 1;
`;

export const pagination: PaginationOptions = {
  clickable: true,
  type: 'bullets',
  renderBullet(index:number,className: string) {
    return `<span class="${className} custom-bullet"></span>`;
  },
};
