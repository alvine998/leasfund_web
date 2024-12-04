import BottomNav from "@/components/BottomNav";
import Navbar from "@/components/Navbar";
import React from "react";
import { Poppins } from "next/font/google";

const poppinsBold = Poppins({ weight: "700", subsets: ["latin"] });

export default function Privacy() {
  return (
    <div>
      <Navbar />
      <div className="bg-green-200 h-[30vh] w-full flex justify-center items-center">
        <h1 className={`${poppinsBold} text-black font-bold text-4xl mt-14`}>
          Kebijakan Privasi
        </h1>
      </div>
      <div className="bg-white w-full p-2 py-10">
        <p className="text-black text-justify">
          1. Pengantar Leasfund berkomitmen untuk melindungi privasi Anda dan
          menjaga kerahasiaan informasi pribadi yang Anda berikan kepada kami.
          Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan,
          menggunakan, dan melindungi informasi pribadi Anda dalam penggunaan
          aplikasi Leasfund.
        </p>
        <p className="text-black text-justify mt-2">
          2. Informasi yang Kami Kumpulkan Kami mengumpulkan informasi yang Anda
          berikan saat mendaftar, menggunakan layanan, dan berinteraksi dengan
          aplikasi Leasfund, seperti:
          <br />
          Informasi pribadi: nama, alamat email, nomor telepon, tanggal lahir,
          dan data identifikasi lainnya.
          <br /> Informasi finansial: data rekening bank, nomor kartu
          kredit/debit, dan data transaksi.
          <br /> Informasi perangkat: jenis perangkat, alamat IP, data lokasi,
          dan log penggunaan aplikasi.
        </p>
        <p className="text-black text-justify mt-2">
          3. Penggunaan Informasi Informasi yang kami kumpulkan digunakan untuk:
          <br />
          Memproses dan mengelola layanan keuangan Anda.
          <br /> Memverifikasi identitas Anda dan mencegah penipuan.
          <br /> Mengembangkan dan meningkatkan aplikasi Leasfund.
          <br /> Memberikan dukungan pelanggan dan menanggapi permintaan atau
          keluhan Anda.
          <br /> Mengirimkan informasi penting terkait layanan, promosi, atau
          perubahan pada kebijakan kami.
        </p>
        <p className="text-black text-justify mt-2">
          4. Berbagi Informasi Kami hanya akan membagikan informasi Anda dengan
          pihak ketiga dalam keadaan berikut:
          <br />
          Untuk memproses transaksi yang melibatkan bank, lembaga keuangan, atau
          mitra layanan pembayaran.
          <br />
          Untuk mematuhi kewajiban hukum atau peraturan.
          <br />
          Dengan persetujuan Anda untuk berbagi informasi dengan pihak ketiga
          tertentu.
        </p>
        <p className="text-black text-justify mt-2">
          5. Keamanan Informasi Leasfund menerapkan langkah-langkah keamanan
          teknis dan organisasi yang sesuai untuk melindungi data pribadi Anda
          dari akses tidak sah, pengungkapan, atau kehilangan. Kami juga
          menyarankan agar Anda menjaga kerahasiaan informasi login dan kata
          sandi Anda.
        </p>
        <p className="text-black text-justify mt-2">
          6. Hak Pengguna Anda berhak untuk:
          <br />
          Mengakses, memperbarui, atau menghapus informasi pribadi Anda yang ada
          di aplikasi Leasfund.
          <br />
          Menarik persetujuan penggunaan informasi Anda, meskipun hal ini dapat
          memengaruhi layanan yang Anda terima.
        </p>
        <p className="text-black text-justify mt-2">
          7. Perubahan pada Kebijakan Privasi Kami dapat memperbarui Kebijakan
          Privasi ini sewaktu-waktu. Setiap perubahan akan diumumkan melalui
          aplikasi dan mulai berlaku pada tanggal yang ditentukan.
        </p>
        <p className="text-black text-justify mt-2">
          8. Hubungi Kami Jika Anda memiliki pertanyaan atau kekhawatiran
          mengenai Kebijakan Privasi ini, Anda dapat menghubungi kami melalui
          layanan pelanggan di dalam aplikasi Leasfund.
        </p>
      </div>
      <BottomNav />
    </div>
  );
}
