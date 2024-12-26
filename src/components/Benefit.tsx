import React from "react";

export default function Benefit() {
  const benefits: any[] = [
    {
      title: "Sangat Mudah",
      description:
        "Jika Anda mengajukan langsung ke kantor cabang, data bisa tidak langsung diproses, tapi jika melalui Leasfund, kami pastikan akan cepat diproses dan cair (apabila kapasitas dianggap baik).",
    },
    {
      title: "Cepat & Responsif",
      description:
        "Saat ini banyak situs pembanding produk keuangan, namun setelah Anda memilih salah satu produk, data Anda tidak langsung diproses oleh leasing tapi melalui tim situs tersebut.",
    },
    {
      title: "Suku Bunga Terendah",
      description:
        "Kami mewajibkan setiap Leasing rekanan untuk memberikan rate terbaik kepada nasabah dan setiap nasabah, prosesnya akan selalu kami monitoring agar tidak terjadi penyimpangan yang dilakukan oleh tim lapangan.",
    }
  ];
  return (
    <div>
      <h2 className={`font-bold text-black text-4xl text-center`}>
        Mengapa Harus Leasfund ?
      </h2>
      <div className="flex lg:flex-row flex-col gap-4 mt-5 items-start justify-center">
        {benefits?.map(
          (val: { title: string; description: string }, idx: number) => (
            <div
              key={idx}
              className={`${
                idx % 2 == 0
                  ? "border-blue-300 bg-white"
                  : "border-green-300 bg-green-600"
              } lg:h-auto h-auto lg:w-full w-full hover:-mt-2 mt-0 duration-300 transition-all shadow p-2 rounded lg:px-10 lg:py-5 cursor-pointer`}
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
