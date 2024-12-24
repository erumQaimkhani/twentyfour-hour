
import React from "react";
import Image from "next/image";

export default function Neural() {
  return (
    <div className="main-container w-[1440px] h-[682px] bg-[#fff] relative overflow-hidden mx-auto my-0">
      <div className="flex w-[1439px] gap-[30px] justify-end items-center flex-nowrap relative overflow-hidden mt-0 mr-0 mb-0 ml-0">
        <div className="w-[704px] h-[682px] shrink-0 relative z-[1]">
          <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden z-[2]">
            <div className="w-[632px] h-[491.994px] relative z-[3] mt-[117px] mr-0 mb-0 ml-[36px]">
              <div className="w-[725px] h-[774px] relative z-[4] mt-[-211px] mr-0 mb-0 ml-[-137px]">
                {/* Use next/image for the image */}
                <Image
                  src="/images/neural.png" // Ensure this is in the public directory
                  alt="Product Image"
                  width={725} // Set width to match the original size or adjust as needed
                  height={774} // Set height to match the original size or adjust as needed
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[573px] flex-col gap-[30px] justify-center items-start shrink-0 flex-nowrap relative overflow-hidden z-[5]">
          <span className="h-[24px] shrink-0 basis-auto font-['Montserrat'] text-[16px] font-bold leading-[24px] text-[#bdbdbd] tracking-[0.1px] relative text-left whitespace-nowrap z-[6]">
            SUMMER 2020
          </span>
          <span className="flex w-[375px] h-[100px] justify-start items-start shrink-0 font-['Montserrat'] text-[40px] font-bold leading-[50px] text-[#252b42] tracking-[0.2px] relative text-left overflow-hidden z-[7]">
            Part of the Neural <br />
            Universe
          </span>
          <span className="flex w-[376px] h-[60px] justify-start items-start shrink-0 font-['Montserrat'] text-[20px] font-normal leading-[30px] text-[#727272] tracking-[0.2px] relative text-left overflow-hidden z-[8]">
            We know how large objects will act, <br />
            but things on a small scale.
          </span>
          <div className="flex w-[339px] gap-[10px] items-start shrink-0 flex-nowrap relative z-[9]">
            {/* Button 1 - BUY NOW with shadow */}
            <button className="flex w-[156px] pt-[15px] pr-[40px] pb-[15px] pl-[40px] flex-col gap-[10px] items-center shrink-0 flex-nowrap bg-[#2cc070] rounded-[5px] border-none relative overflow-hidden z-10 pointer shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl">
              <span className="flex w-[76px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[22px] text-[#fff] tracking-[0.2px] relative text-center whitespace-nowrap z-[11]">
                BUY NOW
              </span>
            </button>

            {/* Button 2 - READ MORE with shadow */}
            <button className="flex w-[173px] pt-[15px] pr-[40px] pb-[15px] pl-[40px] flex-col gap-[10px] items-center shrink-0 flex-nowrap rounded-[5px] border-solid border border-[#2cc070] relative overflow-hidden z-[12] pointer shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl">
              <span className="flex w-[93px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[22px] text-[#2cc070] tracking-[0.2px] relative text-center whitespace-nowrap z-[13]">
                READ MORE
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
