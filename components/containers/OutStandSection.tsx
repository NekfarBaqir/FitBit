import { OUYSTANDINGS } from "@const/OutStandings";
import OutStandCard from "@ui/OutStandCard";
import clsx from "clsx";
import React from "react";

const OutStandSection = () => {
  return (
    <div className={clsx("py-6 md:py-8", "grid gap-2 grid-cols-2 md:grid-cols-4","container")}>
      {OUYSTANDINGS.map((outStand,index) => (
        <OutStandCard {...outStand} noBorder={index===OUYSTANDINGS.length-1}/>
      ))}
    </div>
  );
};

export default OutStandSection;
