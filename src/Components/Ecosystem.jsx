import React from "react";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";
import s4 from "../assets/s4.png";
import s5 from "../assets/s5.png";
import s6 from "../assets/s6.png";
import fb from "../assets/fbop.png";
import yt from "../assets/yt.png";
import ig from "../assets/ig.png";
import tw from "../assets/tw.png";

export default function Ecosystem() {
  return (
    <div className="bg-black py-10 px-15">
      <h1 className="font-orbitron text-[60px]">JOIN THE ECOSYSTEM</h1>
      <div className="w-full py-10 flex justify-center items-center gap-20">
        <div className="w-96 h-112 flex flex-col items-center border border-gray-500 text-center py-10 px-5 rounded-lg gap-5 bg-[#111111]">
          <h2 className="font-orbitron text-[30px]">BECOME IN JUDGE</h2>
          <input
            type="text"
            placeholder="Name"
            className="border w-5/6 border-gray-500 p-4 rounded-lg bg-[#1A1919]"
          />
          <input
            type="text"
            placeholder="Location"
            className="border w-5/6 border-gray-500 p-4 rounded-lg bg-[#1A1919]"
          />
          <input
            type="text"
            placeholder="Enroll"
            className="border w-5/6 border-gray-500 p-4 rounded-lg bg-[#1A1919]"
          />
          <button className="font-roboto text-[25px] w-80 bg-red p-2 mt-2 rounded-sm">
            Submit
          </button>
        </div>
        <div className="w-96 h-112 flex flex-col items-center border border-gray-500 text-center py-10 px-5 rounded-lg gap-5 bg-[#111111]">
          <h2 className="font-orbitron text-[30px]">VOLUNTEER</h2>
          <input
            type="text"
            placeholder="Name"
            className="border w-5/6 border-gray-500 p-4 rounded-lg bg-[#1A1919]"
          />
          <input
            type="text"
            placeholder="Location"
            className="border w-5/6 border-gray-500 p-4 rounded-lg bg-[#1A1919]"
          />
          <input
            type="text"
            placeholder="Enroll"
            className="border w-5/6 border-gray-500 p-4 rounded-lg bg-[#1A1919]"
          />
          <button className="font-roboto text-[25px] w-80 bg-red p-2 mt-2 rounded-sm">
            Submit
          </button>
        </div>
        <div className="w-96 h-112 flex flex-col items-center border border-gray-500 text-center py-10 px-5 rounded-lg gap-5 bg-[#111111]">
          <h2 className="font-orbitron text-[25px]">COMMUNITY MEMBER</h2>
          <input
            type="text"
            placeholder="Name"
            className="border w-5/6 border-gray-500 p-4 rounded-lg bg-[#1A1919]"
          />
          <input
            type="text"
            placeholder="Location"
            className="border w-5/6 border-gray-500 p-4 rounded-lg bg-[#1A1919]"
          />
          <input
            type="text"
            placeholder="Enroll"
            className="border w-5/6 border-gray-500 p-4 rounded-lg bg-[#1A1919]"
          />
          <button className="font-roboto text-[25px] w-80 bg-red p-2 mt-2 rounded-sm">
            Submit
          </button>
        </div>
      </div>
      <h1 className="font-orbitron text-[35px] pt-10">SPONSORS</h1>
      <div className="w-full py-10 flex justify-center items-center gap-20">
        <div className=" w-4/6 flex justify-center items-center gap-5">
          <img src={s1} />
          <h2 className="font-roboto text-[25px]">NIT DELHI</h2>
        </div>
        <div className=" w-4/6 flex justify-center items-center gap-5">
          <img src={s2} />
          <h2 className="font-roboto text-[25px]">INDIAN BIT</h2>
        </div>
        <div className=" w-4/6 flex justify-center items-center gap-5">
          <img src={s3} />
          <h2 className="font-roboto text-[25px]">NIT SILCHAR</h2>
        </div>
      </div>
      <div className="w-full py-10 flex justify-center items-center gap-20">
        <div className=" w-4/6 flex justify-center items-center gap-5">
          <img src={s4} />
          <h2 className="font-roboto text-[25px]">ROBO COMPANY</h2>
        </div>
        <div className=" w-4/6 flex justify-center items-center gap-5">
          <img src={s5} />
          <h2 className="font-roboto text-[25px]">IIT BOMBAY</h2>
        </div>
        <div className=" w-4/6 flex justify-center items-center gap-5">
          <img src={s6} />
          <h2 className="font-roboto text-[25px]">ROBO COMPANY</h2>
        </div>
      </div>
      <div className="w-full h-0.5 bg-white"></div>
      <div className="py-10 flex justify-between">
        <div className="flex px-10 flex-col gap-10">
            <h3 className="text-[30px] font-semibold">QUICK LINKS</h3>
            <div className="flex font-roboto text-[18px] gap-30">
                <div className="flex flex-col gap-2">
                    <p>The Arena </p>
                    <p>Episodes </p>
                    <p>National Rankings</p>
                    <p>Programs </p>
                    <p>Rulebooks </p>
                </div>
                <div className="flex flex-col gap-2">
                    <p>Join the Team</p>
                    <p>Sponsorships</p>
                    <p>Help Center </p>
                    <p>Contact Us</p>
                    <p>Legal</p>
                </div>
            </div>
        </div>
        <div className="pr-50 flex flex-col gap-5">
            <h3 className="text-[30px] font-semibold pr-20">SOCIAL MEDIA</h3>
            <div className="flex  gap-10">
                <img src={yt}  className="w-16 h-16"/>
                <img src={ig}  className="w-12 h-12"/>
                <img src={fb}  className="w-12 h-12"/>
                <img src={tw}  className="w-12 h-12"/>
            </div>
        </div>
      </div>
      
    </div>
  );
}
