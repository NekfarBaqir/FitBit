import React from "react";
import clsx from "clsx";
import { Medias } from "@const/Media";

const Logo = () => (
  <h2 className="font-bold text-5xl md:text-6xl">
    Fitbit<span className="text-Primary">.</span>
  </h2>
);
const Footer = () => {
  return (
    <footer
      className={clsx("flex-0 w-full", "bg-grayBg", "py-8 md:py-12 lg:py-20")}
    >
      <div className="flex justify-start items-center w-full container">
        <div className="flex flex-col gap-2 md:gap-4 lg:gap-6">
          <Logo />
          <div className="flex justify-between gap-2 items-center pr-4">
            {Medias.map((media) => media)}
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
