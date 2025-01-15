import BottomNav from "@/components/BottomNav";
import Navbar from "@/components/Navbar";
import React from "react";
import { Poppins } from "next/font/google";
import PawnCar from "@/components/PawnCar";
import PawnTruck from "@/components/PawnTruck";

const poppinsBold = Poppins({ weight: "700", subsets: ["latin"] });

export default function PawnTruckPage() {
  return (
    <div>
      <Navbar />
      <div className="bg-white w-full flex justify-center items-center relative pt-24">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/leasefund.appspot.com/o/images%2Fmitsubishi-colt-300-dok-mitsubishi-3_169-removebg-preview.png?alt=media&token=555dc814-ff94-4b4e-8ecd-d571fc79e47e"
          alt="truck"
        />
        {/* <h1 className={`${poppinsBold} text-black font-bold lg:text-4xl md:text-4xl text-xl absolute z-10 lg:top-0 top-10 lg:right-80 md:right-40 right-4`}>
          Gadai BPKB Truk
        </h1> */}
      </div>
      <div className="lg:mt-[0vh] md:mt-[5vh] mt-0">
        <PawnTruck />
      </div>
      <BottomNav />
    </div>
  );
}
