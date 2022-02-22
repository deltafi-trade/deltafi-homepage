import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface TwitterProps extends SvgProps {
  isDark: boolean
}

const Icon: React.FC<TwitterProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 20 16" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m9.637 4.061.04.66-.668-.08C6.58 4.33 4.458 3.28 2.656 1.514L1.775.638l-.227.647c-.48 1.442-.174 2.965.827 3.989.534.566.414.647-.507.31-.32-.108-.6-.189-.627-.148-.094.094.227 1.32.48 1.806.347.673 1.055 1.334 1.829 1.724l.654.31-.774.014c-.748 0-.774.013-.694.296.267.876 1.321 1.806 2.496 2.21l.827.283-.72.432a7.516 7.516 0 0 1-3.578.997c-.6.013-1.094.067-1.094.108 0 .135 1.628.89 2.576 1.186 2.843.876 6.22.498 8.756-.998 1.803-1.064 3.604-3.18 4.445-5.228.454-1.092.908-3.086.908-4.043 0-.62.04-.7.788-1.442.44-.431.854-.903.934-1.038.134-.256.12-.256-.56-.027-1.135.405-1.295.35-.735-.256.414-.431.908-1.213.908-1.442 0-.04-.2.027-.427.149-.24.134-.774.336-1.175.458l-.72.229-.655-.445c-.36-.242-.867-.512-1.134-.593-.681-.188-1.722-.162-2.336.054-1.669.606-2.723 2.17-2.603 3.881Z"
        fill={textColor}
      />
    </Svg>
  );
};

export default Icon;
