import React from "react";

export default function Hero() {
  return (
    <div className="bg-[url('/heroBg.png')] w-full min-h-[calc(100vh-96px)] relative bg-no-repeat bg-contain bg-right">

      <div className="absolute bg-[#1A1919] border border-gray-500 p-2 rounded-sm font-roboto right-40 top-10">
        <p>
          <span className="text-red"> • LIVE </span> : Episode 14 . Bengaluru
          Regionals <span className="text-red">WATCH LIVE</span>
        </p>
      </div>
    </div>
  );
}
