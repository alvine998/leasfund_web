import BottomNav from "@/components/BottomNav";
import Navbar from "@/components/Navbar";
import { toMoney } from "@/utils/utils";
import {
  BuildingOffice2Icon,
  CalculatorIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { NumericFormat } from "react-number-format";
import ReactSelect from "react-select";
import { Poppins } from "next/font/google";

const poppinsBold = Poppins({ weight: "700", subsets: ["latin"] });

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

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 700); // Adjust `50` as needed for your threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // const [isOpen, setIsOpen] = useState<boolean>(false);

  // const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="w-full">
      <Navbar />
      {/* Section 1 */}
      <div className="bg-[url('/images/banner4.png')] lg:w-full w-auto h-[100vh] lg:h-[120vh] lg:-mt-20 mt-[70px] lg:pt-[200px] pt-20">
        <h2 className="text-4xl font-semibold lg:w-[450px] w-full">
          Solusi Dana Tunai Cepat dengan Jaminan BPKB.
        </h2>
        <p className="text-xl lg:mt-4 mt-2 lg:w-[500px] w-full">
          <strong>Leasfund</strong> adalah mitra keuangan anda yang dapat
          diandalkan, menyediakan solusi dana tunai yang cepat dan mudah dengan
          menggunakan BPKB motor dan mobil.
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded lg:mt-4 mt-2 hover:bg-blue-600 duration-200">
          Ajukan Sekarang
        </button>
      </div>
      {/* Section 2 */}
      <div className="bg-white h-[100vh] w-full lg:px-10 px-4 flex lg:flex-row flex-col justify-center items-center">
        <h2
          className={`lg:mt-0 mt-40 text-4xl w-full font-semibold lg:opacity-100 text-center duration-500 transition-opacity text-green-700 ${
            isScrolled ? "opacity-0" : "opacity-100"
          }`}
        >
          Layanan Leasfund
        </h2>
        <div
          className={`lg:-mt-0 -mt-40 duration-500 transition-opacity lg:opacity-100 w-full ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        >
          {filter == "" && (
            <div>
              <h5 className="lg:text-2xl text-xl text-black">
                Solusi Mudah, Cepat, dan Aman untuk kebutuhan finansial Anda
              </h5>
              <p className="mt-4 text-justify text-black lg:text-md text-sm">
                Untuk Anda, Kreditplus menyediakan berbagai macam produk dan
                layanan keuangan. Produk dan layanan kami termasuk pembiayaan
                untuk kebutuhan produk elektronik dan furniture Anda, penyediaan
                kredit multi guna dan modal usaha untuk solusi kebutuhan dana
                Anda, serta produk keuangan berbasis teknologi terkini.
              </p>
              <div className="flex lg:flex-row flex-col gap-2 mt-4">
                <Link href={"/branch"}>
                  <button className="p-2 border shadow-lg rounded-lg flex gap-2 items-center hover:-mt-2 mt-0 duration-200 transition-all">
                    <BuildingOffice2Icon className="w-14 text-green-600" />
                    <h5 className="text-black">Kantor Cabang</h5>
                  </button>
                </Link>

                <button
                  onClick={() => {
                    setFilter("simulation");
                  }}
                  className="p-2 border shadow-lg rounded-lg gap-2 flex items-center hover:-mt-2 mt-0 duration-200 transition-all"
                >
                  <CalculatorIcon className="w-14 text-green-600" />
                  <h5 className="text-black">Simulasi Kredit</h5>
                </button>
                <Link href={`https://wa.me/6285863953727`}>
                  <button className="p-2 border shadow-lg rounded-lg gap-2 flex items-center hover:-mt-2 mt-0 duration-200 transition-all">
                    <PhoneIcon className="w-14 text-green-600" />
                    <h5 className="text-black">Customer Care</h5>
                  </button>
                </Link>
              </div>
            </div>
          )}

          {filter == "simulation" && (
            <div className="mt-4 w-full">
              <button
                className="border rounded w-full py-2 px-4 text-black shadow"
                type="button"
                onClick={() => {
                  setFilter("");
                }}
              >
                Kembali
              </button>
              <div className="flex gap-2 w-full mt-2">
                <button
                  className={`${
                    type == "car" ? "bg-blue-100" : "hover:bg-blue-100"
                  } bg-white border rounded w-full py-2 px-4 duration-200 transition-all shadow text-black`}
                  onClick={() => {
                    setType("car");
                    setIdx(0);
                    setRangeValue(20000000);
                    setList({
                      ...list,
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
                  }}
                >
                  Mobil
                </button>
                <button
                  className={`${
                    type == "motor" ? "bg-blue-100" : "hover:bg-blue-100"
                  } bg-white border rounded w-full py-2 px-4 duration-200 transition-all shadow text-black`}
                  onClick={() => {
                    setType("motor");
                    setIdx(1);
                    setRangeValue(2000000);
                    setList({
                      ...list,
                      months: [
                        {
                          value: "6",
                          label: "6 Bulan",
                        },
                        {
                          value: "12",
                          label: "12 Bulan",
                        },
                        {
                          value: "18",
                          label: "18 Bulan",
                        },
                        {
                          value: "24",
                          label: "24 Bulan",
                        },
                      ],
                    });
                  }}
                >
                  Motor
                </button>
              </div>
              <div className="border py-4 px-2 rounded bg-white shadow mt-2">
                <h5 className="font-bold text-center text-black">
                  Simulasi Kredit {type == "car" ? "Mobil" : "Motor"}
                </h5>

                <div className="mt-4">
                  <ReactSelect
                    className="text-black"
                    options={[
                      {
                        value: "Jakarta",
                        label: "Jakarta",
                      },
                      {
                        value: "Bekasi",
                        label: "Bekasi",
                      },
                      {
                        value: "Bogor",
                        label: "Bogor",
                      },
                      {
                        value: "Tangerang",
                        label: "Tangerang",
                      },
                      {
                        value: "Bandung",
                        label: "Bandung",
                      },
                      {
                        value: "Depok",
                        label: "Depok",
                      },
                      {
                        value: "Cimahi",
                        label: "Cimahi",
                      },
                    ]}
                    placeholder="Pilih Kota"
                  />
                </div>
                <div className="mt-4">
                  <ReactSelect
                    className="text-black"
                    options={[
                      {
                        value: "Daihatsu Ayla 2020",
                        label: "Daihatsu Ayla 2020",
                      },
                      {
                        value: "Honda Brio RS 2021",
                        label: "Honda Brio RS 2021",
                      },
                      {
                        value: "Toyota Avanza 2018",
                        label: "Toyota Avanza 2018",
                      },
                      {
                        value: "Daihatsu Sigra 2020",
                        label: "Daihatsu Sigra 2020",
                      },
                      {
                        value: "Mitsubishi Expander Exceed 2020",
                        label: "Mitsubishi Expander Exceed 2020",
                      },
                      {
                        value: "Nissan Grand Livina 1.5 2014",
                        label: "Nissan Grand Livina 1.5 2014",
                      },
                      {
                        value: "Honda Mobilio 2015",
                        label: "Honda Mobilio 2015",
                      },
                    ]}
                    placeholder="Pilih Tipe Kendaraan"
                  />
                </div>

                <div className="mt-4">
                  <ReactSelect
                    className="text-black"
                    options={list?.months}
                    placeholder="Pilih Tenor"
                  />
                </div>

                <div className="mt-4">
                  <NumericFormat
                    thousandSeparator="."
                    decimalSeparator=","
                    onValueChange={(value: { floatValue?: number }) =>
                      setRangeValue(value?.floatValue ?? 0)
                    }
                    prefix="Rp "
                    decimalScale={0}
                    fixedDecimalScale={true}
                    allowNegative={false}
                    value={rangeValue}
                    className="border border-gray-300 rounded px-2 py-1 w-full text-black"
                    placeholder="Masukkan Nominal Pembiayaan"
                  />
                </div>

                <div className="mt-4">
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-black">
                      {toMoney(+ranges[idx]?.[type]?.min)}
                    </p>
                    <p className="text-xs text-black">
                      {toMoney(+ranges[idx]?.[type]?.max)}
                    </p>
                  </div>
                  <input
                    type="range"
                    min={ranges[idx]?.[type]?.min}
                    max={ranges[idx]?.[type]?.max}
                    value={rangeValue}
                    onChange={(e) => {
                      setRangeValue(+e.target.value);
                    }}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <style jsx>{`
                    input[type="range"]::-webkit-slider-thumb {
                      height: 1rem;
                      width: 1rem;
                      border-radius: 9999px;
                      background-color: #3b82f6; /* Tailwind 'blue-600' */
                      cursor: pointer;
                      appearance: none;
                    }
                    input[type="range"]::-moz-range-thumb {
                      height: 1rem;
                      width: 1rem;
                      border-radius: 9999px;
                      background-color: #3b82f6; /* Tailwind 'blue-600' */
                      cursor: pointer;
                    }
                  `}</style>
                </div>

                <div className="mt-4">
                  <button className="p-2 w-full rounded text-white bg-green-500 hover:bg-green-600 duration-200 transition-all">
                    Cek Sekarang
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* <button className="bg-orange-500 text-white py-2 px-4 rounded mt-2 hover:bg-orange-600 duration-200">
                Cek Simulasi
              </button> */}
        </div>
      </div>
      {/* Section 3 */}
      <div className="bg-gray-200 w-full h-[100vh] lg:px-10 px-4 lg:py-10 py-4 flex flex-col gap-2 justify-center items-center">
        <h2 className={`${poppinsBold} text-black text-4xl text-center`}>
          Mengapa Leasfund ?
        </h2>
        <div className="flex flex-wrap gap-4 mt-5">
          <div className="border-green-300 lg:h-[50vh] h-auto lg:w-[250px] w-full bg-green-200 hover:-mt-2 mt-0 duration-300 transition-all shadow p-2 rounded lg:px-10 lg:py-5 cursor-pointer">
            <h2 className="text-gray-700 text-xl">
              Semua data diproses secara online
            </h2>
            <p className="text-gray-700 mt-2">
              Proses digital tanpa kertas termasuk fitur-fitur seperti
              verifikasi panggilan, penyerahan dokumen secara daring, dll.
            </p>
          </div>

          <div className="border-blue-300 lg:h-[50vh] h-auto lg:w-[250px] w-full bg-blue-200 hover:-mt-2 mt-0 duration-300 transition-all shadow p-2 rounded lg:px-10 lg:py-5 cursor-pointer">
            <h2 className="text-gray-700 text-xl">
              Semua data diproses secara online
            </h2>
            <p className="text-gray-700 mt-2">
              Proses digital tanpa kertas termasuk fitur-fitur seperti
              verifikasi panggilan, penyerahan dokumen secara daring, dll.
            </p>
          </div>

          <div className="border-orange-300 lg:h-[50vh] h-auto lg:w-[250px] w-full bg-orange-200 hover:-mt-2 mt-0 duration-300 transition-all shadow p-2 rounded lg:px-10 lg:py-5 cursor-pointer">
            <h2 className="text-gray-700 text-xl">
              Semua data diproses secara online
            </h2>
            <p className="text-gray-700 mt-2">
              Proses digital tanpa kertas termasuk fitur-fitur seperti
              verifikasi panggilan, penyerahan dokumen secara daring, dll.
            </p>
          </div>

          <div className="border-red-300 lg:h-[50vh] h-auto lg:w-[250px] w-full bg-red-200 hover:-mt-2 mt-0 duration-300 transition-all shadow p-2 rounded lg:px-10 lg:py-5 cursor-pointer">
            <h2 className="text-gray-700 text-xl">
              Semua data diproses secara online
            </h2>
            <p className="text-gray-700 mt-2">
              Proses digital tanpa kertas termasuk fitur-fitur seperti
              verifikasi panggilan, penyerahan dokumen secara daring, dll.
            </p>
          </div>
        </div>
      </div>
      {/* Section 4 */}
      <div className="bg-white w-full lg:px-10 px-4 lg:py-10 py-4 flex flex-col gap-2 justify-center items-center relative">
        <h2 className={`${poppinsBold} text-black text-lg text-center`}>
          MITRA
        </h2>
        <div className="w-full flex gap-2 justify-center items-center">
          <img
            src="/images/logo_full2.png"
            alt="logo"
            className="lg:w-[100px] w-[50px] h-auto animate-runLoop"
          />
          <img
            src="/images/logo_full2.png"
            alt="logo"
            className="lg:w-[100px] w-[50px] h-auto animate-runLoop"
          />
          <img
            src="/images/logo_full2.png"
            alt="logo"
            className="lg:w-[100px] w-[50px] h-auto animate-runLoop"
          />
          <img
            src="/images/logo_full2.png"
            alt="logo"
            className="lg:w-[100px] w-[50px] h-auto animate-runLoop"
          />
          <img
            src="/images/logo_full2.png"
            alt="logo"
            className="lg:w-[100px] w-[50px] h-auto animate-runLoop"
          />
          <img
            src="/images/logo_full2.png"
            alt="logo"
            className="lg:w-[100px] w-[50px] h-auto animate-runLoop"
          />
        </div>
      </div>
      <BottomNav />
    </div>
  );
}
