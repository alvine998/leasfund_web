import BottomNav from "@/components/BottomNav";
import DetailArticle from "@/components/DetailArticle";
import Navbar from "@/components/Navbar";
import React from "react";

export default function DetailArticlePage() {
  return (
    <div>
      <Navbar />
      <div className="">
        <DetailArticle />
      </div>
      <BottomNav />
    </div>
  );
}
