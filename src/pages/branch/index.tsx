import BottomNav from "@/components/BottomNav";
import Navbar from "@/components/Navbar";
import React from "react";

export default function Branch() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.0554097134564!2d107.63247277454214!3d-7.002757968587607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e98bdb7cb2ef%3A0x114f4ddf7a0c7267!2sJl.%20Mekarsari%20No.9%2C%20Baleendah%2C%20Kec.%20Baleendah%2C%20Kabupaten%20Bandung%2C%20Jawa%20Barat%2040375!5e0!3m2!1sid!2sid!4v1731326037124!5m2!1sid!2sid"
        width="1920"
        height="520"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe> */}
      <div className="bg-white w-full lg:h-[600px] h-auto pt-24 flex justify-center items-center lg:pl-20 pl-10">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/leasefund.appspot.com/o/images%2Fseptember-peta-new-area-2024-AwanTunai-01-1-qudmz4ycn7c6ik5edv7np0ndjrihlo9ib5bjuosoae%20(1).png?alt=media&token=2a5f8c8d-05cd-46f8-a462-9f1731f5ed3a"
          alt="maps"
          className="w-full lg:h-[600px]"
        />
      </div>
      <div className="bg-white w-full py-8 px-8">
        <h2 className="text-2xl text-green-800 font-semibold">
          Lokasi Kantor Kami
        </h2>
        <button className="bg-white shadow-lg border lg:w-1/4 w-full py-4 px-4 rounded hover:bg-green-700 hover:text-white duration-200 transition-all text-gray-800 mt-4 text-left transform ease-in-out">
          <strong className="text-lg ">Kantor Utama</strong>
          <br />
          Kp. Mekarsari No 09, Kel. Baleendah, Kec. Baleendah, Kab. Bandung
        </button>
      </div>
      <BottomNav/>
    </div>
  );
}
