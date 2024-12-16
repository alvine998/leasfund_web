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
      <div className="bg-green-200 lg:h-[30vh] md:[30vh] h-[18vh] w-full flex justify-center items-center relative lg:mt-[250px] md:mt-[120px] mt-[70px]">
        <img about="bannernav" src="/images/bannernav.png" className="w-full h-auto absolute z-0" />
        <h1 className={`${poppinsBold} text-black font-bold lg:text-4xl md:text-4xl text-xl absolute z-10 lg:top-0 top-10 lg:right-80 md:right-40 right-4`}>
          Tentang Kami
        </h1>
      </div>
      <div className="lg:mt-[25vh] md:mt-[5vh] mt-0">
        <AboutUs />
      </div>
      <BottomNav />
    </div>
  );
}
