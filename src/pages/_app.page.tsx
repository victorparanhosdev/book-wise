import type { AppProps } from "next/app";
import { globalStyle } from "@/styles/global";
import Head from "next/head";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { DefaultSeo } from "next-seo";
import { SessionProvider } from "next-auth/react"
import * as Dialog from '@radix-ui/react-dialog'
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
    <Dialog.Root>
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
      </Dialog.Root>
      </SessionProvider>
      </QueryClientProvider>
  );
}
