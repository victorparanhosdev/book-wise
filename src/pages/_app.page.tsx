import type { AppProps } from "next/app";
import { globalStyle } from "@/styles/global";
import Head from "next/head";

globalStyle();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Book Wise</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
