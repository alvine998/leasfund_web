import React from "react";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import BottomNav from "@/components/BottomNav";

const poppinsBold = Poppins({ weight: "700", subsets: ["latin"] });

export default function Term() {
  return (
    <div>
      <Navbar />
      <div className="bg-green-200 lg:h-[30vh] md:[30vh] h-[18vh] w-full flex justify-center items-center relative lg:mt-[250px] md:mt-[120px] mt-[70px]">
        <img
          about="bannernav"
          src="/images/bannernav.png"
          className="w-full h-auto absolute z-0"
        />
        <h1
          className={`${poppinsBold} text-black font-bold lg:text-4xl md:text-4xl text-lg absolute z-10 lg:top-0 top-10 lg:right-80 md:right-40 right-4`}
        >
          Ketentuan Pengguna
        </h1>
      </div>
      <div className="lg:mt-[25vh] md:mt-[5vh] mt-0">
        <div className="bg-white w-full lg:px-40 px-4 p-2 py-10">
          <p className="text-black text-left">
            1. <strong>Pengantar Syarat dan Ketentuan</strong>
            <br />
            ini mengatur penggunaan layanan aplikasi Leasfund. Dengan mengunduh,
            mendaftar, dan menggunakan aplikasi Leasfund, Anda menyetujui semua
            syarat dan ketentuan yang tercantum. Jika Anda tidak setuju, harap
            berhenti menggunakan aplikasi.
          </p>
          <p className="text-black text-left mt-2">
            2. <strong>Penggunaan Layanan</strong>
            <br />
            Registrasi: Anda diwajibkan untuk memberikan informasi yang akurat
            dan lengkap saat mendaftar dan bertanggung jawab atas informasi
            tersebut.
            <br />
            Kepemilikan Akun: Setiap akun bersifat pribadi dan tidak dapat
            dipindah tangankan. Anda bertanggung jawab menjaga kerahasiaan data
            akun dan kata sandi Anda.
            <br />
            Persetujuan Transaksi: Dengan menggunakan layanan ini, Anda
            menyetujui semua transaksi finansial yang dilakukan melalui aplikasi
            dan bertanggung jawab sepenuhnya atas transaksi tersebut.
          </p>
          <p className="text-black text-left mt-2">
            3. <strong>Kewajiban Pengguna</strong>
            <br />
            Informasi yang Valid: Anda setuju untuk memberikan informasi yang
            benar dan akurat serta memperbarui jika ada perubahan.
            <br />
            Penggunaan Sesuai Hukum: Anda dilarang menggunakan aplikasi untuk
            kegiatan ilegal, penipuan, atau tindakan yang dapat merugikan pihak
            lain atau sistem Leasfund.
            <br />
            Kepatuhan terhadap Aturan: Anda setuju untuk mematuhi kebijakan,
            panduan, dan instruksi yang dikeluarkan Leasfund terkait penggunaan
            aplikasi.
          </p>
          <p className="text-black text-left mt-2">
            4. <strong>Keterbatasan Layanan Leasfund</strong>
            <br /> berhak untuk memodifikasi, menangguhkan, atau menghentikan
            layanan sewaktu-waktu, dengan atau tanpa pemberitahuan terlebih
            dahulu. Leasfund juga berhak menolak atau membatasi akses pengguna
            yang melanggar Syarat dan Ketentuan ini.
          </p>
          <p className="text-black text-left mt-2">
            5. <strong>Biaya dan Pembayaran Penggunaan</strong>
            <br />
            beberapa fitur tertentu mungkin memerlukan pembayaran. Leasfund akan
            memberikan rincian biaya yang berlaku. Semua biaya dan pembayaran
            bersifat final dan tidak dapat dikembalikan kecuali dinyatakan lain.
          </p>
          <p className="text-black text-left mt-2">
            6. <strong>Hak dan Kewajiban Leasfund</strong>
            <br />
            Perlindungan Data: Leasfund berkomitmen untuk melindungi privasi
            Anda sesuai Kebijakan Privasi yang berlaku.
            <br />
            Tanggung Jawab Terbatas: Leasfund tidak bertanggung jawab atas
            kerugian yang timbul dari penggunaan aplikasi, kecuali jika terjadi
            kesalahan atau kelalaian dari pihak Leasfund.
            <br />
            Penghentian Akun: Leasfund berhak menangguhkan atau menghapus akun
            pengguna yang melanggar ketentuan ini tanpa pemberitahuan terlebih
            dahulu.
          </p>
          <p className="text-black text-left mt-2">
            7. <strong>Penolakan Tanggung Jawab Leasfund</strong> tidak
            bertanggung jawab atas:
            <br />
            Keterlambatan, kegagalan, atau kesalahan transaksi yang diakibatkan
            oleh gangguan sistem, akses internet, atau faktor di luar kendali
            kami. Kerugian akibat tindakan pengguna atau pihak ketiga yang
            melanggar kebijakan ini atau hukum yang berlaku.
          </p>
          <p className="text-black text-left mt-2">
            8. <strong>Perubahan Syarat dan Ketentuan Leasfund</strong>
            <br />
            berhak untuk mengubah Syarat dan Ketentuan ini dari waktu ke waktu.
            Setiap perubahan akan diumumkan melalui aplikasi dan berlaku setelah
            tanggal yang ditetapkan.
          </p>
          <p className="text-black text-left mt-2">
            9. <strong>Hukum yang Berlaku</strong>
            <br />
            Syarat dan Ketentuan ini diatur berdasarkan hukum yang berlaku di
            Indonesia. Setiap perselisihan yang timbul akan diselesaikan melalui
            mediasi terlebih dahulu. Jika tidak berhasil, perselisihan akan
            diselesaikan melalui pengadilan.
          </p>
          <p className="text-black text-left mt-2">
            10. <strong>Kontak</strong>
            <br />
            Untuk pertanyaan atau keluhan terkait Syarat dan Ketentuan ini,
            silakan hubungi layanan pelanggan melalui aplikasi Leasfund.
          </p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
