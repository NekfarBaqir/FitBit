import React, { FC } from "react";

interface iconProps {
  width?: string;
  height?: string;
  fill?: string;
}
const Twitter: FC<iconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.7813 0.281738H1.21875C0.700195 0.281738 0.28125 0.700684 0.28125 1.21924V22.7817C0.28125 23.3003 0.700195 23.7192 1.21875 23.7192H22.7813C23.2998 23.7192 23.7188 23.3003 23.7188 22.7817V1.21924C23.7188 0.700684 23.2998 0.281738 22.7813 0.281738ZM20.0742 7.12256H18.2022C16.7344 7.12256 16.4502 7.81982 16.4502 8.84521V11.104H19.9541L19.4971 14.6401H16.4502V23.7192H12.7969V14.6431H9.74121V11.104H12.7969V8.49658C12.7969 5.47021 14.6455 3.8208 17.3467 3.8208C18.6416 3.8208 19.752 3.91748 20.0772 3.96143V7.12256H20.0742Z"
        fill={fill}
      />
    </svg>
  );
};

Twitter.defaultProps = {
  fill: "#5F5F5F",
  width: "24",
  height: "24",
};
export default Twitter;
