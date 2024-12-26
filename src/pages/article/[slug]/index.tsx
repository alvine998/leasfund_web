import BottomNav from "@/components/BottomNav";
import DetailArticle from "@/components/DetailArticle";
import Navbar from "@/components/Navbar";
import { getArticleBySlug } from "@/pages/api/article";
import Head from "next/head";
import { useParams, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function DetailArticlePage() {
  const [detail, setDetail] = useState<any>();
  const params: any = useParams();
  const pathname = usePathname();

  const getDetail = async () => {
    try {
      const result = await getArticleBySlug(params?.slug);
      console.log(result);
      setDetail(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);
  return (
    <div>
      <Head>
        {/* Basic SEO Meta Tags */}
        <title>{detail?.title}</title>
        <meta name="description" content={detail?.description} />
        <meta name="author" content={"admin leasfund"} />
        <meta name="keywords" content={detail?.keywords} />
        <link rel="canonical" href={pathname} />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={detail?.title} />
        <meta property="og:description" content={detail?.description} />
        <meta property="og:image" content={detail?.thumbnail} />
        <meta property="og:url" content={pathname} />
        <meta property="article:author" content={"admin leasfund"} />
        <meta property="article:published_time" content={detail?.createdAt} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={detail?.thumbnail} />
        <meta name="twitter:title" content={detail?.title} />
        <meta name="twitter:description" content={detail?.description} />
        <meta name="twitter:image" content={detail?.thumbnail} />
        <meta name="twitter:creator" content={"admin leasfund"} />
      </Head>
      <Navbar />
      <div className="">
        <DetailArticle detail={detail} />
      </div>
      <BottomNav />
    </div>
  );
}
