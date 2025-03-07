import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { store } from "@/store/store";
import { Layout } from "@/layout/Layout";

import "../styles/global.scss";


export default function MyApp({
  Component,
  pageProps,
}: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}


export async function getStaticProps() {
  const res = await fetch('https://casino.api.pikakasino.com/v1/pika/en/config')
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}
