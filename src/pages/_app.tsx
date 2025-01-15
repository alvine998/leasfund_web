import Layout from "@/components/admin/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { usePathname } from "next/navigation";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();
  if (pathname?.includes("/admin"))
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  return (
    <>
      <Head>
        <title>Leasfund</title>
        <meta
          name="description"
          content="Leasfund adalah layanan keuangan terpercaya untuk gadai BPKB kendaraan. Proses cepat, aman, bunga rendah, dan pencairan dana langsung. Solusi finansial Anda!"
        />
        <meta
          name="keywords"
          content="gadai, gadai bpkb mobil, gadai bpkb motor, gadai bpkb, dana tunai, layanan keuangan, solusi keuangan, pinjaman"
        />
        <meta name="author" content="Alvine" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Leasfund" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-R4VX5DDJSR`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-R4VX5DDJSR', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1465977632288270"
        crossOrigin="anonymous"
      ></Script>
      <Component {...pageProps} />
    </>
  );
}
