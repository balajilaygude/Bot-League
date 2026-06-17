import React from "react";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";

export default function Journey() {
  return (
    <div className="bg-black w-screen h-screen">
      <div className="flex justify-center items-center flex-col py-15">
        <h3 className="text-red font-roboto font-semibold text-[30px]">
          USER JOURNEY
        </h3>
        <h1 className="text-[45px] font-orbitron">YOUR PATH TO THE LEAGUE</h1>
        <p className="text-gray-500 text-[20px] font-roboto">
          Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </p>
      </div>
      <div className="flex justify-center items-center gap-20 relative">
        <div className="flex justify-center items-center z-10 flex-col">
          <div className="w-48 h-48 bg-[#2D2D2D] flex justify-center items-center rounded-full">
            <div className="p-10 border-6 border-[#1101D4] bg-black rounded-full">
                <img
              src={image1}
              className=""
            />
          </div>
            </div>
          <div className="w-0.5 h-10 bg-gray-300"></div>
          <div className="text-center">
            <p className="text-red font-roboto text-[20px]">STEP 1</p>
            <h2 className="font-roboto text-[25px]">
              BUILD YOUR <br />
              TEAM
            </h2>
          </div>
        </div>
        <div className="flex justify-center items-center z-10 flex-col">
          <div className="w-48 h-48 bg-[#2D2D2D] flex justify-center items-center rounded-full">
            <div className="p-10 border-6 border-[#1101D4] bg-black rounded-full">
                <img
              src={image2}
              className=""
            />
          </div>
            </div>
          <div className="w-0.5 h-10 bg-gray-300"></div>
          <div className="text-center">
            <p className="text-red font-roboto text-[20px]">STEP 2</p>
            <h2 className="font-roboto text-[25px]">
              COMPETE ACROSS <br /> INDIA
            </h2>
          </div>
        </div>
        <div className="flex justify-center items-center z-10 flex-col">
          <div className="w-48 h-48 bg-[#2D2D2D] flex justify-center items-center rounded-full">
            <div className="p-10 border-6 border-[#1101D4] bg-black rounded-full">
                <img
              src={image3}
              className=""
            />
          </div>
            </div>
          <div className="w-0.5 h-10 bg-gray-300"></div>
          <div className="text-center">
            <p className="text-red font-roboto text-[20px]">STEP 3</p>
            <h2 className="font-roboto text-[25px]">
              EARN NATIONAL <br /> RANKING & VALUE
            </h2>
          </div>
        </div>
        <div className="flex justify-center items-center z-10 flex-col">
          <div className="w-48 h-48 bg-[#2D2D2D] flex justify-center items-center rounded-full">
            <div className="p-10 border-6 border-[#1101D4] bg-black rounded-full">
                <img
              src={image4}
              className=""
            />
          </div>
            </div>
          <div className="w-0.5 h-10 bg-gray-300"></div>
          <div className="text-center">
            <p className="text-red font-roboto text-[20px]">STEP 4</p>
            <h2 className="font-roboto text-[25px]">JOIN THE <br />LEAGUE</h2>
          </div>
        </div>
        <div className="w-3/5 h-1.5 top-25 z-0 absolute bg-[#1101D4] "/>
      </div>
    </div>
  );
}
