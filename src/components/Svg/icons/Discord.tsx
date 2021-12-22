import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface DiscordProps extends SvgProps {
  isDark: boolean;
}

const Icon: React.FC<DiscordProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 50 49" {...props}>
      <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="29" height="29" rx="7" fill="url(#paint0_linear_2712:10529)"/>
      <path d="M20.5062 9.07813C19.4013 8.57985 18.217 8.21155 16.9785 8.00213C16.9675 8.00001 16.956 8.00138 16.9458 8.00604C16.9356 8.01069 16.9271 8.01841 16.9214 8.02813C16.7698 8.2946 16.6008 8.64195 16.4824 8.91637C15.1689 8.72011 13.8335 8.72011 12.52 8.91637C12.388 8.61224 12.2393 8.3157 12.0744 8.02813C12.0688 8.01829 12.0603 8.0104 12.0502 8.0055C12.04 8.00059 12.0285 7.99891 12.0173 8.00069C10.7796 8.21011 9.59527 8.5784 8.48966 9.07741C8.48015 9.0814 8.47209 9.0882 8.46655 9.0969C6.21924 12.4007 5.60324 15.6229 5.90582 18.8047C5.90667 18.8125 5.90908 18.82 5.91293 18.8269C5.91678 18.8337 5.92198 18.8397 5.92821 18.8444C7.23991 19.7994 8.70294 20.5269 10.256 20.9964C10.2669 20.9998 10.2784 20.9997 10.2893 20.9964C10.3001 20.993 10.3096 20.9865 10.3167 20.9776C10.6503 20.5299 10.9478 20.0569 11.202 19.5601C11.2172 19.5312 11.2028 19.4965 11.1724 19.485C10.7059 19.3093 10.2539 19.0973 9.82058 18.8509C9.81279 18.8465 9.80623 18.8402 9.80148 18.8326C9.79673 18.825 9.79395 18.8163 9.79338 18.8073C9.7928 18.7984 9.79446 18.7895 9.7982 18.7813C9.80194 18.7732 9.80764 18.7661 9.8148 18.7607C9.90579 18.6935 9.99678 18.6235 10.0834 18.5534C10.0912 18.5471 10.1006 18.5431 10.1106 18.5418C10.1205 18.5405 10.1306 18.5421 10.1398 18.5462C12.9756 19.82 16.0469 19.82 18.8496 18.5462C18.8587 18.5418 18.8689 18.5401 18.879 18.5412C18.8891 18.5424 18.8987 18.5464 18.9066 18.5527C18.9933 18.6234 19.0835 18.6935 19.1753 18.7607C19.1825 18.7659 19.1883 18.7729 19.1921 18.781C19.196 18.7891 19.1978 18.798 19.1974 18.807C19.1969 18.8159 19.1943 18.8246 19.1897 18.8323C19.1851 18.8399 19.1786 18.8464 19.1709 18.8509C18.7391 19.0993 18.2899 19.3095 17.8183 19.4842C17.8111 19.4869 17.8045 19.491 17.799 19.4964C17.7935 19.5018 17.7892 19.5083 17.7864 19.5155C17.7836 19.5226 17.7823 19.5303 17.7827 19.538C17.7831 19.5457 17.7852 19.5532 17.7887 19.5601C18.0487 20.0562 18.3462 20.5285 18.6734 20.9769C18.6802 20.9861 18.6896 20.993 18.7005 20.9966C18.7113 21.0002 18.7231 21.0004 18.734 20.9971C20.2898 20.5289 21.7552 19.8011 23.0683 18.8444C23.0747 18.8399 23.0801 18.8342 23.0841 18.8274C23.0881 18.8207 23.0906 18.8132 23.0914 18.8054C23.4525 15.1268 22.4863 11.9306 20.5286 9.09835C20.5238 9.08914 20.5158 9.08197 20.5062 9.07813ZM11.6259 16.8672C10.7724 16.8672 10.0683 16.0952 10.0683 15.1485C10.0683 14.201 10.7586 13.4298 11.6259 13.4298C12.4997 13.4298 13.1973 14.2075 13.1836 15.1485C13.1836 16.0959 12.4932 16.8672 11.6259 16.8672ZM17.3851 16.8672C16.5308 16.8672 15.8274 16.0952 15.8274 15.1485C15.8274 14.201 16.517 13.4298 17.3851 13.4298C18.2588 13.4298 18.9564 14.2075 18.9427 15.1485C18.9427 16.0959 18.2596 16.8672 17.3851 16.8672Z" fill={textColor}/>
      <defs>
      <linearGradient id="paint0_linear_2712:10529" x1="29" y1="29" x2="0.499999" y2="1" gradientUnits="userSpaceOnUse">
      <stop stop-color="#434BFF"/>
      <stop offset="1" stop-color="#FF4B81"/>
      </linearGradient>
      </defs>
      </svg>
    </Svg>
  );
};

export default Icon;
