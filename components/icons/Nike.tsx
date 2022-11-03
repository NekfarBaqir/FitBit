import React, { FC } from "react";

interface iconProps {
  width?: string;
  height?: string;
  fill?: string;
}
const Nike: FC<iconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 108 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0513 39.2172C8.83932 39.0883 6.21142 38.2005 4.15662 36.5517C3.76447 36.2367 2.83002 35.2922 2.51652 34.8939C1.68327 33.8355 1.11677 32.8055 0.738921 31.6628C-0.423779 28.145 0.174621 23.5289 2.45052 18.4628C4.39917 14.1255 7.40602 9.82388 12.6519 3.86611C13.4247 2.98944 15.7259 0.425537 15.7407 0.425537C15.7462 0.425537 15.6208 0.644985 15.463 0.912208C14.099 3.21999 12.9319 5.93831 12.2961 8.29165C11.2747 12.0678 11.3979 15.3083 12.6569 17.8211C13.5253 19.5522 15.0142 21.0517 16.6884 21.8805C19.6193 23.3311 23.9104 23.4511 29.1508 22.2317C29.5116 22.1472 47.3899 17.3533 68.8806 11.5783C90.3713 5.80277 107.958 1.0811 107.96 1.08499C107.966 1.08999 58.0313 22.6733 32.1093 33.8705C28.0041 35.6433 26.9063 36.0911 24.9763 36.7755C20.0428 38.5255 15.6236 39.3605 12.0513 39.2172Z"
        fill={fill}
      />
    </svg>
  );
};

Nike.defaultProps = {
  fill: "black",
  width: "108",
  height: "40",
};
export default Nike;
