import clsx from "clsx";
import Image from "next/image";
import React, { FC } from "react";

interface ShopCardPropsType {
  name: string;
  category: string;
  img: string;
  price: string;
}
const ShopCard: FC<ShopCardPropsType> = ({ name, category, img, price }) => {
  return (
    <div className={clsx("flex flex-col gap-4", "w-full")}>
      <Image
        width={1200}
        height={1579}
        alt={name}
        src={img}
        className="object-cover origin-center"
      />
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl md:text-3xl font-bold">{name}</h2>
          <p className="text-Secondary text-sm md:text-base">{category}</p>
        </div>
        <p className="text-base">
          <span className="text-xs">$</span>
          {price}
        </p>
      </div>
    </div>
  );
};

export default ShopCard;
