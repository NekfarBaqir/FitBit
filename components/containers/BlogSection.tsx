import { Blogs } from "@const/blogs";
import BlogCard from "@ui/BlogCard";
import React from "react";
import { Element } from "react-scroll";

const BlogSection = () => {
  return (
    <Element name="blog" className="container py-6 ">
      <div className="flex  justify-between items-center ">
        <h2 className="  text-4xl sm:text-5xl md:text-6xl my-12 relative flex-0">
          Our Blogs
          <span className="absolute left-0 w-[40%]  -bottom-8 bg-Primary h-[8px] md:h-[10px]"></span>
        </h2>
      </div>
      <div className="grid grid-col-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 xl:gap-12">
        <BlogCard {...Blogs[0]} buttonType="white" />
        <div className="grid grid-rows-2  gap-4 md:gap-6 lg:gap-8 xl:gap-12">
          {Blogs.slice(1, Blogs.length).map((blog) => (
            <BlogCard key={blog.title} {...blog} buttonType="transparent" />
          ))}
        </div>
      </div>
    </Element>
  );
};

export default BlogSection;
