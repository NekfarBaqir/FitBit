import React, { FC, ReactElement } from "react";
import clsx from "clsx";
import Head from "next/head";
import Header from "@ui/Header";
import Footer from "@ui/Footer";


interface LayoutPropsType {
  children: ReactElement;
  SEO?: ReactElement;
}
const Layout: FC<LayoutPropsType> = ({ children, SEO }) => {
  return (
    <div
      className={clsx(
        "w-full min-h-screen",
        "py-2 ",
        "flex flex-col"
      )}
    >
      <Header />
      <main className={clsx("w-full", "flex-1")}>{children}</main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  SEO: (
    <Head>
      <title>A website for athletes!</title>
    </Head>
  ),
};

export default Layout;
