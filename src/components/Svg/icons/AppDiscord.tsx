import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface BlogProps extends SvgProps {
  isDark: boolean;
}

const Icon: React.FC<BlogProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#23242F";
  const opacity = isDark ? 1.0 : 0.8;
  return (
    <Svg width={24} height={18} fill={textColor} xmlns="http://www.w3.org/2000/svg" opacity={opacity} {...props}>
      <path
        d="M19.6405 1.47799C19.6341 1.46562 19.6235 1.45593 19.6106 1.45065C18.1215 0.767392 16.5499 0.280176 14.9354 0.00119507C14.9207 -0.00153192 14.9056 0.000435359 14.8921 0.00681712C14.8786 0.0131989 14.8675 0.0236702 14.8603 0.0367419C14.6463 0.425136 14.452 0.824081 14.2783 1.23205C12.5379 0.967868 10.7676 0.967868 9.02725 1.23205C8.85231 0.823045 8.65494 0.424001 8.43604 0.0367419C8.42853 0.0239543 8.41734 0.0137241 8.40394 0.00738382C8.39053 0.00104351 8.37553 -0.00111307 8.36088 0.00119507C6.74618 0.279591 5.17456 0.766843 3.68557 1.45069C3.67282 1.45609 3.66206 1.46532 3.65478 1.47709C0.677089 5.92389 -0.138614 10.2614 0.261542 14.5451C0.262668 14.5556 0.265894 14.5658 0.271027 14.575C0.276161 14.5842 0.283098 14.5923 0.291425 14.5988C2.02531 15.8826 3.96468 16.8626 6.02678 17.4968C6.0413 17.5012 6.05681 17.501 6.07121 17.4963C6.08562 17.4915 6.09824 17.4825 6.10736 17.4704C6.55026 16.8678 6.94269 16.2297 7.28068 15.5625C7.28533 15.5534 7.28798 15.5433 7.28846 15.5331C7.28895 15.5228 7.28725 15.5126 7.28349 15.503C7.27973 15.4935 7.27399 15.4848 7.26664 15.4777C7.2593 15.4705 7.25052 15.465 7.24088 15.4614C6.62203 15.2246 6.02292 14.9392 5.44916 14.6078C5.43874 14.6017 5.42998 14.5931 5.42367 14.5828C5.41736 14.5724 5.41369 14.5607 5.41297 14.5487C5.41226 14.5366 5.41453 14.5245 5.41958 14.5136C5.42463 14.5026 5.43231 14.493 5.44193 14.4857C5.56232 14.3955 5.68279 14.3017 5.79775 14.2069C5.80797 14.1985 5.82033 14.1931 5.83344 14.1913C5.84655 14.1896 5.8599 14.1915 5.87197 14.1969C9.63092 15.9124 13.7005 15.9124 17.4149 14.1969C17.427 14.1911 17.4405 14.1889 17.4538 14.1906C17.4671 14.1922 17.4797 14.1975 17.4901 14.206C17.6051 14.3008 17.7255 14.3955 17.8468 14.4857C17.8565 14.4929 17.8642 14.5024 17.8694 14.5134C17.8745 14.5243 17.8769 14.5364 17.8762 14.5484C17.8756 14.5605 17.872 14.5722 17.8658 14.5826C17.8596 14.5929 17.8509 14.6016 17.8405 14.6078C17.268 14.942 16.6684 15.2273 16.0479 15.4605C16.0383 15.4642 16.0295 15.4699 16.0222 15.4771C16.0149 15.4844 16.0092 15.4932 16.0056 15.5028C16.0019 15.5124 16.0003 15.5227 16.0008 15.533C16.0014 15.5433 16.0041 15.5534 16.0088 15.5625C16.3525 16.226 16.7444 16.8633 17.1813 17.4694C17.1901 17.4818 17.2027 17.4911 17.2172 17.496C17.2316 17.5009 17.2473 17.5012 17.2619 17.4967C19.3276 16.8646 21.2704 15.8846 23.0065 14.5988C23.0149 14.5926 23.022 14.5847 23.0271 14.5756C23.0323 14.5665 23.0354 14.5564 23.0363 14.546C23.5154 9.59354 22.2343 5.29162 19.6405 1.47799ZM7.84205 11.9367C6.71033 11.9367 5.77783 10.8982 5.77783 9.62272C5.77783 8.34725 6.69225 7.30862 7.84205 7.30862C9.00084 7.30862 9.92432 8.35627 9.90623 9.62264C9.90623 10.8982 8.99178 11.9367 7.84205 11.9367ZM15.4741 11.9367C14.3424 11.9367 13.4099 10.8982 13.4099 9.62272C13.4099 8.34725 14.3243 7.30862 15.4741 7.30862C16.6329 7.30862 17.5564 8.35627 17.5383 9.62264C17.5383 10.8982 16.6329 11.9367 15.4741 11.9367Z"
        fill={textColor}
      />
    </Svg>
  );
};

export default Icon;
