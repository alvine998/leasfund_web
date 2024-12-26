import Layout from "@/components/admin/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { usePathname } from "next/navigation";

export default function App({ Component, pageProps }: AppProps) {
  const pathname = usePathname();
  if (pathname?.includes("/admin"))
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  return <Component {...pageProps} />;
}
