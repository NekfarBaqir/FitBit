import React, { FC } from "react";

interface iconProps {
  width?: string;
  height?: string;
  fill?: string;
}
const Addidas: FC<iconProps> = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 69 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 35.4545L2.68952 40H20.8669L13.6331 27.7273L0 35.4545ZM44.8871 40L29.5847 14.0909L15.9516 21.7273L26.7097 40H44.8871ZM50.7298 40H69L45.3508 0L31.7177 7.72727L50.7298 40Z"
        fill={fill}
      />
    </svg>
  );
};

Addidas.defaultProps = {
  fill: "black",
  width: "69",
  height: "40",
};
export default Addidas;
