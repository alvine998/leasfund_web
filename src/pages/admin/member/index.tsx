import Modal from "@/components/admin/Modal";
import { deleteArticle, getArticles } from "@/pages/api/article";
import { IArticle } from "@/types/article";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

export default function AdminArticle() {
  const router = useRouter();
  const [filter, setFilter] = useState<any>(router.query);
  const [datas, setDatas] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [modal, setModal] = useState<any>({ open: false, key: "", data: "" });
  const getData = async () => {
    setLoading(true);
    try {
      const result = await axios.get("/api/member/list");
      setDatas(result?.data?.items);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  const handleDelete = async (id: string) => {};
  const column: any = [
    {
      name: "Email",
      selector: (row: any) => row.email,
      sortable: true,
    },
    {
      name: "Nama",
      selector: (row: any) => row?.name || "-",
      sortable: true,
    },
    {
      name: "No Telepon",
      selector: (row: any) => row.phone,
      sortable: true,
    },
    {
      name: "Aksi",
      selector: (row: any) => (
        <div className="flex gap-2">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={() =>
              setModal({ ...modal, open: true, data: row, key: "update" })
            }
          >
            Edit
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded"
            onClick={() =>
              setModal({ ...modal, open: true, data: row, key: "delete" })
            }
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
    <div>
      <div>
        <h1 className="text-2xl font-bold text-black text-left">Member</h1>
        <div className="my-2">
          <input
            type="text"
            placeholder="Cari Member"
            className="w-full border border-gray-300 rounded p-2 text-gray-800 focus:outline-none focus:border-gray-500"
            defaultValue={filter?.search || ""}
            onChange={(e) => setFilter({ ...filter, search: e.target.value })}
          />
        </div>
        <div className="my-2">
          {/* <button
            className="bg-green-700 hover:bg-green-600 text-white py-2 px-4 rounded duration-200"
            onClick={() => router.push("/admin/article/create")}
          >
            Tambah Produk
          </button> */}
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
              data={datas}
              pagination
              highlightOnHover
              responsive
              pointerOnHover
              customStyles={{
                headCells: {
                  style: {
                    backgroundColor: "#4CAF50",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "14px",
                  },
                },
              }}
            />
          )}
        </>
      )}
      {modal.key == "update" ? (
        <Modal
          isOpen={modal.open}
          onClose={() => {
            setModal({ ...modal, open: false });
          }}
          title="Ubah Data Member"
        >
          <div></div>
        </Modal>
      ) : (
        ""
      )}
      {modal.key == "delete" ? (
        <Modal
          isOpen={modal.open}
          onClose={() => {
            setModal({ ...modal, open: false });
          }}
          title="Hapus Data Member"
        >
          <div></div>
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
}
