import Layout from "@/components/layout/Layout";
import client from "@/lib/apolloClient";
import { useCartStore } from "@/lib/store";
import "@/styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const initializeCart = useCartStore((state) => state.initializeCart); 

  useEffect(() => {
    initializeCart();
  }, []);
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}
