import LinkButton from "@ui/LinkButton";
import clsx from "clsx";
import React from "react";

const SubscribeSection = () => {
  return (
    <div className="container my-12">
      <div className={clsx("bg-black py-6 md:py-8 lg:py-12 xl:py-20 px-6 md:px-8 lg:px-20","flex flex-col sm:flex-row gap-2 justify-between items-center")}>
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold  w-[95%] sm:w-[50%]">
        Subscribe to our newsletter.
        </h2>
        <LinkButton to="subscribe" intent="primary" className="md:px-10 md:py-4">Subscribe </LinkButton>
      </div>
    </div>
  );
};

export default SubscribeSection;
