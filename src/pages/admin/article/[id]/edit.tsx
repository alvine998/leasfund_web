import { TextEditor } from "@/components/admin/TextEditor";
import {
  getArticleById,
  updateArticle,
} from "@/pages/api/article";
import { uploadImage } from "@/pages/api/upload";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function EditArticle() {
  const [content, setContent] = useState<any>();
  const [image, setImage] = useState<any>();
  const [detail, setDetail] = useState<any>();
  const router = useRouter();
  const params: any = useParams();
  const [info, setInfo] = useState<any>({
    loading: false,
    message: "",
    error_message: "",
  });

  const getDetail = async () => {
    try {
      const result = await getArticleById(params?.id);
      setDetail(result);
      setContent(result?.content);
      setImage(result?.thumbnail);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  const handleUpload = async (file: any) => {
    if (file) {
      try {
        const url = await uploadImage(file);
        setImage(url);
        console.log("File uploaded successfully:", url);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };
  const onSubmit = async (e: any) => {
    e.preventDefault();
    setInfo({ ...info, loading: true });
    try {
      const payload = {
        title: e.target.title.value,
        description: e.target.description.value,
        thumbnail: image,
        content: content,
        slug: e.target.title.value?.toLowerCase()?.replaceAll(" ", "-"),
        createdAt: new Date().toISOString(),
        updatedAt: "",
      };
      await updateArticle(params?.id, payload);
      Swal.fire({
        icon: "success",
        title: "Artikel berhasil diubah",
        showConfirmButton: false,
        timer: 1500,
      });
      router.push("/admin/article");
    } catch (error) {
      console.log(error);
      setInfo({
        ...info,
        loading: false,
        error_message: "Artikel gagal diubah",
      });
    }
  };
  return (
    <div>
      <div className="bg-white w-full min-h-screen mt-10 p-4">
        <h1 className="text-2xl font-bold text-black text-center">
          Tambah Artikel
        </h1>
        <Link
          href={"/admin/article"}
          className="text-black flex items-center gap-2"
        >
          <ArrowLeftIcon className="w-7" />
          <p>Kembali</p>
        </Link>
        <div className="bg-white w-full h-auto shadow rounded p-4">
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-black">Judul</label>
              <input
                type="text"
                name="title"
                placeholder="Judul Artikel"
                defaultValue={detail?.title}
                className="border border-gray-300 rounded text-gray-800 focus:outline-none focus:border-gray-500 p-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-black">Deskripsi</label>
              <textarea
                name="description"
                placeholder="Deskripsi Artikel"
                defaultValue={detail?.description}
                className="border border-gray-300 rounded text-gray-800 focus:outline-none focus:border-gray-500 p-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-black">Thumbnail</label>
              <input
                type="file"
                name="thumbnail"
                className="border border-gray-300 rounded text-gray-800 focus:outline-none focus:border-gray-500 p-2"
                onChange={(e: any) => {
                  if (e.target.files) {
                    handleUpload(e.target.files[0]);
                  }
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-black">Konten</label>
              <TextEditor
                value={content}
                onChange={setContent}
                placeholder="Konten Artikel"
              />
              <input type="hidden" name="content" value={content} />
            </div>
            {info.error_message && (
              <div className="text-red-600">{info.error_message}</div>
            )}
            <button
              type="submit"
              className="p-2 border shadow-lg rounded-lg flex gap-2 items-center hover:bg-green-600 bg-green-700 text-white text-center justify-center text-lg duration-200 transition-colors w-full"
            >
              Simpan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
