import BottomNav from "@/components/BottomNav";
import Navbar from "@/components/Navbar";
import React from "react";
import { Poppins } from "next/font/google";
import AboutUs from "@/components/AboutUs";

const poppinsBold = Poppins({ weight: "700", subsets: ["latin"] });

export default function Aboutus() {
  return (
    <div>
      <Navbar />
      <div className="bg-green-200 h-[30vh] w-full flex justify-center items-center">
        <h1 className={`${poppinsBold} text-black font-bold text-4xl mt-14`}>
          Tentang Kami
        </h1>
      </div>
      <div>
        <AboutUs />
      </div>
      <BottomNav />
    </div>
  );
}
