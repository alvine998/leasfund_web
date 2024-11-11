import Navbar from "@/components/Navbar";
import React from "react";

export default function Branch() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.0554097134564!2d107.63247277454214!3d-7.002757968587607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e98bdb7cb2ef%3A0x114f4ddf7a0c7267!2sJl.%20Mekarsari%20No.9%2C%20Baleendah%2C%20Kec.%20Baleendah%2C%20Kabupaten%20Bandung%2C%20Jawa%20Barat%2040375!5e0!3m2!1sid!2sid!4v1731326037124!5m2!1sid!2sid"
        width="1920"
        height="520"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="bg-white w-full py-8 px-8">
        <h2 className="text-2xl text-green-800 font-semibold">
          Lokasi Kantor Kami
        </h2>
        <button className="bg-white shadow-lg border w-1/6 py-4 px-4 rounded hover:bg-green-700 hover:text-white duration-200 transition-all text-gray-800 mt-4 text-left transform ease-in-out">
          <strong className="text-lg">Kantor Utama</strong>
          <br />
          Kp. Mekarsari No 09, Kel. Baleendah, Kec. Baleendah, Kab. Bandung
        </button>
      </div>
    </div>
  );
}
