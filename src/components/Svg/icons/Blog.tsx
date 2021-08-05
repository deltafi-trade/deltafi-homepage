import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface BlogProps extends SvgProps {
  isDark: boolean;
}

const Icon: React.FC<BlogProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 50 49" {...props}>
      <svg width="50" height="49" viewBox="0 0 50 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M0.667969 24.5C0.667969 10.969 11.637 0 25.168 0C38.6989 0 49.668 10.969 49.668 24.5C49.668 38.031 38.6989 49 25.168 49C11.637 49 0.667969 38.031 0.667969 24.5Z" fill={textColor} />
        <path fillRule="evenodd" clipRule="evenodd" d="M38.2349 24.4821C38.2349 25.3658 38.1449 26.2483 37.9682 27.1084C37.7959 27.9482 37.5407 28.7726 37.2064 29.5607C36.8797 30.3349 36.4746 31.081 36.0011 31.7767C35.5347 32.468 34.9975 33.1166 34.4073 33.7079C33.8158 34.2966 33.165 34.8323 32.474 35.3007C31.7759 35.7709 31.0288 36.1754 30.2542 36.5036C29.4649 36.8362 28.6386 37.091 27.7996 37.263C26.9383 37.4402 26.0526 37.5306 25.1676 37.5306C24.282 37.5306 23.3964 37.4402 22.5363 37.263C21.696 37.091 20.8697 36.8362 20.0811 36.5036C19.3065 36.1754 18.5587 35.7709 17.8607 35.3007C17.1697 34.8324 16.5188 34.2966 15.9286 33.7079C15.3378 33.1166 14.8005 32.468 14.3335 31.7767C13.8626 31.081 13.4568 30.3349 13.1288 29.5607C12.7945 28.7726 12.5386 27.9481 12.3657 27.1084C12.1909 26.2483 12.1016 25.3658 12.1016 24.4821C12.1016 23.5978 12.1909 22.7135 12.3658 21.8552C12.5387 21.0154 12.7945 20.1897 13.1289 19.4029C13.4568 18.6281 13.8627 17.8814 14.3335 17.1857C14.8006 16.4938 15.3379 15.8464 15.9287 15.2545C16.5189 14.6657 17.1697 14.1312 17.8607 13.6636C18.5587 13.1914 19.3066 12.7869 20.0811 12.4581C20.8698 12.1248 21.696 11.8694 22.5364 11.6986C23.3965 11.5228 24.2821 11.4336 25.1677 11.4336C26.0526 11.4336 26.9383 11.5228 27.7996 11.6986C28.6387 11.8694 29.4649 12.1249 30.2542 12.4581C31.0288 12.7869 31.776 13.1914 32.474 13.6636C33.165 14.1312 33.8159 14.6657 34.4073 15.2545C34.9975 15.8464 35.5348 16.4938 36.0012 17.1857C36.4746 17.8814 36.8797 18.6282 37.2064 19.4029C37.5407 20.1897 37.7959 21.0154 37.9682 21.8552C38.1449 22.7135 38.2349 23.5978 38.2349 24.4821ZM20.4064 14.4033C17.2946 15.8706 14.9721 18.7339 14.2479 22.1846C14.5421 22.1872 19.1922 22.2458 24.5499 20.8243C22.6186 17.3978 20.5551 14.6015 20.4064 14.4033ZM25.4745 22.5402C19.7288 24.2578 14.2154 24.1342 14.0176 24.1266C14.0144 24.2464 14.0086 24.3623 14.0086 24.4821C14.0086 27.3447 15.0901 29.9544 16.8678 31.9277C16.8639 31.9219 19.9177 26.512 25.9396 24.5675C26.0851 24.5191 26.2331 24.4757 26.3799 24.4337C26.0998 23.8004 25.7941 23.1658 25.4745 22.5402ZM32.5371 16.1191C30.5725 14.3892 27.9929 13.3399 25.1676 13.3399C24.2609 13.3399 23.381 13.4495 22.5382 13.6521C22.7053 13.8764 24.8014 16.653 26.7098 20.1521C30.9203 18.5759 32.5097 16.1598 32.5371 16.1191ZM27.1405 26.2801C27.1157 26.2884 27.0908 26.2954 27.0665 26.3043C20.4825 28.5963 18.3325 33.2152 18.3092 33.2657C20.2036 34.7368 22.5797 35.6243 25.1677 35.6243C26.713 35.6243 28.185 35.3102 29.5243 34.7413C29.359 33.7677 28.7107 30.3552 27.1405 26.2801ZM31.4033 33.7231C33.9089 32.0347 35.6884 29.3537 36.1848 26.2482C35.9552 26.1743 32.8332 25.1874 29.2313 25.764C30.695 29.7806 31.2897 33.0516 31.4033 33.7231ZM27.5687 21.8125C27.8277 22.3439 28.0785 22.8848 28.3101 23.4283C28.3924 23.6233 28.4728 23.8144 28.5513 24.0055C32.3847 23.5238 36.1613 24.3343 36.3228 24.3674C36.2973 21.7259 35.351 19.3015 33.7853 17.4036C33.7642 17.4334 31.9744 20.0158 27.5687 21.8125Z" fill={textColor} />
      </svg>
    </Svg>
  );
};

export default Icon;
