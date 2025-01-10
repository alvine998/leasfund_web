import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";

export default function BottomNav() {
  return (
    <div>
      <div className="lg:h-[40vh] h-auto w-full shadow bg-green-700 py-5 lg:pb-0 pb-14 lg:px-20 px-2">
        <div className="flex lg:flex-row flex-row justify-between items-start">
          <div className="w-full lg:pt-5 pt-0 lg:flex hidden lg:justify-start justify-center items-center">
            <img
              src="/images/logo_full2.png"
              alt="logo"
              className="lg:w-[300px] w-[200px] h-auto"
            />
          </div>
          <div className="w-full">
            <h5 className="lg:text-xl text-md font-bold mt-5 text-white">
              Navigasi
            </h5>
            <ol className="pl-4">
              <li className="list-disc lg:mt-2 mt-0 hover:underline">
                <Link
                  className="text-white lg:text-md text-xs"
                  href={"/aboutus"}
                >
                  Tentang Kami
                </Link>
              </li>
              <li className="list-disc lg:mt-2 mt-0 hover:underline">
                <Link
                  className="text-white lg:text-md text-xs"
                  href={"/pawn/car"}
                >
                  Gadai BPKB Mobil
                </Link>
              </li>
              <li className="list-disc lg:mt-2 mt-0 hover:underline">
                <Link
                  className="text-white lg:text-md text-xs"
                  href={"/pawn/motor"}
                >
                  Gadai BPKB Motor
                </Link>
              </li>
              <li className="list-disc lg:mt-2 mt-0 hover:underline">
                <Link
                  className="text-white lg:text-md text-xs"
                  href={"/pawn/truck"}
                >
                  Gadai BPKB Truk
                </Link>
              </li>
              <li className="list-disc lg:mt-2 mt-0 hover:underline">
                <Link
                  className="text-white lg:text-md text-xs"
                  href={"/privacy"}
                >
                  Kebijakan Privasi
                </Link>
              </li>
              <li className="list-disc lg:mt-2 mt-0 hover:underline">
                <Link className="text-white lg:text-md text-xs" href={"/term"}>
                  Syarat & Ketentuan
                </Link>
              </li>
            </ol>
          </div>
          <div className="w-full">
            <h5 className="lg:text-xl text-md font-bold mt-5 text-white">
              Kontak Kami
            </h5>
            <Link href={`https://wa.me/6285863953727`}>
              <button className="lg:mt-5 mt-2 flex gap-2 hover:underline items-center">
                <PhoneIcon className="lg:w-5 w-5" />
                <p className="text-white text-xs lg:text-md">
                  +62 858-6395-3727
                </p>
              </button>
            </Link>
            <Link href={"mailto:admin@leasfund.com"}>
              <button
                className="lg:mt-5 mt-2 flex gap-2 hover:underline items-center"
                type="button"
              >
                <EnvelopeIcon className="lg:w-5 w-5" />
                <p className="text-white text-xs lg:text-md">
                  admin@leasfund.com
                </p>
              </button>
            </Link>

            <button className="lg:mt-5 mt-2 flex gap-2 items-start text-left">
              <MapPinIcon className="lg:w-5 w-16" />
              <p className="lg:w-[300px] w-auto text-white lg:text-md text-xs">
                Kp. Mekarsari No 09 Kel. Baleendah Kec. Baleendah Kab. Bandung
                Jawa Barat 40229
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black w-full -px-4">
        <h5 className="text-center lg:text-md text-xs">
          Copyright © 2023 PT. Leasfund Teknologi Solusi
        </h5>
      </div>
    </div>
  );
}
