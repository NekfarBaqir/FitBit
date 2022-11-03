import { SPORTTYPES } from "@const/SportTypes";
import SportCard from "@ui/SportCard";
import clsx from "clsx";
import React from "react";
import { Element } from "react-scroll";

const SportsSection = () => {
  return (
    <Element
      name="browseClasses"
      className={clsx(
        "grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8",
        "container",
        "py-6"
      )}
    >
      {SPORTTYPES.map((sport) => (
        <SportCard key={sport.title} {...sport} />
      ))}
    </Element>
  );
};

export default SportsSection;
