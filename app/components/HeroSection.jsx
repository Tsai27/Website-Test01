import React from 'react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-12"> 
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    Hello,
                     CAAS!
                </h1>
                <p className="text-[#ADB7BE] text-lg lg:text-xl">  
                    This is a group introduction page!
                </p>
                <div>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black">About Us</button>     {/* 鼠标悬停变为浅灰色slate-200*/}
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">Contact Us</button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className=" w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] relative">  
                    <Image
                        src = "/images/hero1.png"
                        alt = "hero image"
                        
                        width={300}
                        height = {300}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}
export default HeroSection;

