import { Footer, Navbar, Overlay, Portal, Sidebar } from "../../components";
import { useAppSelector } from "../../store/hooks";
import { PageMeta } from "../../utils/types";
import React, { ReactNode } from "react";
import Head from "next/head";

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
  const { isSidebarOpen } = useAppSelector((state) => state.sidebar);

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="max-w-6xl mx-auto mb-10 mt-28">{children}</main>

      <Footer />
      <Portal>
        <Sidebar />
        {isSidebarOpen ? <Overlay /> : null}
      </Portal>
    </>
  );
};

export default Layout;
