import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface PinterestProps extends SvgProps {
  isDark: boolean;
}

const Icon: React.FC<PinterestProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 49 49" {...props}>
      <svg width="49" height="49" viewBox="0 0 49 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M0 24.5C0 10.969 10.969 0 24.5 0C38.031 0 49 10.969 49 24.5C49 38.031 38.031 49 24.5 49C10.969 49 0 38.031 0 24.5Z" fill={textColor} />
        <path fillRule="evenodd" clipRule="evenodd" d="M24.5015 11.4336C20.9528 11.4336 20.5074 11.4491 19.1136 11.5125C17.7225 11.5762 16.773 11.7965 15.9422 12.1196C15.0828 12.4533 14.3538 12.8998 13.6275 13.6264C12.9006 14.3527 12.4542 15.0817 12.1193 15.9408C11.7954 16.7719 11.5749 17.7217 11.5123 19.1122C11.4499 20.506 11.4336 20.9517 11.4336 24.5004C11.4336 28.0491 11.4494 28.4931 11.5125 29.8869C11.5765 31.278 11.7967 32.2275 12.1196 33.0583C12.4536 33.9177 12.9001 34.6468 13.6266 35.3731C14.3527 36.0999 15.0817 36.5474 15.9406 36.8812C16.7719 37.2043 17.7217 37.4245 19.1125 37.4883C20.5063 37.5517 20.9514 37.5672 24.4999 37.5672C28.0489 37.5672 28.4929 37.5517 29.8866 37.4883C31.2777 37.4245 32.2283 37.2043 33.0597 36.8812C33.9188 36.5474 34.6468 36.0999 35.3728 35.3731C36.0996 34.6468 36.5461 33.9177 36.8809 33.0586C37.2021 32.2275 37.4227 31.2777 37.488 29.8872C37.5506 28.4934 37.5669 28.0491 37.5669 24.5004C37.5669 20.9517 37.5506 20.5063 37.488 19.1125C37.4227 17.7214 37.2021 16.7719 36.8809 15.9411C36.5461 15.0817 36.0996 14.3527 35.3728 13.6264C34.646 12.8995 33.9191 12.4531 33.0589 12.1196C32.2259 11.7965 31.2758 11.5762 29.8847 11.5125C28.4909 11.4491 28.0472 11.4336 24.4974 11.4336H24.5015ZM23.3292 13.7883C23.6771 13.7878 24.0653 13.7883 24.5014 13.7883C27.9903 13.7883 28.4038 13.8008 29.7815 13.8634C31.0555 13.9217 31.747 14.1346 32.2076 14.3134C32.8174 14.5503 33.2521 14.8334 33.7092 15.2907C34.1665 15.7481 34.4496 16.1836 34.687 16.7934C34.8659 17.2535 35.079 17.9449 35.137 19.2189C35.1996 20.5964 35.2132 21.0102 35.2132 24.4974C35.2132 27.9846 35.1996 28.3983 35.137 29.7758C35.0787 31.0498 34.8659 31.7413 34.687 32.2013C34.4502 32.8111 34.1665 33.2453 33.7092 33.7024C33.2518 34.1597 32.8176 34.4428 32.2076 34.6797C31.7475 34.8593 31.0555 35.0717 29.7815 35.1299C28.4041 35.1925 27.9903 35.2062 24.5014 35.2062C21.0123 35.2062 20.5988 35.1925 19.2214 35.1299C17.9473 35.0711 17.2559 34.8582 16.795 34.6794C16.1852 34.4426 15.7497 34.1594 15.2923 33.7021C14.835 33.2448 14.5519 32.8103 14.3145 32.2002C14.1356 31.7402 13.9225 31.0487 13.8645 29.7747C13.8019 28.3973 13.7894 27.9835 13.7894 24.4941C13.7894 21.0047 13.8019 20.5931 13.8645 19.2157C13.9228 17.9416 14.1356 17.2502 14.3145 16.7896C14.5513 16.1798 14.835 15.7442 15.2923 15.2869C15.7497 14.8296 16.1852 14.5465 16.795 14.3091C17.2556 14.1294 17.9473 13.9171 19.2214 13.8585C20.4268 13.8041 20.8939 13.7878 23.3292 13.785V13.7883ZM31.4764 15.9579C30.6107 15.9579 29.9084 16.6595 29.9084 17.5254C29.9084 18.3911 30.6107 19.0934 31.4764 19.0934C32.3421 19.0934 33.0444 18.3911 33.0444 17.5254C33.0444 16.6597 32.3421 15.9579 31.4764 15.9579ZM24.5015 17.79C20.7957 17.79 17.7912 20.7946 17.7912 24.5004C17.7912 28.2062 20.7957 31.2093 24.5015 31.2093C28.2073 31.2093 31.2108 28.2062 31.2108 24.5004C31.2108 20.7946 28.2073 17.79 24.5015 17.79ZM24.5015 20.1448C26.9068 20.1448 28.8571 22.0947 28.8571 24.5004C28.8571 26.9057 26.9068 28.856 24.5015 28.856C22.0958 28.856 20.1459 26.9057 20.1459 24.5004C20.1459 22.0947 22.0958 20.1448 24.5015 20.1448Z" fill={textColor} />
      </svg>
    </Svg>
  );
};

export default Icon;
