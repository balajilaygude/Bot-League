import React from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="flex justify-between px-5 h-20">
      <div className="font-orbitron gap-15 flex items-center justify-between text-[20px] ">
        <img src={logo} alt="logo" />
        <div className="flex justify-center items-center h-full gap-15 ">
          <div className="relative flex justify-center items-center h-full">
            <p className="">Events</p>
            <div className="absolute w-full h-1 bottom-0 bg-red"></div>
          </div>
          <p>Programs</p>
          <p>Community</p>
          <p>Ranks</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-5 text-[18px]">
        <button className="font-roboto border border-white px-6 py-1.5 rounded-lg">
          LOGIN
        </button>
        <button className="font-roboto bg-red px-4 py-1.5 rounded-lg">
          REGISTER NOW
        </button>
      </div>
    </div>
  );
}
