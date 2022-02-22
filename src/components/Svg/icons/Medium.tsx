import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface GithubProps extends SvgProps {
  isDark: boolean;
}

const Icon: React.FC<GithubProps> = ({ isDark, ...props }) => {
  return (
    <Svg viewBox="0 0 50 49" {...props}>
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M1 16.9301C1 8.13216 8.13216 1 16.9301 1C25.7281 1 32.8603 8.13216 32.8603 16.9301C32.8603 25.7281 25.7281 32.8603 16.9301 32.8603C8.13216 32.8603 1 25.7281 1 16.9301Z" stroke="url(#paint0_linear_211_9969)" strokeWidth="0.5" />
        <g clipPath="url(#clip0_211_9969)">
          <path d="M12.6411 11.0612C9.37621 11.0612 6.72949 13.7261 6.72949 17.0133C6.72949 20.3004 9.3764 22.9654 12.6411 22.9654C15.9057 22.9654 18.5526 20.3006 18.5526 17.0133C18.5526 13.726 15.9061 11.0612 12.6411 11.0612ZM22.0816 11.4098C20.4491 11.4098 19.1259 13.9192 19.1259 17.0134C19.1259 20.1076 20.4493 22.6171 22.0818 22.6171C23.7142 22.6171 25.0376 20.1077 25.0376 17.0134H25.0374C25.0374 13.9183 23.7142 11.4098 22.0816 11.4098H22.0816ZM26.6505 11.9935C26.0765 11.9935 25.6112 14.2411 25.6112 17.0134C25.6112 19.7856 26.0762 22.0333 26.6505 22.0333C27.2248 22.0333 27.6902 19.785 27.6902 17.0133C27.6902 14.2409 27.2246 11.9935 26.6506 11.9935H26.6505Z" fill="url(#paint1_linear_211_9969)" />
        </g>
        <defs>
          <linearGradient id="paint0_linear_211_9969" x1="-1.09319" y1="32.8603" x2="33.7227" y2="6.33958" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1AFA9A" />
            <stop offset="0.53125" stopColor="#478EF0" />
            <stop offset="0.990948" stopColor="#9945FD" />
          </linearGradient>
          <linearGradient id="paint1_linear_211_9969" x1="5.3524" y1="22.9654" x2="18.2843" y2="5.62043" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1AFA9A" />
            <stop offset="0.53125" stopColor="#478EF0" />
            <stop offset="0.990948" stopColor="#9945FD" />
          </linearGradient>
          <clipPath id="clip0_211_9969">
            <rect width="20.9607" height="16.7686" fill="white" transform="translate(6.86914 8.5459)" />
          </clipPath>
        </defs>
      </svg>
    </Svg>
  );
};

export default Icon;
