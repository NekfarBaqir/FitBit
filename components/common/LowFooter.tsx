import { lowFooterMenus } from "@const/footerMenu";
import LinkButton from "@ui/LinkButton";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

const LowFooter = () => {
  return (
    <div
      className={clsx(
        "container",
        "flex flex-col md:flex-row justify-between items-center gap-2",
        "pt-8 md:pt-12 lg:pt-20 pb-8"
      )}
    >
      <p className="py-2 text-Secondary">
        Copyright © 2022 Fitbit. All rights reserved.
      </p>
      <div className="flex justify-center items-center gap-2 md:gap-4 lg:gap-5">
        {lowFooterMenus.map((item) => (
          <LinkButton
            key={item.name}
            to={item.to}
            intent="menu"
            className="text-Secondary px-0 md:px-0 py-0 text-sm md:text-sm"
          >
            {item.name}
          </LinkButton>
        ))}
      </div>
      <div>
        <button
          type="button"
          className="border border-black text-black hover:text-black/90  hover:border-black/90 px-4 py-2 rounded-3xl"
        >
          <div className="flex justify-center gap-1 text-sm items-center">
            <Image alt="" src="/images/us.png" width={25} height={20} />
            United States{" "}
          </div>
        </button>
      </div>
    </div>
  );
};

export default LowFooter;
