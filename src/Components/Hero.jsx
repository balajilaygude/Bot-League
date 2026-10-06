import React from "react";

export default function Hero() {
  return (
    <div className="bg-[url('/heroBg.png')] w-full min-h-[calc(100vh-96px)] relative bg-no-repeat bg-contain bg-right">
      <div
        className="w-4/5 h-[calc(100vh-86px)] bg-linear-to-r from-black via-black/50 to-transparent
      flex justify-center items-start flex-col px-25 "
      >
        <div className="flex justify-center items-center gap-5 text-[18px]">
          <button className="font-roboto bg-red px-6 py-3 rounded-sm">
            CREATE ACCOUNT
          </button>
          <button className="font-roboto border border-white px-8 py-3 rounded-sm">
            EXPLORE EVENTS
          </button>
        </div>
      </div>
      <div className="absolute bg-[#1A1919] border border-gray-500 p-2 rounded-sm font-roboto right-40 top-10">
        <p>
          <span className="text-red"> • LIVE </span> : Episode 14 . Bengaluru
          Regionals <span className="text-red">WATCH LIVE</span>
        </p>
      </div>
    </div>
  );
}
