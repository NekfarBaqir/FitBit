import { ShopItems } from "@const/ShopItems";
import LinkButton from "@ui/LinkButton";
import ShopCard from "@ui/ShopCard";
import clsx from "clsx";
import React from "react";
import { Element } from "react-scroll";

const ShopSection = () => {
  return (
    <Element name="shop" className="py-6 md:py-8 lg:py-12 xl:py-20 container">
      <div className="flex  justify-between items-center p">
        <h2 className="  text-4xl sm:text-5xl md:text-6xl my-12 relative flex-0">
          Nike New Launches!
          <span className="absolute left-0 w-[30%]  -bottom-8 bg-Primary h-[8px] md:h-[10px]"></span>
        </h2>
        <div className="min-w-[100px]">
          <LinkButton
            to="viewAll"
            className="flex-1 text-black border border-black md:px-8"
            intent="transparent"
          >
            View All
          </LinkButton>
        </div>
      </div>
      <div
        className={clsx(
          "py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12"
        )}
      >
        {ShopItems.map((item) => (
          <ShopCard {...item} key={item.name} />
        ))}
      </div>
    </Element>
  );
};

export default ShopSection;
