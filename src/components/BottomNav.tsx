import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";

export default function BottomNav() {
  return (
    <div className="h-[50vh] w-full shadow bg-green-700 py-5 px-20 flex justify-between items-start">
      <div className="w-full pt-5">
        <img
          src="/images/logo_full2.png"
          alt="logo"
          className="md:w-[300px] h-auto"
        />
      </div>
      <div className="w-full">
        <h5 className="text-xl font-bold mt-8">Navigasi</h5>
        <ol className="pl-4">
          <li className="list-disc mt-2 hover:underline">
            <Link href={"/aboutus"}>Tentang Kami</Link>
          </li>
          <li className="list-disc mt-2 hover:underline">
            <Link href={"/aboutus"}>Produk Mobil</Link>
          </li>
          <li className="list-disc mt-2 hover:underline">
            <Link href={"/aboutus"}>Produk Motor</Link>
          </li>
          <li className="list-disc mt-2 hover:underline">
            <Link href={"/aboutus"}>Syarat & Ketentuan</Link>
          </li>
          <li className="list-disc mt-2 hover:underline">
            <Link href={"/aboutus"}>Kebijakan Privasi</Link>
          </li>
        </ol>
      </div>
      <div className="w-full">
        <h5 className="text-xl font-bold mt-8">Kontak Kami</h5>
        <Link href={`https://wa.me/6285863953727`}>
          <button className="mt-5 flex gap-2 hover:underline items-center">
            <PhoneIcon className="w-5" />
            <p>+62 858-6395-3727</p>
          </button>
        </Link>
        <Link href={"mailto:admin@leasfund.com"}>
          <button
            className="mt-5 flex gap-2 hover:underline items-center"
            type="button"
          >
            <EnvelopeIcon className="w-5" />
            <p>admin@leasfund.com</p>
          </button>
        </Link>

        <button className="mt-5 flex gap-2 items-start text-left">
          <MapPinIcon className="w-5" />
          <p className="w-[300px]">
            Kp. Mekarsari No 09 Kel. Baleendah Kec. Baleendah Kab. Bandung Jawa
            Barat 40229
          </p>
        </button>
      </div>
    </div>
  );
}
