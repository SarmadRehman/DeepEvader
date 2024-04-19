import '@/styles/globals.css';
import '@/styles/fonts.css';
import Layout from '@/components/Layout/layout';
import { ApiDataProvider } from '@/Hooks/useDataProvider';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApiDataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApiDataProvider>
  );
}
