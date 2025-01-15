import BottomNav from "@/components/BottomNav";
import Navbar from "@/components/Navbar";
import React from "react";
import { Poppins } from "next/font/google";
import PawnCar from "@/components/PawnCar";

const poppinsBold = Poppins({ weight: "700", subsets: ["latin"] });

export default function PawnCarPage() {
  return (
    <div>
      <Navbar />
      <div className="bg-white w-full flex justify-center items-center relative lg:mt-10">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/leasefund.appspot.com/o/images%2F304dbc_85ea9ebdc8b14046a699d573a4a24477~mv2.webp?alt=media&token=52883b07-5e11-4ff2-aaeb-9e8e60a04bee"
          alt="car"
        />
        {/* <h1
          className={`${poppinsBold} text-black font-bold lg:text-4xl md:text-4xl text-xl absolute z-10 lg:top-0 top-10 lg:right-80 md:right-40 right-4`}
        >
          Gadai BPKB Mobil
        </h1> */}
      </div>
      <div className="lg:mt-[0vh] md:mt-[5vh] mt-0">
        <PawnCar />
      </div>
      <BottomNav />
    </div>
  );
}
