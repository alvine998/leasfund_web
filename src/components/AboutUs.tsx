import React from "react";
import PartnerLogo from "./PartnerLogo";

export default function AboutUs() {
  return (
    <div className="bg-white w-full p-2">
      <p className="text-black text-justify">
        Berdiri pada tahun 2023 dengan kantor pusat di Bandung merupakan
        perusahaan teknologi yang membantu pertumbuhan bisnis melalui SaaS yang
        inovatif dan menghubungkanklien dengan konsumen secara digital dan
        langsung.
      </p>
      <p className="text-black text-justify mt-2">
        Misi utama kami adalah menghubungkan para ahli dan konsumen di seluruh
        dunia untuk meningkatkan produktivitas dan kesuksesan mereka.
      </p>
      <div className="mt-4">
        <PartnerLogo />
      </div>
    </div>
  );
}
