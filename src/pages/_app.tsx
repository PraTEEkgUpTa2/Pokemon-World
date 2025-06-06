
import { SearchProvider } from '@/context/SearchContext'; 
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    
      <SearchProvider>
        <Component {...pageProps} />
      </SearchProvider>
    
  );
}
