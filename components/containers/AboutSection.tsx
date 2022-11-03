import clsx from "clsx";
import Image from "next/image";
import React from "react";
import { Element } from "react-scroll";

const AboutSection = () => {
  return (
    <Element
      name="aboutUs"
      className={clsx(
        "flex justify-start items-center gap-2 md:gap-3 flex-col sm:flex-row",
        "container",
        "my-6 py-8"
      )}
    >
      <div className={clsx("w-full md:w-[55%]")}>
        <h2 className="text-5xl md:text-6xl my-12 relative">
          About Us.{" "}
          <span className="absolute left-0 w-[30%] md:w-[15%] -bottom-8 bg-Primary h-[8px] md:h-[10px]"></span>
        </h2>
        <p className="w-full md:w-[80%] text-Secondary text-xl md:text-2xl py-4">
          Fitbit was founded in 2020 as a family owned and operated business
          specialising in supplying high-quality gym equipment at great prices.
        </p>
      </div>
      <div className={clsx("w-full md:w-[45%]")}>
        <Image
          width={800}
          height={800}
          alt={"about"}
          src={"/images/about.png"}
          className="object-cover origin-center"
        />
      </div>
    </Element>
  );
};

export default AboutSection;
