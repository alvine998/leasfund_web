import { getArticles } from "@/pages/api/article";
import { IArticle } from "@/pages/types/article";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Article() {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getData = async () => {
    setLoading(true);
    try {
      const result = await getArticles("");
      setArticles(result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="bg-white w-full p-2 lg:px-40 px-2 py-10 flex lg:flex-row flex-col flex-wrap items-start justify-center gap-2">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {articles.map((article) => (
            <div
              key={article.id}
              className="lg:w-[350px] w-full h-auto p-2 shadow hover:border-green-600 duration-300 hover:border rounded"
            >
              <Link href={`/article/${article.slug}`}>
                <img
                  src={article.thumbnail}
                  alt=""
                  className="w-full h-[200px]"
                />
                <h1 className="text-sm font-bold text-gray-800 text-center h-[50px] mt-2">
                  {article.title}
                </h1>
                <p className="text-gray-800 text-left text-xs mt-2">
                  {article.description?.substring(0, 180)}...
                </p>
              </Link>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
