import type { AppProps } from "next/app";
import { globalStyle } from "@/styles/global";
import Head from "next/head";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { DefaultSeo } from "next-seo";
import { SessionProvider } from "next-auth/react"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

globalStyle();

export default function App({ Component, pageProps: {session, ...pageProps} }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SessionProvider session={session}>
      <Head>
        <title>Book Wise</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <DefaultSeo
        title="Book Wise"
        description="Book Wise feito por Victor Paranhos"
        openGraph={{
          type: "website",
          locale: "pt_BR",
          siteName: "Book Wise",
        }}
      />
      <div>{getLayout(<Component {...pageProps} />)}</div>
      </SessionProvider>
  );
}
