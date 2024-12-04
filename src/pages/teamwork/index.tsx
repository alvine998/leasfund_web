import BottomNav from "@/components/BottomNav";
import Navbar from "@/components/Navbar";
import Teamworks from "@/components/Teamwork";
import React from "react";

export default function Teamwork() {
  return (
    <div>
      <Navbar />
        <div>
            <Teamworks/>
        </div>
      <BottomNav />
    </div>
  );
}
