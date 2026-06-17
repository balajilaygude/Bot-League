import React from "react";
import board from "../assets/board.png";
import vector1 from "../assets/vector.png";
import vector2 from "../assets/vector-1.png";
import vector3 from "../assets/vector-2.png";
import vector4 from "../assets/vector-3.png";

export default function Register() {
  return (
    <div className="px-20 py-15">
      <div>
        <p className="text-red text-[45px] font-orbitron">WHY REGISTER ?</p>
        <h2 className="text-[50px] font-orbitron pb-10">
          THE LEAGUE ADVANTAGE
        </h2>
      </div>
      <div className="w-full flex">
        <div className="w-4/6 flex flex-col gap-7">
          <div className="flex items-start gap-5">
                        <div className="w-17 h-17">
<img src={vector1} />
            </div>
            <div>
              <h3 className="font-roboto text-[35px]">NATIONAL RECOGNITION</h3>
              <p className="text-gray-500 text-[20px]">
                "Benchmark your skills on India's official robotics
                leaderboard."
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5">
                        <div className="w-17 h-17">
<img src={vector2} />
            </div>
            <div>
              <h3 className="font-roboto text-[35px]">FAIR JUDGING</h3>
              <p className="text-gray-500 text-[20px]">
                "Compete with confidence under standardized, expert-led
                evaluation."
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <div className="w-17 h-17">
<img src={vector3} />
            </div>
            
            <div>
              <h3 className="font-roboto text-[35px]">CAREER OPS</h3>
              <p className="text-gray-500 text-[20px]">
                "Bridge the gap between arena victories and top-tier tech
                placements."
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5 ">
                       <div className="w-17 h-17">
<img src={vector4} />
            </div>
            <div>
              <h3 className="font-roboto text-[35px]">HIGH - ENERGY ECO</h3>
              <p className="text-gray-500 text-[20px]">
                "Join a nationwide community of elite innovators and robotics
                athletes."
              </p>
            </div>
          </div>
        </div>
        <img src={board} className="w-2/6" />
      </div>
    </div>
  );
}
