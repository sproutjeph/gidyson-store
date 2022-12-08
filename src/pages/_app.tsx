import "../styles/main.css";
import "../styles/Custom.css";

import { Layout } from "../components";
import { store } from "../store/store";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { Roboto } from "@next/font/google";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { SessionProvider } from "next-auth/react";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: "400",
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <main className={`${roboto.variable} font-sans h-screen`}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ToastContainer />
        </main>
      </Provider>
    </SessionProvider>
  );
}
