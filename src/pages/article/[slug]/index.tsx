import BottomNav from "@/components/BottomNav";
import DetailArticle from "@/components/DetailArticle";
import Navbar from "@/components/Navbar";
import {  getArticleBySlug } from "@/pages/api/article";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function DetailArticlePage() {
  const [detail, setDetail] = useState<any>();
  const params: any = useParams();

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
      <Navbar />
      <div className="">
        <DetailArticle detail={detail} />
      </div>
      <BottomNav />
    </div>
  );
}
