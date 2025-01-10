import React from "react";
import PartnerLogo from "./PartnerLogo";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function PawnMotor() {
  const datas = [
    <p key={"1"} className="text-black">
      Plafon pencairan lebih tinggi jika mengajukan melalui situs ini
    </p>,
    <p key={"2"} className="text-black">
      Melayani berbagai merk motor
    </p>,
    <p key={"3"} className="text-black">
      Proses pencairan lebih cepat dibandingkan Anda mengajukan langsung ke
      kantor cabang setiap Leasing
    </p>,
    <p key={"4"} className="text-black">
      Syarat dan prosedur mudah
    </p>,
    <p key={"5"} className="text-black">
      Pajak mati maksimal lebih dari 2 tahun masih bisa diproses (tidak ada
      biaya)
    </p>,
    <p key={"6"} className="text-black">
      BPKB belum balik nama dapat Diajukan
    </p>,
    <p key={"7"} className="text-black">
      Tidak ada potongan pencairan
    </p>,
  ];
  const datas2 = [
    "Bunga jauh lebih ringan dibandingkan KTA (mulai dari 0.9% perbulan).",
    "Tidak dikenakan biaya provisi (hanya beberapa leasing)",
    "Segala kekurangan data akan dibantu tim kami",
    "Pencairan plafon tertinggi (maksimal 90% dari harga OTR kendaraan saat ini)",
    "Seluruh perusahaan leasing rekanan sudah terdaftar resmi dan dibawah pengawasan OJK (Otoritas Jasa Keuangan)",
    "Terima BPKB belum balik nama dan apabila masih atas nama perusahaan (bukan perorangan) wajib ada SPH – Surat Pelepasan Hak (pajak masih hidup, tidak perlu balik nama)",
    "Bunga rendah fix / flat pertahun",
    "Melayani pinjaman dana besar untuk level perusahaan atau corporate",
  ];
  return (
    <div className="bg-white w-full p-2 lg:px-40 px-2 pt-10 shadow rounded">
      <h1 className="text-2xl text-black font-bold text-center">
        GADAI BPKB MOTOR
      </h1>
      <h1 className="text-lg text-black font-bold text-center">
        Tempat Gadai BPKB Motor Terpercaya & Aman (PROSES SUPER DUPER KILAT)
      </h1>
      <h1 className="text-lg text-black font-bold text-center">
        Gadai BPKB Motor bisa dibantu Tanpa Survey
      </h1>
      <p>
        Leasfund menawarkan kemudahan serta kepraktisan untuk pengajuan kredit
        dana tunai. Anda akan memperoleh berbagai kelebihan dari kami seperti:
      </p>
      <div className="mt-4 px-6">
        {datas?.map((val: any, index: number) => (
          <div key={index} className="flex gap-2">
            <p className="text-black">{index + 1}.</p>
            {/* <ArrowRightIcon className={val?.length > 60 ? "w-8 h-8 text-black" : "w-7 h-7 text-black"} /> */}
            {val}
          </div>
        ))}
      </div>
      <div className="border-b-2 mt-4"></div>
      <h1 className="text-lg text-black font-bold text-center mt-4">
        Keuntungan Dan Persyaratan Dokumen
      </h1>

      <div className="flex flex-row border-2 justify-center items-center mt-4">
        <div className="w-full border-r p-4">
          <h2 className="text-xl font-bold text-black text-center">
            Keuntungan Kredit Pinjaman Multiguna
          </h2>
        </div>
        <div className="w-full border-l p-4">
          <ol className="list-disc lg:pl-6 text-black">
            {datas2?.map((val: any, index: number) => (
              <li key={index}>{val}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="flex flex-row border-2 justify-center items-center mt-4">
        <div className="w-full border-r p-4">
          <h2 className="text-xl font-bold text-black text-center">
            Persyaratan Dokumen
          </h2>
        </div>
        <div className="w-full border-l p-4">
          <ol className="list-disc lg:pl-6 text-black">
            <li>
              Siapkan fotokopi KTP suami istri (jika sudah menikah) & Surat
              Nikah Kartu Keluarga (KK)
            </li>
            <li>
              Tinggal di rumah sendiri, siapkan bukti kepemilikan rumah (PBB/
              Rek Listrik/ Rek Air/ Rek Telpon/ AJB) Apabila tinggal kontrak,
              siapkan Surat Keterangan Domisili (SKD) dari RT atau RW setempat
            </li>
            <li>
              Tenor antara 1 – 3 Tahun (sesuai kebijakan masing-masing finance)
            </li>
            <li>
              Melayani berbagai merek seperti Honda, Yamaha, Suzuki & Kawasaki
            </li>
            <li>Minimal tahun 2012</li>
            <li>Usia pengaju harus diatas 21 tahun (peraturan pemerintah)</li>
            <li>Plat motor harus sama dengan tempat tinggal saat ini</li>
          </ol>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Link href={"https://whatsform.com/7yblz0"}>
          <button
            type="button"
            className="bg-green-500 text-white py-2 px-4 rounded lg:mt-4 mt-2 hover:bg-green-600 duration-200"
          >
            Ajukan Sekarang
          </button>
        </Link>
      </div>

      <div className="mt-10">
        <PartnerLogo />
      </div>
    </div>
  );
}
