
import React from "react";
 
import OurTeam from "./ourteam";   
import Link from "next/link";

const Innovation: React.FC = () => {
  return (
    <section className="bg-white relative w-full">

      <div className="absolute inset-0 bg-white/50 z-10" />


    

      {/* Content Container */}
      <div className="container mx-auto px-6 py-8 relative z-20">
        {/* Header Section */}
        <div className="text-center">
          <span className="block text-sm font-bold text-[#727272] tracking-wide">
            WHAT WE DO
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-[#252b42] leading-tight">
            Innovation tailored for you
          </h1>
        </div>

        {/* Breadcrumbs */}
        <div className="flex justify-center items-center mt-6 space-x-2 text-sm font-semibold text-[#727272]">
          <Link href="#home" className="text-[#252b42] hover:underline">
            Home
          </Link>
          <div
            className="w-4 h-4 bg-center bg-no-repeat bg-contain"
            style={{ backgroundImage: "url('/images/arrow-right.png')" }}
          />
          <span>Team</span>
        </div>
      </div>

      {/* Main Image Section */}
      {/* <div className="w-full h-[530px] bg-white relative overflow-hidden mx-auto">
        <div className="h-[530px] absolute top-0 left-0 right-0 overflow-hidden"> */}
        <div className="w-full h-[530px] bg-white relative overflow-hidden mx-auto flex justify-center items-center">
        <div className="relative w-[1440px] h-[530px] flex flex-wrap justify-center items-center gap-4">
          {/* First Image */}
          <div className="w-full h-[530px] absolute top-0 left-0 z-1">
            {/* First Image */}
            <div
              className="w-[700px] h-[530px] bg-cover bg-no-repeat absolute top-0 left-0 z-[2]"
              style={{
                backgroundImage: "url(/images/red.png)",
              }}
            />
            {/* Second Image */}
            <div
              className="w-[361px] h-[260px] bg-cover bg-no-repeat absolute top-0 left-[709px] z-[3]"
              style={{
                backgroundImage: "url(/images/coat.png)",
              }}
            />
            {/* Third Image */}
            <div
              className="w-[361px] h-[260px] bg-cover bg-no-repeat absolute top-0 left-[1079px] z-[5]"
              style={{
                backgroundImage: "url(/images/blue.png)",
              }}
            />
            {/* Fourth Image */}
            <div
              className="w-[361px] h-[260px] bg-cover bg-no-repeat absolute top-[270px] left-[709px] z-[4]"
              style={{
                backgroundImage: "url(/images/whiteblack.png)",
              }}
            />
            {/* Fifth Image */}
            <div
              className="w-[361px] h-[260px] bg-cover bg-no-repeat absolute top-[270px] left-[1079px] z-[6]"
              style={{
                backgroundImage: "url(/images/golden.png)",
              }}
            />
          </div>
        </div>
      </div>

      
      <OurTeam />
    </section>
  );
};

export default Innovation;
