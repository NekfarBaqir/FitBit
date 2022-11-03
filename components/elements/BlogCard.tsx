import Image from "next/image";
import React, { FC } from "react";
import LinkButton from "./LinkButton";

interface BlogCardType {
  img: string;
  title: string;
  link: string;
  width: number;
  height: number;
  buttonType: "transparent" | "white";
}
const BlogCard: FC<BlogCardType> = ({
  img,
  title,
  link,
  width,
  height,
  buttonType,
}) => {
  return (
    <div className="w-full h-fit overflow-hidden relative">
      <Image
        width={width}
        height={height}
        alt={title}
        src={img}
        className="object-cover origin-center"
      />
      <div className="absolute inset-0 flex flex-col justify-end items-start w-[90%]  gap-2 md:gap-3 p-8 md:p-10 lg:p-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
        <LinkButton to={link} intent={buttonType} className="md:px-7">
          Read Blog
        </LinkButton>
      </div>
    </div>
  );
};

export default BlogCard;
