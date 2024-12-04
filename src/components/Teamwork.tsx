import React, { useState } from "react";
import Accordion from "./Accordion";
import Steps from "./Steps";
import {
  ArrowDownTrayIcon,
  CheckBadgeIcon,
  ClipboardDocumentListIcon,
  CurrencyDollarIcon,
  PaperAirplaneIcon,
  UserPlusIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Teamworks() {
  const [activeIndex, setActiveIndex] = useState(null);
  const items = [
    {
      title: "Tentang Kemitraan Agen",
      content:
        "Leasfund membuka peluang kemitraan strategis bagi individu, perusahaan, dan lembaga keuangan untuk bersama-sama memberikan solusi pembiayaan yang inovatif dan inklusif. Dengan menjadi mitra kami, Anda akan menjadi bagian dari ekosistem digital yang dirancang untuk memudahkan akses ke layanan leasing dan pinjaman pribadi secara modern dan efisien.",
    },
    {
      title: "Manfaat Untuk Mitra Agen",
      content: `
        1. Peluang Pertumbuhan Bisnis\n
        Tingkatkan portofolio bisnis Anda melalui kerja sama dengan Leasfund yang terpercaya.\n
        2. Dukungan Teknis & Operasional\n
        Tim kami siap membantu dengan pelatihan, dukungan teknis, dan strategi pemasaran untuk mendukung kesuksesan kemitraan.\n
        3. Fleksibilitas Kerja Sama\n
        Kami menawarkan berbagai skema kemitraan yang dapat disesuaikan dengan kebutuhan dan tujuan bisnis Anda.
        `,
    },
    {
      title: "Mitra Kami",
      content: `
        - ADIRA\n
        - BFI FINANCE\n
        - MANDIRI UTAMA FINANCE\n
        - KREDITPLUS\n
        - SINARMAS\n
        - BUANA FINANCE\n
        - WOM FINANCE\n
        - MIZUHO\n
        - SMART FINANCE\n
        - MEGA FINANCE\n
        - SMS FINANCE\n
        - NSC FINANCE\n
        - BAF
        `,
    },
  ];
  const faqs = [
    {
      title:
        "Apa itu Agen Leasfund & siapa yang bisa menjadi agen Dana Tunai Leasfund?",
      content: `
        Agen Leasfund adalah program Leasfund dimana memberikan kesempatan bagi individu yang
        ingin mendapatkan penghasilan tambahin dengan kerja sampingan atua freelance sebagai agen
        Dana Tunai.
        `,
    },
    {
      title:
        " Mengapa memilih menjadi Agen Leasfund untuk mendapatkan penghasilan tambahan?",
      content: `
        Dengan menjadi agen Dana Tunai Leasfund kamu bisa menjadi bisnis fleksibel darimana saja dan
        kapan saja. Skema kerja sampingan untuk mendapat uang tambahin ini menawarkan program
        yang sangat menguntungkan untuk menghasilkan “CUAN”.
        `,
    },
    {
      title:
        " Apa saja syarat yang diperlukan untuk kerja sampingan sebagai Agen Leasfund dan area mana saja yang dijangkau oleh Leasfund?",
      content: `
          Persyaratan untuk menjadi freelance Agen Dana Tunai Leasfund\n
          - Usia minimal 18tahun\n
          - Memiliki ktp\n
          - Memiliki jaringan yang luas\n
          - Berkenan menyediakan waktu untuk training secara berkala dari Leasfund\n
          - Berkenan memberikan aplikasi calon debitur ke Leasfund
          `,
    },
    {
      title:
        " Apa saja jenis pembiayaan yang bisa didapatkan dan siapa saja perusahaan leasing?",
      content: `
            Dana Tunai merupakan salah satu fasilitas yang diberikan oleh Leasfund untuk solusi pinjaman
            dana cepat cair dengan jaminan BPKB Mobil, BPKB Motor, dan jaminan property. Fasilitas BPKB
            Mobil, gadai BPKB Motor, dan sertifikat Kepemilikan rumah ini dapat digunakan untuk
            memenuhi kebutuhan produktif ataupun konsumtif (multiguna)
            `,
    },
  ];
  const descData = [
    {
      id: 1,
      children: [
        {
          icon: <ArrowDownTrayIcon className="text-green-500 lg:w-10 w-20" />,
          title: "1. Download Aplikasi Leasfund di PlayStore",
          description:
            "Anda dapat mendownload aplikasi Leasfund menggunakan android di Playstore.",
        },
        {
          icon: <UserPlusIcon className="text-green-500 lg:w-10 w-20" />,
          title: "2. Registrasi Akun",
          description:
            "Siapkan data diri anda untuk melakukan registrasi akun.",
        },
      ],
    },
    {
      id: 2,
      children: [
        {
          icon: (
            <ClipboardDocumentListIcon className="text-green-500 lg:w-10 w-20" />
          ),
          title: "3. Tambah Prospek",
          description:
            "Klik tambah prospek untuk menambah nasabah yang akan diajukan formulirnya.",
        },
        {
          icon: <PaperAirplaneIcon className="text-green-500 lg:w-10 w-20" />,
          title: "4. Verifikasi Data Prospek",
          description:
            "Admin akan melakukan verifikasi pada data nasabah dan akan meneruskannya ke leasing yang dipilih",
        },
      ],
    },
    {
      id: 3,
      children: [
        {
          icon: <CheckBadgeIcon className="text-green-500 lg:w-10 w-20" />,
          title: "5. Data Disetujui dan Pencairan",
          description:
            "Setelah data disetujui silahkan menunggu pencairan dana langsung dari pihak leasing.",
        },
        {
          icon: <CurrencyDollarIcon className="text-green-500 lg:w-10 w-20" />,
          title: "6. Pencairan Komisi",
          description:
            "Komisi akan cair dalam 1 x 24 jam langsung ke akun Agen Leasfund.",
        },
      ],
    },
  ];
  console.log(activeIndex);
  return (
    <div className={`bg-white transition-[max-height] duration-500 ease-in-out ${activeIndex !== null ? "max-h-[400vh]" : "max-h-[320vh]"} w-full pt-20`}>
      <div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/leasefund.appspot.com/o/card%2FBanner%201%20Leasfund%201920x720.png?alt=media&token=709af5a4-1f79-4622-8ecb-1f7dd840786a"
          alt="banner"
        />
      </div>
      <div className="mt-10">
        <div className="bg-gray-50 flex items-center justify-center w-full">
          <div>
            <h1 className="text-2xl font-bold text-center mb-6 text-black">
              Kerjasama
            </h1>
            <Accordion activeIndex={activeIndex} setActiveIndex={setActiveIndex} items={items} from={"teams"} />
          </div>
        </div>
        <div className="bg-gray-50 flex items-center justify-center w-full border-t-2 pt-10 mt-10">
          <div>
            <h1 className="text-2xl font-bold text-center mb-6 text-black">
              FAQ
            </h1>
            <Accordion activeIndex={activeIndex} setActiveIndex={setActiveIndex} items={faqs} from={"faq"} />
          </div>
        </div>
        <div className="mt-10 border-t-2 pt-10">
          <h2 className="text-center text-xl font-bold text-black">
            Langkah-Langkah Menjadi Agen{" "}
            <strong className="text-green-600">Leasfund</strong> dan Mendapatkan
            Komisi
          </h2>
          <div className="mt-8">
            <Steps data={descData} />
          </div>
        </div>
        <Link href={"https://play.google.com/"}>
          <img
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png?hl=id"
            alt="playgoogle"
          />
        </Link>
      </div>
    </div>
  );
}
