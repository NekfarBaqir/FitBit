import React, { Fragment } from "react";
import clsx from "clsx";
import { Medias } from "@const/Media";
import { footerMenus } from "@const/footerMenu";
import LinkButton from "@ui/LinkButton";
import LowFooter from "./LowFooter";

const Logo = () => (
  <h2 className="font-bold text-5xl md:text-6xl">
    Fitbit<span className="text-Primary">.</span>
  </h2>
);
const Footer = () => {
  return (
    <footer
      className={clsx("flex-0 w-full", "bg-grayBg", "pt-8 md:pt-12 lg:pt-20")}
    >
      <div className="flex flex-col md:flex-row gap-4 justify-start items-center w-full container">
        <div className="flex flex-col justify-center items-center gap-2 md:gap-4 lg:gap-6 w-full md:w-[30%] lg:w-[40%]">
          <Logo />
          <div className="flex justify-between gap-2 items-center pr-4 max-w-[170px]">
            {Medias.map((media, index) => (
              <Fragment key={index}>{media}</Fragment>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 w-full md:w-[70%] lg:w-[60%] gap-4 md:gap-2">
          {footerMenus.map((menus, index) => (
            <ul key={index} className="flex flex-col gap-2 md:gap-4">
              {menus.map((menu) => (
                <li key={menu.name}>
                  <LinkButton
                    to={menu.to}
                    intent="menu"
                    className="text-Secondary px-0 md:px-0 py-0"
                  >
                    {menu.name}
                  </LinkButton>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <LowFooter />
    </footer>
  );
};

export default Footer;
