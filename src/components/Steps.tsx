import React from "react";

interface Props {
  data: any[];
}

export default function Steps({ data }: Props) {
  return (
    <div>
      {data?.map((v: any, i: number) => (
        <div className="flex lg:flex-row gap-4 lg:px-20 mt-4 items-center justify-center" key={i}>
          {v?.children?.map((val: any, idx: number) => (
            <div
              key={idx}
              className="bg-white rounded lg:h-[120px] shadow lg:py-6 lg:px-6 w-full flex lg:flex-row gap-5 items-start justify-start"
            >
              {val?.icon}
              <div>
                <h5 className="font-semibold text-lg text-black">{val?.title}</h5>
                <p className="text-black">{val?.description}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
