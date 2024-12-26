import React from "react";
import PartnerLogo from "./PartnerLogo";

export default function AboutUs() {
  return (
    <div className="bg-white w-full p-2 lg:px-40 px-2 pt-10">
      <p className="text-black text-left">
        Leasfund adalah platform pembiayaan aggregator dana tunai BPKB yang
        hadir untuk memberikan solusi finansial terbaik bagi masyarakat. Kami
        berperan sebagai jembatan antara calon nasabah dan perusahaan pembiayaan
        resmi yang terdaftar di OJK (Otoritas Jasa Keuangan).
      </p>
      <p className="text-black text-left mt-2">
        Dengan sistem berbasis teknologi yang inovatif, Leasfund memastikan
        proses pengajuan pembiayaan menjadi lebih mudah, cepat, dan transparan.
        Kami fokus pada layanan dengan agunan BPKB kendaraan (motor & mobil),
        yang cocok untuk kebutuhan dana tunai yang fleksibel, baik untuk
        keperluan usaha maupun kebutuhan pribadi.
      </p>
      <p className="text-black text-left mt-2">
        Leasfund didirikan pada tahun 2023, dengan visi menjadi solusi utama
        pembiayaan berbasis teknologi di Indonesia. Kami berkomitmen untuk
        memberikan pengalaman layanan keuangan yang nyaman dan dapat diandalkan.
      </p>
      <div className="mt-4">
        <PartnerLogo />
      </div>
    </div>
  );
}
