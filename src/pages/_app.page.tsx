import type { AppProps } from "next/app";
import { globalStyle } from "@/styles/global";

import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { DefaultSeo } from "next-seo";
import { SessionProvider } from "next-auth/react"

import {queryClient} from '@/src/lib/react-query'
import { QueryClientProvider } from "@tanstack/react-query";
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
    <QueryClientProvider client={queryClient}>
    <SessionProvider session={session}>


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
      </QueryClientProvider>
  );
}
