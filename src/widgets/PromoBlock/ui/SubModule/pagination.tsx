import { MotifColor } from "@/shared/style/theme";
import { css } from "@emotion/react";
import { PaginationOptions } from "swiper/types";

export const bulletStyle = css`
  width: 40px;
  height: 10px;
  background-color: ${MotifColor.value.base};
  display: inline-block;
  margin-top: 4px;
  border-radius: 4px;
`;

export const bulletActiveStyle = css`
  background-color: ${MotifColor.value.base};
`;

export const pagination: PaginationOptions = {
  clickable: true,
  type: 'bullets',
  renderBullet(index:number,className: string) {
    return `<span class="${className} custom-bullet"></span>`;
  },
};
