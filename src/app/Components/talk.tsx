
import React from "react";
import { FaArrowCircleDown } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Talk: React.FC = () => {
  return (
    <div className="main-container w-full max-w-[1440px] h-[348px] bg-[#fff] relative overflow-hidden mx-auto my-0 px-4 sm:px-8 lg:px-16">
      <FaArrowCircleDown className="w-[24px] h-[24px] text-[#23a6f0] absolute top-[20px] left-1/2 transform -translate-x-1/2 z-[10] sm:w-[30px] sm:h-[30px]" />

      <div className="flex flex-col items-center justify-center w-full h-full gap-16 sm:gap-24 lg:gap-32 absolute top-0 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-8 sm:gap-12 md:w-[607px] z-[1]">
          <div className="flex flex-col items-center gap-4 sm:gap-6 w-[272px] sm:w-[350px] md:w-[400px] z-[2]">
            <span className="font-montserrat text-center text-[16px] font-bold leading-[24px] text-[#252b42] tracking-[0.1px]">
              WE CAN&apos;T WAIT TO MEET YOU
            </span>
            <span className="font-montserrat text-center text-[32px] sm:text-[48px] lg:text-[58px] font-bold leading-[40px] sm:leading-[60px] lg:leading-[80px] text-[#252b42] tracking-[0.2px]">
              Let’s Talk
            </span>
            <Button className="flex justify-center items-center w-[186px] sm:w-[200px] gap-[10px] bg-[#23a6f0] text-white py-[15px] px-[40px] rounded-[5px] transition duration-300 hover:bg-[#1d94c8]">
              <span className="font-montserrat text-[14px] font-bold leading-[22px] tracking-[0.2px]">
                Try it free now
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Talk;
