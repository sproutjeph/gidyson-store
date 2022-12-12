import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Roboto } from "@next/font/google";
import type { AppProps } from "next/app";
import { store } from "../store/store";
import { Layout } from "../components";
import { Provider } from "react-redux";
import "../styles/Custom.css";
import "../styles/main.css";

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
