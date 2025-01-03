import dynamic from "next/dynamic";
import React, { useState } from "react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function Charts() {
  const [option, setOption] = useState({
    options: {
      chart: {
        id: "apexchart-example",
      },
      colors: ["#4ADE80", "#F87171"], // Example colors for series
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
      dataLabels: {
        enabled: true,
        style: {
          colors: ["#808080"], // Apply text color to data labels
        },
      },
      tooltip: {
        style: {
          fontSize: "14px",
          colors: "#EAB308", // Tooltip text color
        },
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
  });
  return (
    <div>
      <Chart
        options={option?.options}
        series={option?.series}
        type="bar"
        width={500}
        height={320}
      />
    </div>
  );
}
