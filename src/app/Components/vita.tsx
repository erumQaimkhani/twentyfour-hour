import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Vita() {
  return (
    <div className="main-container w-[1440px] h-[709px] relative overflow-hidden mx-auto my-0">
      <div className="flex w-[1036px] h-[711px] pt-[112px] pr-0 pb-[112px] pl-0 flex-col gap-[80px] items-start flex-nowrap relative overflow-hidden z-[1] mt-0 mr-0 mb-0 ml-[209px]">
        <div className="flex w-[1049px] h-[599px] gap-[30px] items-start shrink-0 flex-nowrap relative overflow-hidden z-[2]">
          <div className="flex w-[509px] pt-[60px] pr-0 pb-0 pl-0 flex-col gap-[30px] items-start shrink-0 flex-nowrap relative overflow-hidden z-[3]">
            <span className="h-[30px] shrink-0 basis-auto font-['Montserrat'] text-[20px] font-normal leading-[30px] text-[#fff] tracking-[0.2px] relative text-left whitespace-nowrap z-[4]">
              SUMMER 2020
            </span>
            <span className="flex w-[509px] h-[160px] justify-start items-start shrink-0 font-['Montserrat'] text-[58px] font-bold leading-[80px] text-[#fff] tracking-[0.2px] relative text-left z-[5]">
              Vita Classic Product
            </span>
            <span className="flex w-[341px] h-[40px] justify-start items-start shrink-0 font-['Montserrat'] text-[14px] font-normal leading-[20px] text-[#fff] tracking-[0.2px] relative text-left z-[6]">
              We know how large objects will act, We know how our objects will
              act, We know
            </span>
            <div className="flex w-[295px] gap-[34px] items-center shrink-0 flex-nowrap relative z-[7]">
              <span className="flex w-[77px] h-[32px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[24px] font-bold leading-[32px] text-[#fff] tracking-[0.1px] relative text-center whitespace-nowrap z-[8]">
                $16.48
              </span>
              <Button className="flex w-[184px] pt-[15px] pr-[40px] pb-[15px] pl-[40px] flex-col gap-[10px] items-center shrink-0 flex-nowrap bg-[#2cc070] rounded-[5px] border-none relative overflow-hidden z-[9] pointer">
                <span className="flex w-[104px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[22px] text-[#fff] tracking-[0.2px] relative text-center whitespace-nowrap z-10">
                  ADD TO CART
                </span>
              </Button>
              
            </div>
          </div>
          <div className="flex w-[510px] flex-col items-center shrink-0 flex-nowrap relative overflow-hidden z-[11]">
            <div className="w-[443px] h-[685px] shrink-0 relative z-[12]">
              <Image
                src="/images/vita.png" // Adjust the path as needed for your project
                alt="Product Image"
                width={443}
                height={685}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1440px] h-[711px] bg-[#23856d] absolute top-0 left-1/2 translate-x-[-50%] translate-y-0 overflow-hidden" />
    </div>
  );
}
