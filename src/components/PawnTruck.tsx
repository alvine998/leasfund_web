import React from "react";
import PartnerLogo from "./PartnerLogo";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function PawnTruck() {
  const datas = [
    <p key={"1"} className="text-black">
      Tidak perlu membuang waktu untuk datang ke kantor cabang dan mengantri
      panjang
    </p>,
    <p key={"2"} className="text-black">
      Dengan mendatangi kantor leasing, bukan berarti pengajuan Anda langsung
      diproses, karena tetap harus melewati beberapa tahap sebelum Anda di
      verifikasi ulang
    </p>,
    <p key={"3"} className="text-black">
      Pengajuan melalui situs ini dapat dipastikan bahwa data atau aplikasi
      nasabah akan langsung diproses karena kami memiliki perjanjian khusus
      yaitu memprioritaskan debitur dari Leasfund
    </p>,
    <p key={"4"} className="text-black">
      Gratis dan tidak dipungut biaya apapun. Ini mungkin yang menjadi
      pertanyaan banyak orang mengenai apakah nasabah akan diminta uang proses
      oleh situs ini atau tidak. KAMI TEGASKAN BAHWA TIDAK ADA ALIAS LAYANAN
      KAMI SEPENUHNYA GRATIS.
    </p>,
    <p key={"5"} className="text-black">
      Cukup dengan menghubungi situs ini melalui WA/SMS/Tlp, Anda tinggal duduk
      manis lalu tim marketing setiap leasing yang ditunjuk akan memproses
      aplikasi permohonan.
    </p>,
    <p key={"6"} className="text-black">
      Caranya pun sangat simple, yaitu konsumen cukup memilih perusahaan gadai
      BPKB Mobil apa yang diinginkan atau jika tidak ada waktu membandingkan
      antara satu produk dengan lainnya, silakan percayakan kepada Leasfund
      untuk memberikan rekomendasi terbaik.
    </p>,
    <p key={"7"} className="text-black">
      Rekomendasi tersebut maksudnya adalah Anda cukup menginformasikan unit
      mobil yang ingin digadaikan dan kebutuhan dananya berapa.
    </p>,
    <p key={"8"} className="text-black">
      Jangan khawatir karena kami hanya merekomendasikan 1 saja yang terbaik,
      sehingga Anda tidak perlu takut akan ditelpon oleh banyak leasing
      sekaligus.
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
        GADAI BPKB Truck/Pick Up
      </h1>
      <h1 className="text-lg text-black font-bold text-center">
        Gadai BPKB Truck / Pick Up Termudah dan Cepat Cair (Bunga Mulai 0.6%)
      </h1>
      <h1 className="text-lg text-black font-bold text-center">
        Gadai BPKB Truck / Pick Up Bisa Semudah Ini Hanya Ada di Leasfund
      </h1>
      <div className="mt-4 px-6">
        {datas?.map((val: any, index: number) => (
          <div key={index} className="flex gap-2">
            <p className="text-black">{index + 1}.</p>
            {/* <ArrowRightIcon className={val?.length > 60 ? "w-8 h-8 text-black" : "w-7 h-7 text-black"} /> */}
            {val}
          </div>
        ))}
      </div>
      <div className="mt-4">
        <p className="text-black">
          Mungkin ketika Anda browsing di internet, pasti akan menemui situs
          sejenis yang menawarkan hal serupa seperti kami. Tapi ada perbedaan
          besar antara layanan kami dengan milik mereka, yaitu pada sisi
          kepraktisan dalam pengajuan uang.
          <br /> di Leasfund Anda cukup menghubungi nomor yang tertera melalui
          WA, SMS atau Telpon, lalu permohonan atau simulasi akan segera
          diproses.
          <br /> Sedangkan di situs lain, Anda diharuskan mendaftar, mengisi
          banyak sekali kolom data pribadi, melakukan konfirmasi melalui email,
          setelah beres, lalu diminta untuk mengisi lagi kolom pengajuan data
          kredit, dan masih banyak lagi.
        </p>
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
            <li>Fotokopi KTP (WNI)</li>
            <li>Fotokopi KITAS / KITAP (WNA)</li>
            <li>Fotokopi KK</li>
            <li>
              Fotokopi Rek Listrik / PBB / Rek Telepon / Rek Air (data lain yang
              membuktikan kepemilikan rumah sendiri) Jika Anda tinggal di rumah
              kontrak, harap siapkan SKD (Surat Keterangan Domisili) dari RT
              atau RW setempat
            </li>
            <li>Fotokopi BPKB dan STNK Mobil</li>
            <li>
              Bukti penghasilan bulanan (Slip gaji bagi karyawan atau jika tidak
              ada, silakan gunakan mutasi rekening 3 bulan terakhir)
            </li>
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
