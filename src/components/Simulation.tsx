import { toMoney } from "@/utils/utils";
import React from "react";
import { NumericFormat } from "react-number-format";
import ReactSelect from "react-select";

interface Props {
  setFilter: any;
  type: any;
  setType: any;
  idx: any;
  setIdx: any;
  rangeValue: any;
  setRangeValue: any;
  list: any;
  setList: any;
  ranges: any[];
}

export default function Simulation({
  setFilter,
  idx,
  setIdx,
  list,
  setList,
  rangeValue,
  setRangeValue,
  type,
  setType,
  ranges
}: Props) {
  return (
    <div className="mt-4 w-full">
      <button
        className="border rounded w-full py-2 px-4 text-black shadow"
        type="button"
        onClick={() => {
          setFilter("");
        }}
      >
        Kembali
      </button>
      <div className="flex gap-2 w-full mt-2">
        <button
          className={`${
            type == "car" ? "bg-blue-100" : "hover:bg-blue-100"
          } bg-white border rounded w-full py-2 px-4 duration-200 transition-all shadow text-black`}
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
          } bg-white border rounded w-full py-2 px-4 duration-200 transition-all shadow text-black`}
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
        <h5 className="font-bold text-center text-black">
          Simulasi Kredit {type == "car" ? "Mobil" : "Motor"}
        </h5>

        <div className="mt-4">
          <ReactSelect
            className="text-black"
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
            className="text-black"
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
            className="text-black"
            options={list?.months}
            placeholder="Pilih Tenor"
          />
        </div>

        <div className="mt-4">
          <NumericFormat
            thousandSeparator="."
            decimalSeparator=","
            onValueChange={(value: { floatValue?: number }) =>
              setRangeValue(value?.floatValue ?? 0)
            }
            prefix="Rp "
            decimalScale={0}
            fixedDecimalScale={true}
            allowNegative={false}
            value={rangeValue}
            className="border border-gray-300 rounded px-2 py-1 w-full text-black"
            placeholder="Masukkan Nominal Pembiayaan"
          />
        </div>

        <div className="mt-4">
          <div className="flex justify-between items-center">
            <p className="text-xs text-black">
              {toMoney(+ranges[idx]?.[type]?.min)}
            </p>
            <p className="text-xs text-black">
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
  );
}
