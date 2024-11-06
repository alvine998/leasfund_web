import Navbar from "@/components/Navbar";
import { toMoney } from "@/utils/utils";
import {
  BuildingOffice2Icon,
  CalculatorIcon,
  PhoneIcon,
} from "@heroicons/react/20/solid";
import React, { useState } from "react";
import { NumericFormat } from "react-number-format";
import ReactSelect from "react-select";

export default function index() {
  const [filter, setFilter] = useState<string>("");
  const [type, setType] = useState<string>("car");
  const [rangeValue, setRangeValue] = useState<number>(20000000);
  const [ranges, setRanges] = useState<any>([
    {
      car: {
        min: "20000000",
        max: "800000000",
      },
    },
    {
      motor: {
        min: "2000000",
        max: "40000000",
      },
    },
  ]);
  const [idx, setIdx] = useState<number>(0);
  const [list, setList] = useState<any>({
    months: [
      {
        value: "12",
        label: "12 Bulan",
      },
      {
        value: "24",
        label: "24 Bulan",
      },
      {
        value: "36",
        label: "36 Bulan",
      },
      {
        value: "48",
        label: "48 Bulan",
      },
    ],
  });
  return (
    <div>
      <Navbar />
      <div className="relative">
        <div>
          <img
            src="/images/banner4.png"
            className="w-full h-auto absolute top-0 z-0"
          />
          <h2 className="absolute top-[150px] text-4xl w-[450px] font-semibold mx-[50px]">
            Solusi Dana Tunai Cepat dengan Jaminan BPKB.
          </h2>
          <p className="absolute top-[250px] text-xl w-[550px] mx-[50px]">
            <strong>Leasfund</strong> adalah mitra keuangan anda yang dapat
            diandalkan, menyediakan solusi dana tunai yang cepat dan mudah
            dengan menggunakan BPKB motor dan mobil.
          </p>
          <button className="bg-blue-500 text-white py-2 px-4 absolute top-[380px] rounded mx-[50px] hover:bg-blue-600 duration-200">
            Ajukan Sekarang
          </button>
        </div>
        <div className="absolute top-[100vh] bg-white h-[100vh] w-full px-10 flex items-center">
          <h2 className="text-4xl w-full font-semibold text-center mt-10 text-green-700">
            Layanan Leasfund
          </h2>
          <div className="flex justify-between gap-2 w-full">
            <div className="w-full">
              {filter == "" && (
                <div>
                  <h5 className="text-2xl">
                    Solusi Mudah, Cepat, dan Aman untuk kebutuhan finansial Anda
                  </h5>
                  <p className="mt-4 text-justify">
                    Untuk Anda, Kreditplus menyediakan berbagai macam produk dan
                    layanan keuangan. Produk dan layanan kami termasuk
                    pembiayaan untuk kebutuhan produk elektronik dan furniture
                    Anda, penyediaan kredit multi guna dan modal usaha untuk
                    solusi kebutuhan dana Anda, serta produk keuangan berbasis
                    teknologi terkini.
                  </p>
                  <div className="flex gap-2 mt-4">
                    <button className="p-2 border rounded-lg flex items-center hover:mt-2 mt-0 duration-200 transition-all">
                      <BuildingOffice2Icon className="w-14 text-green-600" />
                      <h5>Kantor Cabang</h5>
                    </button>
                    <button
                      onClick={() => {
                        setFilter("simulation");
                      }}
                      className="p-2 border rounded-lg flex items-center hover:mt-2 mt-0 duration-200 transition-all"
                    >
                      <CalculatorIcon className="w-14 text-green-600" />
                      <h5>Simulasi Kredit</h5>
                    </button>
                    <button className="p-2 border rounded-lg flex items-center hover:mt-2 mt-0 duration-200 transition-all">
                      <PhoneIcon className="w-14 text-green-600" />
                      <h5>Customer Care</h5>
                    </button>
                  </div>
                </div>
              )}

              {filter == "simulation" && (
                <div className="mt-4">
                  <div className="flex gap-2">
                    <button
                      className={`${
                        type == "car" ? "bg-blue-100" : "hover:bg-blue-100"
                      } bg-white border rounded w-full py-2 px-4 duration-200 transition-all shadow`}
                      onClick={() => {
                        setType("car");
                        setIdx(0);
                        setRangeValue(20000000);
                        setList({
                          ...list,
                          months: [
                            {
                              value: "12",
                              label: "12 Bulan",
                            },
                            {
                              value: "24",
                              label: "24 Bulan",
                            },
                            {
                              value: "36",
                              label: "36 Bulan",
                            },
                            {
                              value: "48",
                              label: "48 Bulan",
                            },
                          ],
                        });
                      }}
                    >
                      Mobil
                    </button>
                    <button
                      className={`${
                        type == "motor" ? "bg-blue-100" : "hover:bg-blue-100"
                      } bg-white border rounded w-full py-2 px-4 duration-200 transition-all shadow`}
                      onClick={() => {
                        setType("motor");
                        setIdx(1);
                        setRangeValue(2000000);
                        setList({
                          ...list,
                          months: [
                            {
                              value: "6",
                              label: "6 Bulan",
                            },
                            {
                              value: "12",
                              label: "12 Bulan",
                            },
                            {
                              value: "18",
                              label: "18 Bulan",
                            },
                            {
                              value: "24",
                              label: "24 Bulan",
                            },
                          ],
                        });
                      }}
                    >
                      Motor
                    </button>
                  </div>
                  <div className="border py-4 px-2 rounded bg-white shadow mt-2">
                    <h5 className="font-bold text-center">
                      Simulasi Kredit {type == "car" ? "Mobil" : "Motor"}
                    </h5>

                    <div className="mt-4">
                      <ReactSelect
                        options={[
                          {
                            value: "Jakarta",
                            label: "Jakarta",
                          },
                          {
                            value: "Bekasi",
                            label: "Bekasi",
                          },
                          {
                            value: "Bogor",
                            label: "Bogor",
                          },
                          {
                            value: "Tangerang",
                            label: "Tangerang",
                          },
                          {
                            value: "Bandung",
                            label: "Bandung",
                          },
                          {
                            value: "Depok",
                            label: "Depok",
                          },
                          {
                            value: "Cimahi",
                            label: "Cimahi",
                          },
                        ]}
                        placeholder="Pilih Kota"
                      />
                    </div>
                    <div className="mt-4">
                      <ReactSelect
                        options={[
                          {
                            value: "Daihatsu Ayla 2020",
                            label: "Daihatsu Ayla 2020",
                          },
                          {
                            value: "Honda Brio RS 2021",
                            label: "Honda Brio RS 2021",
                          },
                          {
                            value: "Toyota Avanza 2018",
                            label: "Toyota Avanza 2018",
                          },
                          {
                            value: "Daihatsu Sigra 2020",
                            label: "Daihatsu Sigra 2020",
                          },
                          {
                            value: "Mitsubishi Expander Exceed 2020",
                            label: "Mitsubishi Expander Exceed 2020",
                          },
                          {
                            value: "Nissan Grand Livina 1.5 2014",
                            label: "Nissan Grand Livina 1.5 2014",
                          },
                          {
                            value: "Honda Mobilio 2015",
                            label: "Honda Mobilio 2015",
                          },
                        ]}
                        placeholder="Pilih Tipe Kendaraan"
                      />
                    </div>

                    <div className="mt-4">
                      <ReactSelect
                        options={list?.months}
                        placeholder="Pilih Tenor"
                      />
                    </div>

                    <div className="mt-4">
                      <NumericFormat
                        thousandSeparator="."
                        decimalSeparator=","
                        // disabled
                        onValueChange={(value: any) =>
                          setRangeValue(value?.floatValue)
                        }
                        prefix="Rp "
                        decimalScale={0}
                        fixedDecimalScale={true}
                        allowNegative={false}
                        value={rangeValue}
                        className="border border-gray-300 rounded px-2 py-1 w-full"
                        placeholder="Masukkan Nominal Pembiayaan"
                      />
                    </div>

                    <div className="mt-4">
                      <div className="flex justify-between items-center">
                        <p className="text-xs">
                          {toMoney(+ranges[idx]?.[type]?.min)}
                        </p>
                        <p className="text-xs">
                          {toMoney(+ranges[idx]?.[type]?.max)}
                        </p>
                      </div>
                      <input
                        type="range"
                        min={ranges[idx]?.[type]?.min}
                        max={ranges[idx]?.[type]?.max}
                        value={rangeValue}
                        onChange={(e) => {
                          setRangeValue(+e.target.value);
                        }}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                      />
                      {/* Customizing the slider with Tailwind classes */}
                      <style jsx>{`
                        input[type="range"]::-webkit-slider-thumb {
                          height: 1rem;
                          width: 1rem;
                          border-radius: 9999px;
                          background-color: #3b82f6; /* Tailwind 'blue-600' */
                          cursor: pointer;
                          appearance: none;
                        }
                        input[type="range"]::-moz-range-thumb {
                          height: 1rem;
                          width: 1rem;
                          border-radius: 9999px;
                          background-color: #3b82f6; /* Tailwind 'blue-600' */
                          cursor: pointer;
                        }
                      `}</style>
                    </div>

                    <div className="mt-4">
                      <button className="p-2 w-full rounded text-white bg-green-500 hover:bg-green-600 duration-200 transition-all">
                        Cek Sekarang
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* <button className="bg-orange-500 text-white py-2 px-4 rounded mt-2 hover:bg-orange-600 duration-200">
                Cek Simulasi
              </button> */}
            </div>
            <div className="w-1/2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
