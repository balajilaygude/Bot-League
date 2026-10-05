import React from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="flex justify-between px-5 h-20">
      <div className="font-orbitron gap-15 flex items-center justify-between text-[20px] ">
        <img src={logo} alt="logo" />
        <div className="flex justify-center items-center h-full gap-15 ">
          <div className="relative flex justify-center items-center h-full">

          </div>
        </div>
      </div>

    </div>
  );
}
