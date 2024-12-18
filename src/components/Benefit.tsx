import React from "react";
import { Poppins } from "next/font/google";

const poppinsBold = Poppins({ weight: "700", subsets: ["latin"] });

export default function Benefit() {
  const benefits: any[] = [
    {
      title: "Layanan Profesional",
      description:
        "Tim kami siap membantu Anda dengan solusi finansial terbaik.",
    },
    {
      title: "Syarat Mudah",
      description:
        "Syarat mudah cukup KTP, STNK, & BPKB",
    },
    {
      title: "Proses Cepat",
      description:
        "Semua pengajuan dilakukan secara online untuk kenyamanan Anda.",
    },
    {
      title: "Fleksibel & Transparan",
      description:
        "Pilihan tenor dan suku bunga yang disesuaikan tanpa biaya tersembunyi.",
    },
  ];
  return (
    <div>
      <h2 className={`${poppinsBold} text-black text-4xl text-center`}>
        Mengapa Harus Leasfund ?
      </h2>
      <div className="flex flex-wrap gap-4 mt-5">
        {benefits?.map(
          (val: { title: string; description: string }, idx: number) => (
            <div
              key={idx}
              className={`${
                idx % 2 == 0
                  ? "border-blue-300 bg-white"
                  : "border-green-300 bg-green-600"
              } lg:h-[20vh] h-auto lg:w-[300px] w-full hover:-mt-2 mt-0 duration-300 transition-all shadow p-2 rounded lg:px-10 lg:py-5 cursor-pointer`}
            >
              <h2
                className={`${
                  idx % 2 == 0 ? "text-black" : "text-white"
                } text-xl font-bold lg:text-left text-center`}
              >
                {val?.title}
              </h2>
              <p
                className={`${idx % 2 == 0 ? "text-black" : "text-white"} mt-2`}
              >
                {val?.description}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
