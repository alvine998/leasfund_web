import { IArticle } from "@/pages/types/article";
import { ArrowLeftIcon, EyeIcon } from "@heroicons/react/20/solid";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  detail: IArticle;
}

export default function DetailArticle({ detail }: Props) {
  return (
    <div className="bg-white w-full min-h-screen lg:px-60 lg:pt-40 pt-24">
      <Link href={"/article"} className="text-black flex items-center gap-2">
        <ArrowLeftIcon className="w-7" />
        <p>Kembali</p>
      </Link>
      {detail?.slug ? (
        <div className="mt-2">
          <h1 className="lg:text-4xl text-xl font-bold text-black text-center">
            {detail?.title}
          </h1>
          <div className="mt-2 flex lg:justify-start justify-center">
            <span className="text-sm text-gray-800 flex items-center">
              Admin Leasfund |{" "}
              {moment(detail?.createdAt)?.format("DD-MM-YYYY HH:mm")} |
              {<EyeIcon className="w-5 mx-2" />} 0{" "}
            </span>
          </div>
          <Image
            alt="banner"
            src={detail?.thumbnail}
            layout="responsive"
            sizes="100vw"
            width={1000}
            height={800}
            className="mt-4"
          />
          <div className="bg-white w-full h-auto shadow rounded p-4">
            <div
              className="text-gray-800 text-md text-justify lg:mt-4 mt-2"
              dangerouslySetInnerHTML={{ __html: detail?.content }}
            ></div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
