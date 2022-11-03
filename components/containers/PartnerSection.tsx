import { PARTNERS } from "@const/Partners";
import clsx from "clsx";
import React from "react";

const PartnerSection = () => {
  return (
    <div
      className={clsx(
        "flex flex-col sm:flex-row justify-between items-center gap-4",
        "container py-8 md:py-10 lg:py-12 xl:py-20"
      )}
    >
      <h2
        className={clsx(
          "text-Secondary tracking-widest font-medium text-xl md:text-2xl text-center md:text-left w-full md:w-[40%]"
        )}
      >
        OUR BRAND PARTNERS
      </h2>
      <div className="flex justify-between items-center w-full md:w-[60%]">
        {PARTNERS.map((Item) => Item)}
      </div>
    </div>
  );
};

export default PartnerSection;
