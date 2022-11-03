import LinkButton from "@ui/LinkButton";
import Video from "@ui/Video";
import clsx from "clsx";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative">
      <Video />
      <div
        className={clsx(
          "absolute inset-0 z-1",
          "flex flex-col justify-center items-center"
        )}
      >
        <h1 className={clsx("font-bold", "text-[9vw] md:text-[7vw] text-white")}>
          <span className="sr-only">Dare to be great.</span>
          Dare to be great.
        </h1>
        <div
          className={clsx(
            "flex justify-center items-center gap-2 md:gap-3 lg:gap-4",
            "py-4"
          )}
        >
          <LinkButton to="getStarted" intent="white">
            Get Started
          </LinkButton>
          <LinkButton to="watchDemo" intent="transparent">
            Watch Demo
          </LinkButton>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
