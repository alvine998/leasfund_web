import BottomNav from "@/components/BottomNav";
import Navbar from "@/components/Navbar";
import {
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
  DocumentCurrencyDollarIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
import React, { useState } from "react";
import Steps from "@/components/Steps";
import PartnerLogo from "@/components/PartnerLogo";
import Benefit from "@/components/Benefit";
import Simulation from "@/components/Simulation";
import Services from "@/components/Services";
// import Countdown from "@/components/Countdown";
import Link from "next/link";

type RangeItem = {
  [key: string]: {
    min: string;
    max: string;
  };
};

type MonthOption = {
  value: string;
  label: string;
};

type MonthsData = {
  months: MonthOption[];
};

export default function Index() {
  const [filter, setFilter] = useState<string>("");
  const [type, setType] = useState<string>("car");
  const [rangeValue, setRangeValue] = useState<number>(20000000);
  const ranges: RangeItem[] = [
    {
      car: {
        min: "20000000",
        max: "800000000",
      },
    },
    {
      motor: {
        min: "2000000",
        max: "40000000",
      },
    },
  ];
  const [idx, setIdx] = useState<number>(0);
  const [list, setList] = useState<MonthsData>({
    months: [
      {
        value: "12",
        label: "12 Bulan",
      },
      {
        value: "24",
        label: "24 Bulan",
      },
      {
        value: "36",
        label: "36 Bulan",
      },
      {
        value: "48",
        label: "48 Bulan",
      },
    ],
  });
  const descData = [
    {
      id: 1,
      children: [
        {
          icon: <ClipboardDocumentListIcon className="text-green-500 lg:w-10 w-16" />,
          title: "1. Isi Form Online",
          description:
            "Siapkan data jaminan BPKB Motor dan data diri Anda",
        },
        {
          icon: <PhoneIcon className="text-green-500 lg:w-10 w-20" />,
          title: "2. Kami akan menghubungimu",
          description:
            "Anda akan dihubungi Call Center kami untuk konsultasi pinjaman dan tenor",
        },
      ],
    },
    {
      id: 2,
      children: [
        {
          icon: (
            <ClipboardDocumentCheckIcon className="text-green-500 lg:w-10 w-20" />
          ),
          title: "3. Survei dan Validasi Aset",
          description:
            "kami akan lakukan survei dan cek aset untuk proses selanjutnya.",
        },
        {
          icon: <DocumentCurrencyDollarIcon className="text-green-500 lg:w-10 w-20" />,
          title: "4. Pencairan Dana",
          description:
            "Setelah survei dan disetujui, dana akan segera cair ke rekening Anda",
        },
      ],
    }
  ];
  // const [isOpen, setIsOpen] = useState<boolean>(false);

  // const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="w-full">
      <Navbar />
      {/* Section 1 */}
      <div className="bg-[url('/images/banner4.png')] lg:w-full w-auto h-[100vh] lg:h-[120vh] lg:-mt-20 mt-[70px] lg:pt-[200px] pt-20 lg:px-0 px-10">
        <h2 className="text-3xl font-semibold lg:w-[450px] w-full text-green-700">
          Solusi Dana Cepat Jaminan BPKB.
        </h2>
        <p className="text-md lg:mt-4 mt-2 lg:w-[500px] w-full">
          <strong>Leasfund</strong> adalah mitra keuangan anda yang dapat
          diandalkan, menyediakan solusi dana tunai yang cepat dan mudah dengan
          menggunakan BPKB motor dan mobil.
        </p>
        <Link href={"https://whatsform.com/7yblz0"}>
          <button
            type="button"
            className="bg-blue-500 text-white py-2 px-4 rounded lg:mt-4 mt-2 hover:bg-blue-600 duration-200"
          >
            Ajukan Sekarang
          </button>
        </Link>
      </div>
      {/* Countdown */}
      {/* <div>
        <Countdown />
      </div> */}
      {/* Section 2 */}
      <div className="bg-gray-200 w-full h-[100vh] lg:px-10 px-4 lg:py-10 py-4 flex flex-col gap-2 justify-center items-center">
        <Benefit />
      </div>
      {/* Section 3 */}
      <div className="bg-white h-[100vh] w-full lg:px-10 px-4 flex lg:flex-row flex-col justify-center items-center">
        <h2
          className={`lg:-mt-0 -mt-10 text-4xl w-full font-semibold text-center duration-500 transition-opacity text-green-700`}
        >
          Layanan Leasfund
        </h2>
        <div className={`lg:-mt-0 mt-5 duration-500 transition-opacity w-full`}>
          {filter == "" ? <Services setFilter={setFilter} /> : ""}

          {filter == "simulation" ? (
            <Simulation
              setFilter={setFilter}
              idx={idx}
              setIdx={setIdx}
              list={list}
              setList={setList}
              rangeValue={rangeValue}
              setRangeValue={setRangeValue}
              ranges={ranges}
              type={type}
              setType={setType}
            />
          ) : (
            ""
          )}
        </div>
      </div>
      {/* Section 4 */}
      <div className="bg-white w-full h-auto lg:py-10 py-5 px-5 lg:p-10">
        <h2 className="text-center text-xl font-bold text-black">
          Langkah-Langkah Mudah Pengajuan Pinjaman
        </h2>
        <div className="mt-8">
          <Steps data={descData} />
        </div>
      </div>
      {/* Section 5 */}
      <div className="bg-white w-full lg:px-10 px-4 lg:py-10 py-4 flex flex-col gap-2 justify-center items-center relative">
        <PartnerLogo />
      </div>
      <BottomNav />
    </div>
  );
}
