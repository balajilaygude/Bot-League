import React from 'react'
import sport1 from "../assets/sport1.png";
import sport2 from "../assets/sport2.png";
import sport3 from "../assets/sport3.png";
import sport4 from "../assets/sport4.png";
import sport5 from "../assets/sport5.png";
import sport6 from "../assets/sport6.png";
import sportBg from "../assets/sportsBg.png";


export default function Sports() {
  return (
    <div className='bg-black px-10 py-15 w-screen min-h-screen relative'>
        <p className='text-[30px] text-red font-orbitron pl-15'>SPORTS</p>
        <h2 className='text-[50px] font-orbitron pl-15'>COMPETITION DISCIPLINES</h2>
        <div className='py-5 flex justify-center items-center gap-15'>
            <div className='w-72 h-80 bg-[#1A1919] rounded-2xl border'>
                <img src={sport1}  />
                <h2 className='font-roboto text-[35px] text-center'>Robo Race</h2>
            </div>
            <div className='w-72 h-80 bg-[#1A1919] rounded-2xl border'>
                <img src={sport2}  />
                <h2 className='font-roboto text-[35px] text-center'>Line Follower</h2>
            </div>
            <div className='w-72 h-80 bg-[#1A1919] rounded-2xl border'>
                <img src={sport3}  />
                <h2 className='font-roboto text-[35px] text-center'>RC Racing</h2>
            </div>
            <div className='w-72 h-80 bg-[#1A1919] rounded-2xl border'>
                <img src={sport4}  />
                <h2 className='font-roboto text-[30px] text-center'>FPV Drone Racing & Aeromodelling</h2>
            </div>             
        </div>
        <div className='py-5 flex gap-15 pl-15'>
            <div className='w-72 h-80 bg-[#1A1919] rounded-2xl border'>
                <img src={sport5}  />
                <h2 className='font-roboto text-[35px] text-center'>Robo Hockey</h2>
            </div>
            <div className='w-72 h-80 bg-[#1A1919] rounded-2xl border'>
                <img src={sport6}  />
                <h2 className='font-roboto text-[30px] text-center'>Robo War</h2>
            </div>   
        </div>
        <img src={sportBg} className='absolute right-45 bottom-20' />
      
    </div>
  )
}
