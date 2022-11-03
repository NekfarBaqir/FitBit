import React, { FC } from "react";
import clsx from "clsx";
import LinkButton from "@ui/LinkButton";
import { MENUS } from "@const/Menu";

const Logo = () => <h2 className="font-bold text-xl md:text-2xl">Fitbit.</h2>;
const Header: FC = () => {
  return (
    <header
      className={clsx(
        "flex-0 w-full",
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
      <LinkButton to="login">Login</LinkButton>
    </header>
  );
};

export default Header;
