import Image from "next/image";
import React, { FC } from "react";
import LinkButton from "./LinkButton";

interface sportCardType {
  img: string;
  title: string;
  link: string;
}
const SportCard: FC<sportCardType> = ({ img, title, link }) => {
  return (
    <div className="w-full h-fit overflow-hidden relative">
      <Image
        width={1280}
        height={865}
        alt={title}
        src={img}
        className="object-cover origin-center"
      />
      <div className="absolute inset-0 flex flex-col justify-end items-start w-[90%] md:w-[50%] gap-2 md:gap-3 p-8 md:p-10 lg:p-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
        <LinkButton to={link} intent="transparent" className="md:px-7">
          Browse
        </LinkButton>
      </div>
    </div>
  );
};

export default SportCard;
