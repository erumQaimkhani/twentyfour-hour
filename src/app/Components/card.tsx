
// export default Card;
import React from "react";
import { Button } from "@/components/ui/button";
import { FaPhone, FaEnvelope, FaMapPin } from "react-icons/fa";

const Card = () => {
  return (
    <div className="main-container w-[1440px] h-[814px] bg-[#fff] relative overflow-hidden mx-auto my-0">
      <div className="flex w-[1050px] pt-[112px] pr-0 pb-[112px] pl-0 flex-col gap-[80px] items-center flex-nowrap relative overflow-hidden mt-0 mr-0 mb-0 ml-[195px]">
        <div className="flex w-[633px] flex-col items-center shrink-0 flex-nowrap relative overflow-hidden z-[1]">
          <div className="flex w-[625px] flex-col gap-[10px] items-center shrink-0 flex-nowrap relative overflow-hidden z-[2]">
            <span className="flex w-[132px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#252b42] tracking-[0.2px] relative text-center whitespace-nowrap z-[3]">
              VISIT OUR OFFICE
            </span>
            <span className="flex w-[531px] h-[100px] justify-center items-start shrink-0 font-['Montserrat'] text-[40px] font-bold leading-[50px] text-[#252b42] tracking-[0.2px] relative text-center overflow-hidden z-[4]">
              We help small businesses <br />
              with big ideas
            </span>
          </div>
        </div>
        <div className="flex w-[985px] items-center shrink-0 flex-nowrap relative z-[5]">
          <div className="flex w-[327px] flex-col items-start shrink-0 flex-nowrap relative z-[6]">
            <div className="flex w-[328px] pt-[50px] pr-[40px] pb-[50px] pl-[40px] flex-col gap-[15px] items-center shrink-0 flex-nowrap bg-[#fff] relative overflow-hidden z-[7]">
              {/* Replace Image with FaPhone Icon */}
              <div className="w-[72px] h-[72px] shrink-0 flex items-center justify-center bg-[#f0f0f0] rounded-full">
                <FaPhone className="text-[#252b42] text-[30px]" />
              </div>
              <div className="w-[216px] h-[48px] shrink-0 text-[0px] relative overflow-hidden z-[9]">
                <span className="flex w-[216px] h-[24px] justify-center items-start font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#252b42] tracking-[0.2px] relative text-center whitespace-nowrap z-10 mt-0 mr-0 mb-0 ml-0">
                  georgia.young@example.com
                </span>
                <span className="flex w-[176px] h-[24px] justify-center items-start font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#252b42] tracking-[0.2px] relative text-center whitespace-nowrap z-[11] mt-0 mr-0 mb-0 ml-[20px]">
                  georgia.young@ple.com
                </span>
              </div>
              <span className="flex w-[100px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[16px] font-bold leading-[24px] text-[#252b42] tracking-[0.1px] relative text-center whitespace-nowrap z-[12]">
                Get Support
              </span>
              <Button className="flex w-[189px] pt-[15px] pr-[36px] pb-[15px] pl-[36px] flex-col gap-[10px] items-center shrink-0 flex-nowrap rounded-[37px] border-solid border border-[#23a6f0] relative overflow-hidden z-[13] pointer">
                <span className="flex w-[117px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#23a6f0] tracking-[0.2px] relative text-center whitespace-nowrap z-[14]">
                  Submit Request
                </span>
              </Button>
            </div>
          </div>

          <div className="flex w-[329px] flex-col items-start shrink-0 flex-nowrap relative z-[15]">
            <div className="flex w-[328px] pt-[80px] pr-[40px] pb-[80px] pl-[40px] flex-col gap-[15px] items-center shrink-0 flex-nowrap bg-[#252b42] relative overflow-hidden z-[16]">
              {/* Replace Image with FaEnvelope Icon */}
              <div className="w-[72px] h-[72px] shrink-0 flex items-center justify-center bg-[#f0f0f0] rounded-full">
                <FaMapPin className="text-[#fff] text-[30px]" />
              </div>
              <div className="w-[216px] h-[48px] shrink-0 text-[0px] relative overflow-hidden z-[18]">
                <span className="flex w-[216px] h-[24px] justify-center items-start font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#fff] tracking-[0.2px] relative text-center whitespace-nowrap z-[19] mt-0 mr-0 mb-0 ml-0">
                  georgia.young@example.com
                </span>
                <span className="flex w-[176px] h-[24px] justify-center items-start font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#fff] tracking-[0.2px] relative text-center whitespace-nowrap z-[20] mt-0 mr-0 mb-0 ml-[20px]">
                  georgia.young@ple.com
                </span>
              </div>
              <span className="flex w-[100px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[16px] font-bold leading-[24px] text-[#fff] tracking-[0.1px] relative text-center whitespace-nowrap z-[21]">
                Get Support
              </span>
              <Button className="flex w-[189px] pt-[15px] pr-[36px] pb-[15px] pl-[36px] flex-col gap-[10px] items-center shrink-0 flex-nowrap rounded-[37px] border-solid border border-[#23a6f0] relative overflow-hidden z-[22] pointer">
                <span className="flex w-[117px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#23a6f0] tracking-[0.2px] relative text-center whitespace-nowrap z-[23]">
                  Submit Request
                </span>
              </Button>
            </div>
          </div>

          <div className="flex w-[329px] flex-col items-start shrink-0 flex-nowrap relative z-[24]">
            <div className="flex w-[328px] pt-[50px] pr-[40px] pb-[50px] pl-[40px] flex-col gap-[15px] items-center shrink-0 flex-nowrap bg-[#fff] relative overflow-hidden z-[25]">
              {/* Replace Image with FaMapPin Icon */}
              <div className="w-[72px] h-[72px] shrink-0 flex items-center justify-center bg-[#f0f0f0] rounded-full">
                <FaEnvelope className="text-[#252b42] text-[30px]" />
              </div>
              <div className="w-[216px] h-[48px] shrink-0 text-[0px] relative overflow-hidden z-[27]">
                <span className="flex w-[216px] h-[24px] justify-center items-start font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#252b42] tracking-[0.2px] relative text-center whitespace-nowrap z-[28] mt-0 mr-0 mb-0 ml-0">
                  georgia.young@example.com
                </span>
                <span className="flex w-[176px] h-[24px] justify-center items-start font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#252b42] tracking-[0.2px] relative text-center whitespace-nowrap z-[29] mt-0 mr-0 mb-0 ml-[20px]">
                  georgia.young@ple.com
                </span>
              </div>
              <span className="flex w-[100px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[16px] font-bold leading-[24px] text-[#252b42] tracking-[0.1px] relative text-center whitespace-nowrap z-[30]">
                Get Support
              </span>
              <Button className="flex w-[189px] pt-[15px] pr-[36px] pb-[15px] pl-[36px] flex-col gap-[10px] items-center shrink-0 flex-nowrap rounded-[37px] border-solid border border-[#23a6f0] relative overflow-hidden z-[31] pointer">
                <span className="flex w-[117px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#23a6f0] tracking-[0.2px] relative text-center whitespace-nowrap z-[32]">
                  Submit Request
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
