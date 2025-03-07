import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { store } from "@/store/store";
import { Layout } from "@/layout/Layout";
import { FooterProps } from "@/components/Footer/types";

import "../styles/global.scss";

interface CustomAppProps extends AppProps {
  footerContent: FooterProps; // Extend AppProps to include footerContent
}

export default function MyApp({
  Component,
  pageProps,
}: CustomAppProps) {
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

// MyApp.getInitialProps = async () => {
//   try {
//     const res = await axios.get(`${API_URL}/en/config`);
//     return {
//       footerContent: res.data?.footerContent || {
//         footerContent: {
//           logoUrl: "",
//           links: [],
//           licenseLogos: [],
//           copyright: "",
//           licenseText: "",
//           responsibleGambling: "",
//           providerLogos: [],
//         },
//       },
//     };
//   } catch (error) {
//     console.error("Error fetching footer content:", error);
//     return { footerContent: [] };
//   }
// };
