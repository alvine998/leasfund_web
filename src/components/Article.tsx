import Link from "next/link";
import React from "react";

export default function Article() {
  const articles = [
    {
      id: 1,
      title: "Article 1",
      description: "Description 1",
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Article 2",
      description: "Description 2",
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Article 3",
      description: "Description 3",
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Article 4",
      description: "Description 1",
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Article 5",
      description: "Description 2",
      thumbnail: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      title: "Article 6",
      description: "Description 3",
      thumbnail: "https://via.placeholder.com/150",
    },
  ];
  return (
    <div className="bg-white w-full p-2 lg:px-40 px-2 pt-10 flex flex-row flex-wrap items-center justify-center">
      {articles.map((article) => (
        <div key={article.id} className="w-1/3 h-auto p-2">
          <Link href={`/article/${article.id}`}>
            <img src={article.thumbnail} alt="" className="w-full h-auto" />
            <h1 className="text-2xl font-bold text-gray-800 text-center">
              {article.title}
            </h1>
            <p className="text-gray-800 text-center">{article.description}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
