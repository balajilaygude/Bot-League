import React from "react";

export default function Competition() {
  return (
    <div className="min-w-screen h-screen flex flex-col px-12 py-10 relative">
      <h1 className="text-[50px] font-orbitron font-semibold py-5 pl-15">
        COMPETITIONS & EVENTS
      </h1>
      <div className="flex w-full justify-evenly pt-2">
        <div className="w-2/5 pl-5">
          <h2 className="text-[30px] font-orbitron text-red pb-2 pl-4   ">
            LIVE NOW
          </h2>
          <div className="bg-[#1E1E1E] border border-gray-500 w-120 h-120 rounded-lg">
            <div className="px-8 py-4 font-roboto">
              <div className="flex  justify-between items-center">
                <h3 className="text-[30px] font-roboto">Bengaluru Regionals</h3>
                <p className="bg-red px-1 rounded-sm">Ongoing</p>
              </div>
              <p className="text-[20px] font-roboto text-gray-500 pb-5 border-b border-b-white">
                Lorem Ipsum
              </p>
            </div>
            <div className="relative">

            <div className="w-28 h-10 absolute bg-gray-500 rounded-sm left-10 top-5"></div>
            <div className="w-28 h-10 absolute bg-gray-500 rounded-sm left-10 top-25"></div>
            <div className="w-28 h-10 absolute bg-gray-500 rounded-sm left-10 top-45"></div>
            <div className="w-28 h-10 absolute bg-gray-500 rounded-sm left-10 top-65"></div>

            <div className="w-28 h-10 absolute bg-gray-500 rounded-sm left-45 top-15"></div>
            <div className="w-28 h-10 absolute bg-gray-500 rounded-sm left-45 top-55"></div>

            <div className="w-28 h-10 absolute bg-gray-500 rounded-sm left-80 top-35"></div>


            <div className="absolute w-4 h-0.5 bg-red left-38 top-10"></div>
            <div className="absolute w-4 h-0.5 bg-red left-38 top-30"></div>
            <div className="absolute w-4 h-0.5 bg-red left-38 top-50"></div>
            <div className="absolute w-4 h-0.5 bg-red left-38 top-70"></div>

            <div className="absolute w-4 h-0.5 bg-red left-73 top-20"></div>
            <div className="absolute w-4 h-0.5 bg-red left-73 top-60"></div>

            <div className="absolute w-0.5 h-21 bg-red left-42 top-10"></div>
            <div className="absolute w-0.5 h-21 bg-red left-42 top-50"></div>
            <div className="absolute w-0.5 h-41 bg-red left-77 top-20"></div>

            <div className="absolute w-4 h-0.5 bg-red left-42 top-20"></div>
            <div className="absolute w-4 h-0.5 bg-red left-42 top-60"></div>

            <div className="absolute w-4 h-0.5 bg-red left-77 top-40"></div>

            <div></div>
            <div></div>

            </div>


          </div>
        </div>
        <div className="w-3/5 flex gap-10">
          <div>
            <h2 className="text-[30px] font-orbitron text-white pb-2 pl-4   ">
              UPCOMING
            </h2>
            <div className="bg-[#1E1E1E] border px-8  py-5 font-roboto border-gray-500 w-100 h-57 rounded-lg">
              <h3 className="text-[30px]">Event in Mumbai</h3>
              <div className="flex gap-2 text-[20px] py-4 ">
                <p>Date 11/11/25</p>
                <p>Location BKC</p>
                <p>Category Lorem</p>
              </div>
              <button className="font-roboto text-[25px] w-75 flex justify-center text-center bg-red px-2 ml-4 py-1 rounded-sm">
                REGISTER
              </button>
            </div>
            <div className="bg-[#1E1E1E] border px-8 mt-6 py-5 font-roboto border-gray-500 w-100 h-57 rounded-lg">
              <h3 className="text-[30px]">Event in Delhi</h3>
              <div className="flex gap-2 text-[20px] py-4 ">
                <p>Date 11/11/25</p>
                <p>Location BKC</p>
                <p>Category Lorem</p>
              </div>
              <button className="font-roboto text-[25px] w-75 flex justify-center text-center bg-red px-2 ml-4 py-1 rounded-sm">
                REGISTER
              </button>
            </div>
          </div>
          <div>
            <h2 className="text-[30px] font-orbitron text-white pb-2 pl-4">
              PAST RESULTS
            </h2>
            <div className="bg-[#1E1E1E] border border-gray-500 w-100 h-120 rounded-lg">
              <div className="px-8 pt-4 pb-2">
                <h3 className="text-[30px] font-roboto">Bengaluru Regionals</h3>
                <p className="text-[20px] font-roboto text-gray-500">
                  Lorem Ipsum
                </p>
              </div>
              <div className="px-8 py-2 ">
                <h3 className="text-[30px] font-roboto  pt-1 border-t border-t-white">
                  Bengaluru Regionals
                </h3>
                <p className="text-[20px] font-roboto text-gray-500">
                  Lorem Ipsum
                </p>
              </div>
              <div className="px-8 py-2 ">
                <h3 className="text-[30px] font-roboto pt-1 border-t border-t-white ">
                  Bengaluru Regionals
                </h3>
                <p className="text-[20px] font-roboto text-gray-500">
                  Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-120 h-120 absolute right-0 bg-amber-800 rounded-full -z-10 opacity-70 blur-3xl" />
      <div className="w-120 h-120 absolute -left-30 bottom-0 bg-amber-800 rounded-full -z-10 opacity-70 blur-3xl" />
    </div>
  );
}
