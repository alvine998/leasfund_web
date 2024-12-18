import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";

export default function BottomNav() {
  return (
    <div className="lg:h-[40vh] h-auto w-full shadow bg-green-700 py-5 lg:px-20 px-2 flex lg:flex-row flex-col justify-between items-start">
      <div className="w-full pt-5 lg:flex hidden lg:justify-start justify-center items-center">
        <img
          src="/images/logo_full2.png"
          alt="logo"
          className="lg:w-[300px] w-[200px] h-auto"
        />
      </div>
      <div className="w-full">
        <h5 className="text-xl font-bold mt-5 text-white">Navigasi</h5>
        <ol className="pl-4">
          <li className="list-disc mt-2 hover:underline">
            <Link className="text-white" href={"/aboutus"}>Tentang Kami</Link>
          </li>
          <li className="list-disc mt-2 hover:underline">
            <Link className="text-white" href={"/product/digital-leasing"}>Digital Leasing</Link>
          </li>
          <li className="list-disc mt-2 hover:underline">
            <Link className="text-white" href={"/product/personal-loan"}>Personal Loan</Link>
          </li>
          <li className="list-disc mt-2 hover:underline">
            <Link className="text-white" href={"/privacy"}>Kebijakan Privasi</Link>
          </li>
          <li className="list-disc mt-2 hover:underline">
            <Link className="text-white" href={"/term"}>Syarat & Ketentuan</Link>
          </li>
        </ol>
      </div>
      <div className="w-full">
        <h5 className="text-xl font-bold mt-5 text-white">Kontak Kami</h5>
        <Link href={`https://wa.me/6285863953727`}>
          <button className="mt-5 flex gap-2 hover:underline items-center">
            <PhoneIcon className="lg:w-5 w-8" />
            <p className="text-white">+62 858-6395-3727</p>
          </button>
        </Link>
        <Link href={"mailto:admin@leasfund.com"}>
          <button
            className="mt-5 flex gap-2 hover:underline items-center"
            type="button"
          >
            <EnvelopeIcon className="lg:w-5 w-8" />
            <p className="text-white">admin@leasfund.com</p>
          </button>
        </Link>

        <button className="mt-5 flex gap-2 items-start text-left">
          <MapPinIcon className="lg:w-5 w-16" />
          <p className="lg:w-[300px] w-auto text-white">
            Kp. Mekarsari No 09 Kel. Baleendah Kec. Baleendah Kab. Bandung Jawa
            Barat 40229
          </p>
        </button>
      </div>
    </div>
  );
}
