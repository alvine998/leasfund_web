import BottomNav from "@/components/BottomNav";
import Navbar from "@/components/Navbar";
import {
  BoltIcon,
  BriefcaseIcon,
  CheckBadgeIcon,
  ChevronUpIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentListIcon,
  CurrencyDollarIcon,
  DocumentCheckIcon,
  DocumentCurrencyDollarIcon,
  PercentBadgeIcon,
  PhoneIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";
import Steps from "@/components/Steps";
import PartnerLogo from "@/components/PartnerLogo";
import Benefit from "@/components/Benefit";
import Simulation from "@/components/Simulation";
import Services from "@/components/Services";
// import Countdown from "@/components/Countdown";
import Link from "next/link";
import {
  AcademicCapIcon,
  ClipboardDocumentIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import AutoSlide from "@/components/AutoSlide";

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
          icon: (
            <ClipboardDocumentListIcon className="text-green-500 lg:w-10 w-16" />
          ),
          title: "1. Isi Form Online",
          description: "Siapkan data jaminan BPKB Motor dan data diri Anda",
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
          icon: (
            <DocumentCurrencyDollarIcon className="text-green-500 lg:w-10 w-20" />
          ),
          title: "4. Pencairan Dana",
          description:
            "Setelah survei dan disetujui, dana akan segera cair ke rekening Anda",
        },
      ],
    },
  ];
  // const [isOpen, setIsOpen] = useState<boolean>(false);

  // const toggleDropdown = () => setIsOpen(!isOpen);

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 200); // Show the button after 200px of scrolling
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const images = [
    "/images/banner13.jpg",
    "/images/banner12.jpg",
    "/images/banner11.jpg",
  ];

  return (
    <div className="w-full">
      <Navbar />
      <div className="fixed bottom-4 left-4 z-[999]">
        <Link href={`https://wa.me/6285863953727`} target="_blank">
          <button
            className="bg-green-600 rounded-full p-2 flex items-center justify-center"
            type="button"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png"
              alt="wa"
              className="w-10 h-10"
            />
          </button>
        </Link>
      </div>
      {isVisible && (
        <div className="fixed bottom-4 right-4 z-[999] transform duration-200 ease-in-out">
          <button
            onClick={scrollToTop}
            className="bg-green-600 hover:bg-green-500 rounded-full p-2 flex items-center justify-center"
            type="button"
          >
            <ChevronUpIcon className="w-10 h-10 text-white" />
          </button>
        </div>
      )}

      {/* Section Slide */}
      <div>
        <AutoSlide images={images} />
      </div>
      {/* Section 1 */}
      <div className="bg-white lg:w-full w-auto lg:-mt-20 mt-0 lg:pt-[200px] pt-20 pb-20 lg:px-20 px-10 flex lg:flex-row flex-col gap-10 justify-between items-end">
        <div className="w-full">
          <h2 className="text-3xl font-semibold text-green-700">
            Solusi Dana Cepat Jaminan BPKB.
          </h2>
          <p className="lg:text-md text-lg lg:mt-4 mt-2 text-gray-700">
            Kami akan membantu menemukan produk layanan pinjaman Gadai BPKB yang
            sesuai dengan kebutuhan Anda dengan cepat.
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
        <div className="w-full">
          <h2 className="text-black lg:text-md text-lg text-center">
            Untuk Berbagai Kebutuhan:
          </h2>
          <div className="w-full flex lg:flex-row flex-col gap-8 mt-2">
            <div className="p-2 rounded w-full shadow">
              <HomeIcon className="w-8 text-green-600" />
              <h5 className="text-black mt-4 lg:text-md text-lg">
                Pembiayaan Rumah
              </h5>
            </div>
            <div className="p-2 rounded w-full shadow">
              <AcademicCapIcon className="w-8 text-green-600" />
              <h5 className="text-black mt-4 lg:text-md text-lg">
                Biaya Pendidikan
              </h5>
            </div>
            <div className="p-2 rounded w-full shadow">
              <ClipboardDocumentIcon className="w-8 text-green-600" />
              <h5 className="text-black mt-4 lg:text-md text-lg">
                Biaya Kesehatan
              </h5>
            </div>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="bg-gray-200 w-full h-auto lg:px-10 px-4 lg:py-10 py-4 flex flex-col gap-2 justify-center items-center">
        <Benefit />
      </div>

      {/* Sekilas */}
      <div className="bg-white w-full lg:py-10 py-10 relative shadow">
        <h2 className="italic text-green-700 text-center font-bold text-4xl">
          Sekilas Kami
        </h2>
        <h5 className="text-black text-center font-bold text-4xl hidden">
          Leasfund
        </h5>
        <div className="w-full flex lg:flex-row flex-col gap-4 justify-between items-center">
          <div className="w-full">
            {/* <img
              src="/images/logo_full2.png"
              alt="logo"
              className="w-[150px] h-auto absolute lg:top-40 top-20 lg:left-40 left-0"
            /> */}
            <img
              src="https://firebasestorage.googleapis.com/v0/b/leasefund.appspot.com/o/images%2Flovepik-business-woman-cheering-png-image_401612457_wh1200-removebg-preview.png?alt=media&token=2fed1581-1825-4e79-8a59-ad7caa912bdd"
              alt="wmn"
              className="w-[500px] lg:h-[70vh] h-auto lg:ml-20"
            />
          </div>

          <div className="w-full lg:pr-20 pr-0 lg:px-0 px-4">
            <p className="text-gray-800">
              <strong>Leasfund</strong> adalah marketplace dan fasilitator yang
              membantu masyarakat memperoleh produk pinjaman uang terbaik di
              Indonesia.
              <br />
              Diisi oleh tim yang berpengalaman selama belasan tahun di dunia
              Leasing dan Multifinance, kami yakin bahwa Leasfund mampu membantu
              semua masalah finansial Anda. Perlu diketahui bahwa kami tidak
              sembarangan memilih partner Leasing dan wajib kami cek dan tes
              kelebihan serta kekurangan produk dari Leasing tersebut.
              <br />
              Hal tersebut kami lakukan demi kepuasan konsumen, sehingga kami
              tidak segan-segan memutus kerjasama dengan pihak Leasing apabila
              konsumen merasa dirugikan dan disulitkan.
            </p>
            <Link href={"/aboutus"}>
              <button
                type="button"
                className="bg-blue-500 text-white py-2 px-4 rounded lg:mt-4 mt-2 hover:bg-blue-600 duration-200"
              >
                Selengkapnya
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full bg-white border-b-2 lg:mt-0 mt-4"></div>
      </div>

      {/* Gadai BPKB */}
      <div className="bg-white w-full lg:py-10 py-10 relative shadow flex lg:flex-row flex-col items-end lg:gap-0 gap-6">
        <div className="w-full border-r flex flex-col items-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/leasefund.appspot.com/o/images%2F304dbc_85ea9ebdc8b14046a699d573a4a24477~mv2.webp?alt=media&token=52883b07-5e11-4ff2-aaeb-9e8e60a04bee"
            alt="motor"
          />
          <h2 className="text-center text-xl font-bold text-black">
            Gadai BPKB Mobil
          </h2>
          <p className="text-gray-600 text-xs lg:px-0 px-4">
            Gadai BPKB Mobil Termudah dan Cepat Cair (Bunga Mulai 0.6%)
          </p>
          <p className="text-gray-600 text-xs lg:px-0 px-4">Min. 2006</p>
          <Link href={"pawn/car"}>
            <button
              type="button"
              className="bg-blue-500 text-white py-2 px-4 rounded lg:mt-4 mt-2 hover:bg-blue-600 duration-200"
            >
              Selengkapnya
            </button>
          </Link>
        </div>
        <div className="w-full border-l flex flex-col items-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/leasefund.appspot.com/o/images%2Fpng-clipart-scooter-yamaha-motor-company-motorcycle-yamaha-tmax-yamaha-nmax-yamaha-nmax-scooter-car-thumbnail-removebg-preview.png?alt=media&token=39808789-98e7-4e76-b264-22fdcd6f038e"
            alt="motor"
          />
          <h2 className="text-center text-xl font-bold text-black">
            Gadai BPKB Motor
          </h2>
          <p className="text-gray-600 text-xs lg:px-0 px-4">
            Tempat Gadai BPKB Motor Terpercaya & Aman (PROSES SUPER DUPER KILAT)
          </p>
          <p className="text-gray-600 text-xs lg:px-0 px-4">Min. 2012</p>
          <Link href={"pawn/motor"}>
            <button
              type="button"
              className="bg-blue-500 text-white py-2 px-4 rounded lg:mt-4 mt-2 hover:bg-blue-600 duration-200"
            >
              Selengkapnya
            </button>
          </Link>
        </div>
        <div className="w-full border-l flex flex-col items-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/leasefund.appspot.com/o/images%2Fmitsubishi-colt-300-dok-mitsubishi-3_169-removebg-preview.png?alt=media&token=555dc814-ff94-4b4e-8ecd-d571fc79e47e"
            alt="motor"
          />
          <h2 className="text-center text-xl font-bold text-black">
            Gadai BPKB Pick Up/Truk
          </h2>
          <p className="text-gray-600 text-xs lg:px-0 px-4">
            Gadai BPKB Pickup/Truk Termudah dan Cepat Cair (Bunga Mulai 0.6%)
          </p>
          <p className="text-gray-600 text-xs lg:px-0 px-4">Min. 2014</p>
          <Link href={"pawn/truck"}>
            <button
              type="button"
              className="bg-blue-500 text-white py-2 px-4 rounded lg:mt-4 mt-2 hover:bg-blue-600 duration-200"
            >
              Selengkapnya
            </button>
          </Link>
        </div>
      </div>

      {/* Alasan Pilih Kami */}
      <div className="bg-white w-full lg:py-10 py-10 relative shadow flex lg:flex-row flex-col items-end lg:px-20 px-0 ">
        <div className="w-full bg-green-600 shadow h-auto p-4 flex flex-col items-center justify-start pt-20 gap-2 px-20 lg:h-[350px]">
          <PercentBadgeIcon className="text-white w-14" />
          <h2 className="text-2xl text-white font-bold">TANPA POTONGAN</h2>
          <p className="text-white text-2xl mt-4 text-center">
            Kamu Terima Dana Yang Dicairkan Full 100%
          </p>
        </div>
        <div className="w-full bg-green-600 shadow h-auto p-4 flex flex-col items-center justify-start pt-20 gap-2 px-20 lg:h-[350px]">
          <BriefcaseIcon className="text-white w-14" />
          <h2 className="text-2xl text-white font-bold">PROSES CEPAT</h2>
          <p className="text-white text-2xl mt-4 text-center">
            Hanya Dalam 2 - 3 Hari
          </p>
        </div>
        <div className="w-full bg-green-600 shadow h-auto p-4 flex flex-col items-center justify-start pt-20 gap-2 px-20 lg:h-[350px]">
          <Square3Stack3DIcon className="text-white w-14" />
          <h2 className="text-2xl text-white font-bold">TERPERCAYA</h2>
          <p className="text-white text-2xl mt-4 text-center">
            Sudah Lebih Dari 200 Cabang di Indonesia
          </p>
        </div>
      </div>

      {/* Kenapa Harus Leasfund */}
      <div className="bg-white w-full lg:py-10 py-10 relative shadow flex lg:flex-row flex-col items-start lg:gap-0 gap-6 lg:px-20 px-0">
        <div className="w-full flex flex-col gap-4 items-center pt-4">
          <h1 className="font-bold text-4xl text-black">
            Kenapa Harus Leasfund Finance?
          </h1>
          <hr className="w-1/2 border-b-2 border-b-green-500" />
          <h5 className="text-2xl text-black px-10 mt-5">
            Leasfund Dapat Menjadi Solusi Tepat Dan Cepat Untuk Pinjaman Dana
            Tunai Dengan Jaminan BPKB Kendaraan Motor, Mobil, Dan Truk. Untuk
            Keperluan Anak Sekolah, Hari Raya, Renovasi Rumah, Kesehatan Dan
            Sebagainya.
          </h5>
        </div>
        <div className="w-full">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/leasefund.appspot.com/o/images%2FPeluang%20Bisnis.jpg?alt=media&token=27b3cd34-679a-4e8b-a6a9-d29f75a84485"
            alt="illustartion"
            className="w-full lg:h-[400px] h-auto"
          />
        </div>
      </div>

      {/* Isi Form */}
      <div className="bg-white w-full lg:py-10 py-10 relative shadow flex flex-col items-center lg:gap-0 gap-6 lg:px-20 px-0">
        <hr className="w-1/2 border-b-2 border-b-green-500" />
        <div className="flex lg:flex-row flex-col justify-between items-start gap-8 mt-20 w-full">
          <div className="flex flex-col gap-2 items-center w-full">
            <ClipboardDocumentListIcon className="text-green-500 w-20" />
            <h5 className="text-2xl font-semibold text-black">1. ISI FORM</h5>
            <p className="text-lg text-black">
              Kamu bisa isi form dengan klik ajukan sekarang
            </p>
          </div>

          <div className="flex flex-col gap-2 items-center w-full">
            <CheckBadgeIcon className="text-green-500 w-20" />
            <h5 className="text-2xl font-semibold text-black">
              2. KONFIRMASI SURVEY
            </h5>
            <p className="text-lg text-black text-center">
              Konfirmasi jadwal survey yang kamu mau dan bisa diatur waktunya
              oleh tim survey
            </p>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between items-start gap-8 mt-20 w-full">
          <div className="flex flex-col gap-2 items-center w-full">
            <ClipboardDocumentCheckIcon className="text-green-500 w-20" />
            <h5 className="text-2xl font-semibold text-black">
              3. VERIFIKASI DOKUMEN
            </h5>
            <p className="text-lg text-black">Verifikasi syarat dokumen</p>
          </div>

          <div className="flex flex-col gap-2 items-center w-full">
            <CurrencyDollarIcon className="text-green-500 w-20" />
            <h5 className="text-2xl font-semibold text-black">
              4. PENCAIRAN DANA
            </h5>
            <p className="text-lg text-black text-center">
              Setelah Acc dana akan cair
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="bg-white h-auto w-full lg:px-10 px-4 lg:py-20 py-14 flex lg:flex-row flex-col justify-center items-center">
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
