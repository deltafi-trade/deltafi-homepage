import React from "react";
import { SvgProps } from "../types";

interface GithubProps extends SvgProps {
  isDark: boolean;
}

const Icon: React.FC<GithubProps> = ({ isDark, ...props }) => {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 0.5C8.33594 0.5 0.5 8.33594 0.5 18C0.5 27.6641 8.33594 35.5 18 35.5C27.6641 35.5 35.5 27.6641 35.5 18C35.5 8.33594 27.6641 0.5 18 0.5ZM28 10.4102L26.4062 11.9375C26.2656 12.043 26.1992 12.2148 26.2266 12.3828V23.6211C26.1992 23.793 26.2656 23.9648 26.4062 24.0664L27.9688 25.5938V25.9336H20.125V25.6094L21.7383 24.043C21.8984 23.8828 21.8984 23.8359 21.8984 23.5977V14.5039L17.4062 25.8945H16.8008L11.5742 14.5039V22.1406C11.5273 22.4609 11.6406 22.7852 11.8672 23.0156L13.9688 25.5586V25.8984H8V25.5586L10.1016 23.0156C10.2123 22.9013 10.2947 22.7625 10.3422 22.6106C10.3897 22.4586 10.4009 22.2977 10.375 22.1406V13.3125C10.4023 13.0664 10.3086 12.8281 10.1211 12.6602L8.25391 10.4102V10.0703H14.0547L18.5312 19.8945L22.4727 10.0781H28V10.4102Z"
        fill="white"
      />
    </svg>
  );
};

export default Icon;
