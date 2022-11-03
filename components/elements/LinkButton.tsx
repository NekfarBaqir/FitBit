import React, { FC } from "react";
import clsx from "clsx";
import { Link } from "react-scroll";

interface ButtonPropsType {
  to: string;
  intent?: "primary" | "white" | "transparent" | "menu";
  className?: string;
  children: string;
}
const LinkButton: FC<ButtonPropsType> = ({
  to,
  intent,
  className,
  children,
}) => {
  return (
    <Link
      className={clsx(
        "px-4 md:px-5 py-1 md:py-2  rounded-3xl",
        "text-sm md:text-base",
        "cursor-pointer  transition-all",
        intent === "primary" && "bg-Primary text-white hover:bg-blue-600",
        intent === "white" &&
          "bg-white border-white border text-black hover:bg-slate-300 hover:border-slate-300",
        intent === "transparent" &&
          "bg-transparent border border-white text-white hover:text-slate-300 hover:border-slate-300",
        intent === "menu" && "bg-transparent text-black hover:text-gray-700",
        className
      )}
      to={to}
      smooth={true}
      duration={500}
    >
      {children}
    </Link>
  );
};

LinkButton.defaultProps = {
  intent: "primary",
  className: "",
};

export default LinkButton;
