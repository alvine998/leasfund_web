import { usePathname } from "next/navigation";
import React from "react";
import { Poppins } from "next/font/google";

const poppinsRegular = Poppins({ weight: "500", subsets: ["latin"] });
const poppinsBold = Poppins({ weight: "700", subsets: ["latin"] });

export default function Navbar() {
  const navs = [
    {
      name: "Beranda",
      href: "/",
    },
    {
      name: "Produk",
      href: "/product",
      children: [
        {
          name: "Mobil",
          href: "/car",
        },
        {
          name: "Motor",
          href: "/motorcycle",
        },
      ],
    },
    {
      name: "Tentang Kami",
      href: "/aboutus",
    },
    {
      name: "Ketentuan & Privasi",
      href: "/privacy",
    },
  ];
  const pathname = usePathname();
  return (
    <div className="bg-white shadow md:h-[70px] w-full items-center px-20 flex fixed z-10 top-0">
      <div>
        <img
          src="/images/logo_full2.png"
          alt="logo"
          className="md:w-[100px] h-auto"
        />
      </div>
      <div className="flex gap-10 md:ml-48">
        {navs?.map((val: { name: string; href: string }, i: number) => (
          <a
            key={i}
            className={`uppercase transition-all text-sm duration-200 font-sans ${
              pathname == val?.href
                ? `text-black font-bold ${poppinsBold.className}`
                : `hover:text-green-500 text-black ${poppinsRegular.className}`
            }`}
            href={val?.href}
          >
            {val?.name}
          </a>
        ))}
      </div>
      <div className="md:ml-20">
        <button className="bg-green-600 p-2 font-sans font-bold text-lg text-white rounded hover:bg-green-500 duration-200 transition-all">
          Ajukan Kredit
        </button>
      </div>
    </div>
  );
}
