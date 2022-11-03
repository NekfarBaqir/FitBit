import React, { FC, useState } from "react";
import clsx from "clsx";
import LinkButton from "@ui/LinkButton";
import { MENUS } from "@const/Menu";

const Logo = () => <h2 className="font-bold text-xl md:text-2xl">Fitbit.</h2>;
const Header: FC = () => {
  const [mobileMenuVisibility, setMobileMenuVisibility] = useState(false);
  const menuToggler = () => {
    setMobileMenuVisibility((prev) => !prev);
  };
  return (
    <header
      className={clsx(
        "flex-0 w-full relative",
        "py-4  pb-5",
        "container",
        "flex justify-between items-center"
      )}
    >
      <Logo />
      <ul className="hidden md:block">
        {MENUS.map((menu) => (
          <LinkButton
            key={menu.title}
            to={menu.to}
            intent="menu"
            className="font-bold md:px-4"
          >
            {menu.title}
          </LinkButton>
        ))}
      </ul>
      <button className="inline md:hidden" onClick={menuToggler}>menus</button>
      {/* for mobile */}
      <ul
        className={clsx(
          "md:hidden absolute top-[99%] w-full  py-3 z-10 left-0 transition-all bg-white flex flex-col origin-top",
          mobileMenuVisibility ? "scale-y-100" : "scale-y-0"
        )}
      >
        {MENUS.map((menu) => (
          <LinkButton
            key={menu.title}
            to={menu.to}
            intent="menu"
            className="font-bold md:px-4"
          >
            {menu.title}
          </LinkButton>
        ))}
      </ul>
      <LinkButton to="login">Login</LinkButton>
    </header>
  );
};

export default Header;
