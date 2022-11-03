import clsx from "clsx";
import React, { FC } from "react";

interface OutStandCardPopsType {
  subTitle: string;
  title: string;
  noBorder: boolean;
}
const OutStandCard: FC<OutStandCardPopsType> = ({
  title,
  subTitle,
  noBorder,
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col gap-2 md:gap-3 justify-center transition-all items-center py-8 md:py-20",
        !noBorder && "border-r hover:border-r-0",
        "hover:shadow-xl shadow-slate-300 hover:text-Primary"
      )}
    >
      <h2 className="text-5xl md:text-6xl font-bold y">{title}</h2>
      <p className="text-xl md:text-2xl text-Secondary">{subTitle}</p>
    </div>
  );
};

export default OutStandCard;
