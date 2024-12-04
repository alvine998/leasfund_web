import {
  BuildingOffice2Icon,
  CalculatorIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";

interface Props {
  setFilter: any;
}

export default function Services({ setFilter }: Props) {
  return (
    <div className="w-full">
      <h5 className="lg:text-2xl text-xl text-black">
        Solusi Mudah, Cepat, dan Aman untuk kebutuhan finansial Anda
      </h5>
      <p className="mt-4 text-justify text-black lg:text-md text-sm">
        Untuk Anda, Kreditplus menyediakan berbagai macam produk dan layanan
        keuangan. Produk dan layanan kami termasuk pembiayaan untuk kebutuhan
        produk elektronik dan furniture Anda, penyediaan kredit multi guna dan
        modal usaha untuk solusi kebutuhan dana Anda, serta produk keuangan
        berbasis teknologi terkini.
      </p>
      <div className="flex lg:flex-row flex-col gap-2 mt-4">
        <Link href={"/branch"}>
          <button className="p-2 border shadow-lg rounded-lg flex gap-2 items-center hover:-mt-2 mt-0 duration-200 transition-all w-full">
            <BuildingOffice2Icon className="w-14 text-green-600" />
            <h5 className="text-black">Kantor Cabang</h5>
          </button>
        </Link>

        <button
          onClick={() => {
            setFilter("simulation");
          }}
          className="p-2 border shadow-lg rounded-lg gap-2 flex items-center hover:-mt-2 mt-0 duration-200 transition-all w-full"
        >
          <CalculatorIcon className="w-14 text-green-600" />
          <h5 className="text-black">Simulasi Kredit</h5>
        </button>
        <Link href={`https://wa.me/6285863953727`}>
          <button className="p-2 border shadow-lg rounded-lg gap-2 flex items-center hover:-mt-2 mt-0 duration-200 transition-all w-full">
            <PhoneIcon className="w-14 text-green-600" />
            <h5 className="text-black">Customer Care</h5>
          </button>
        </Link>
      </div>
    </div>
  );
}
