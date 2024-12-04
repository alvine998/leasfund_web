import {
  BuildingOffice2Icon,
  PresentationChartBarIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";
import React from "react";

export default function Countdown() {
  return (
    <div className="bg-white py-5 px-5">
      <div className="bg-green-300 shadow rounded w-full p-2 flex lg:flex-row flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center lg:border-r-2 lg:border-l-2 border-r-gray-700 border-l-gray-700 lg:px-10 px-2">
          <UserCircleIcon className="text-blue-700 w-10" />
          <p className="text-black lg:text-lg text-xs font-bold">Mitra Agen</p>
          <p className="text-black lg:text-lg text-xs font-bold">3.675</p>
        </div>
        <div className="flex flex-col justify-center items-center lg:border-r-2 lg:border-l-2 border-r-gray-700 border-l-gray-700 lg:px-10 px-2">
          <BuildingOffice2Icon className="text-blue-700 w-10" />
          <p className="text-black lg:text-lg text-xs font-bold">
            Mitra Leasing
          </p>
          <p className="text-black lg:text-lg text-xs font-bold">15</p>
        </div>
        <div className="flex flex-col justify-center items-center lg:border-r-2 lg:border-l-2 border-r-gray-700 border-l-gray-700 lg:px-10 px-2">
          <PresentationChartBarIcon className="text-blue-700 w-10" />
          <p className="text-black lg:text-lg text-xs font-bold">
            Jumlah Polling
          </p>
          <p className="text-black lg:text-lg text-xs font-bold">55.426</p>
        </div>
      </div>
    </div>
  );
}
