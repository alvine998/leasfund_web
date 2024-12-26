import { deleteArticle, getArticles } from "@/pages/api/article";
import { IArticle } from "@/pages/types/article";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

export default function AdminArticle() {
  const router = useRouter();
  const [filter, setFilter] = useState<any>(router.query);
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getData = async () => {
    setLoading(true);
    try {
      const result = await getArticles(filter?.search || "");
      setArticles(result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const handleDelete = async (id: string) => {
    await deleteArticle(id);
    setArticles((prev) => prev.filter((article) => article.id !== id));
  };
  const column: any = [
    {
      name: "Slug",
      selector: (row: any) => row.slug,
      sortable: true,
    },
    {
      name: "Judul",
      selector: (row: any) => row.title,
      sortable: true,
    },
    {
      name: "Deskripsi",
      selector: (row: any) => row.description,
      sortable: true,
    },
    {
      name: "Thumbnail",
      selector: (row: any) => (
        <div className="py-2 w-auto">
          <img src={row?.thumbnail} alt="thumbnail" className="w-40 h-auto" />
        </div>
      ),
    },
    {
      name: "Aksi",
      selector: (row: any) => (
        <div className="flex gap-2">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={() => router.push(`/admin/article/${row.id}/edit`)}
          >
            Edit
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded"
            onClick={() => handleDelete(row.id)}
          >
            Hapus
          </button>
        </div>
      ),
    },
  ];
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setShow(true);
    }
  }, []);
  useEffect(() => {
    const queryFilter = new URLSearchParams(filter).toString();
    router.push(`?${queryFilter}`);
    getData();
  }, [filter]);
  return (
    <div className="bg-white w-full min-h-screen mt-10 p-4">
      <div>
        <h1 className="text-2xl font-bold text-black text-left">Artikel</h1>
        <div className="my-2">
          <input
            type="text"
            placeholder="Cari Artikel"
            className="w-full border border-gray-300 rounded p-2 text-gray-800 focus:outline-none focus:border-gray-500"
            defaultValue={filter?.search || ""}
            onChange={(e) => setFilter({ ...filter, search: e.target.value })}
          />
        </div>
        <div className="my-2">
          <button
            className="bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded duration-200"
            onClick={() => router.push("/admin/article/create")}
          >
            Tambah Artikel
          </button>
        </div>
      </div>
      {loading ? (
        <div className="w-full h-96 flex justify-center items-center">
          <div className="w-16 h-16 border-4 border-gray-400 rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          {show && (
            <DataTable
              columns={column}
              data={articles}
              pagination
              highlightOnHover
              responsive
              pointerOnHover
              customStyles={{
                headCells: {
                  style: {
                    backgroundColor: "#4CAF50",
                    color: "white",
                  },
                },
              }}
            />
          )}
        </>
      )}
    </div>
  );
}
