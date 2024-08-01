import Header from "@/components/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import { SessionProvider } from "next-auth/react"

export const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
    <Header/>
    <main className={roboto.className}>
      <Component {...pageProps} />;
    </main>
    </SessionProvider>
  );
}
