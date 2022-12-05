import React, { ReactNode } from "react";
import Head from "next/head";
import { PageMeta } from "../../utils/types";
import { Footer, Navbar } from "../../components";

interface Props {
  children: ReactNode;
  meta?: PageMeta;
}

const Layout = ({ children, meta: pageMeta }: Props) => {
  const meta = {
    title: "Gidyson Online Store",
    description: "Brought to you By Jephthah",
    ...pageMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="max-w-6xl mx-auto mb-10 ">{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
