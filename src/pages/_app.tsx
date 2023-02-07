import { Hydrate, QueryClientProvider } from "@tanstack/react-query";
import { AppProps } from "next/app";
import { queryClient } from "common/utils/react-query-client";
import { MainLayout } from "common/components/layout/main-layout.component";
import "themes/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default MyApp;
