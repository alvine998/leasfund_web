import BottomNav from "@/components/BottomNav";
import Navbar from "@/components/Navbar";
import React from "react";
import { Poppins } from "next/font/google";
import PawnCar from "@/components/PawnCar";
import PawnMotor from "@/components/PawnMotor";

const poppinsBold = Poppins({ weight: "700", subsets: ["latin"] });

export default function PawnMotorPage() {
  return (
    <div>
      <Navbar />
      <div className="bg-white w-full flex justify-center items-center relative pt-24">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/leasefund.appspot.com/o/images%2Fpng-clipart-scooter-yamaha-motor-company-motorcycle-yamaha-tmax-yamaha-nmax-yamaha-nmax-scooter-car-thumbnail-removebg-preview.png?alt=media&token=39808789-98e7-4e76-b264-22fdcd6f038e"
          alt="motor"
        />
        {/* <h1 className={`${poppinsBold} text-black font-bold lg:text-4xl md:text-4xl text-xl absolute z-10 lg:top-0 top-10 lg:right-80 md:right-40 right-4`}>
          Gadai BPKB Motor
        </h1> */}
      </div>
      <div className="lg:mt-[0vh] md:mt-[5vh] mt-0">
        <PawnMotor />
      </div>
      <BottomNav />
    </div>
  );
}
