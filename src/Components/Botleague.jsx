import React from "react";
import botleague from "../assets/botleague.png";
import b1 from "../assets/b1.png";
import b2 from "../assets/b2.png";
import b3 from "../assets/b3.png";
import b4 from "../assets/b4.png";
import arrow from "../assets/arrow.png";

export default function Botleague() {
  return (
    <>
      <div className="pt-15 px-15 ">
        <h2 className="font-orbitron font-bold text-[50px] pl-5">
          WHAT IS BOTLEAGUE?
        </h2>
        <div className="flex justify-center items-center pt-8 w-full">
          <div className="w-[40%] font-roboto flex flex-col py-5 gap-10">
            <div>
              <h1 className="text-[40px] ">
                <span className="text-red">1.</span> STRUCTURED EVENTS
              </h1>
              <p className="text-gray-500 text-[25px] px-3">
                "From one-off events to a year-round competitive season."
              </p>
            </div>
            <div>
              <h1 className="text-[40px] ">
                <span className="text-red">3.</span> NATIONAL RANKING
              </h1>
              <p className="text-gray-500 text-[25px] px-3">
                "Benchmark your skills against the best engineers in India."
              </p>
            </div>
          </div>
          <div className="w-[35%] font-roboto flex flex-col py-5 gap-10">
            <div>
              <h1 className="text-[40px] ">
                <span className="text-red">2.</span> DIGITAL IDENTITY
              </h1>
              <p className="text-gray-500 text-[25px] px-5">
                "Your professional robotics legacy, tracked and verified."
              </p>
            </div>
            <div>
              <h1 className="text-[40px] ">
                <span className="text-red">3.</span> CAREER PATHWAY
              </h1>
              <p className="text-gray-500 text-[25px] px-5">
                "Turning arena victories into real-world industry
                opportunities."
              </p>
            </div>
          </div>
          <img src={botleague} className="w-[25%]" />
        </div>
      </div>

      <div className="py-15 px-15 ">
        <h2 className="font-orbitron font-bold text-[50px] pl-5">CATEGORIES</h2>
        <div className="py-15 flex justify-center items-center gap-10">
          <div className="w-72 h-80 flex flex-col px-5 py-5 gap-8 bg-[#3f412c] border border-amber-300 rounded-xl">
            <img src={b1} className="w-24 h-24" />
            <div>
              <h2 className="font-orbitron text-[32px] font-semibold leading-tight">
                MINI <br /> MAKERS
              </h2>
              <p className="font-roboto text-[18px] ">
                Where Creativity Meets Logic.
              </p>
            </div>
            <div className="flex justify-center items-center gap-3">
              <p className="text-red text-center text-[20px]">Learn More</p>
              <img src={arrow} />
            </div>
          </div>
          <div className="w-72 h-80 flex flex-col px-5 py-5 gap-4 bg-[#332e2e] border border-gray-500 rounded-xl">
            <img src={b2} className="w-24 h-24" />
            <div>
              <h2 className="font-orbitron text-[32px] font-semibold leading-tight">
                JUNIOR INNOVATORS
              </h2>
              <p className="font-roboto text-[18px] ">
                Engineering & Strategy Fundamentals.
              </p>
            </div>
            <div className="flex justify-center items-center gap-3">
              <p className="text-red text-center text-[20px]">Learn More</p>
              <img src={arrow} />
            </div>
          </div>
          <div className="w-72 h-80 flex flex-col px-5 py-5 gap-4 bg-[#332e2e] border border-gray-500 rounded-xl">
            <img src={b3} className="w-24 h-24" />
            <div>
              <h2 className="font-orbitron text-[32px] font-semibold leading-tight">
                YOUNG ENGINEERS
              </h2>
              <p className="font-roboto text-[18px] ">
                Advanced Wireless & Autonomous Control.
              </p>
            </div>
            <div className="flex justify-center items-center gap-3">
              <p className="text-red text-center text-[20px]">Learn More</p>
              <img src={arrow} />
            </div>
          </div>
          <div className="w-72 h-80 flex flex-col px-5 py-5 gap-4 bg-[#332e2e] border border-gray-500 rounded-xl">
            <img src={b4} className="w-24 h-24" />
            <div>
              <h2 className="font-orbitron text-[32px] font-semibold leading-tight">
                ROBO <br />MINDS
              </h2>
              <p className="font-roboto text-[18px] ">
                Elite Professional Sports & Robotics.
              </p>
            </div>
            <div className="flex justify-center items-center gap-3">
              <p className="text-red text-center text-[20px]">Learn More</p>
              <img src={arrow} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
