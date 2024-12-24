// Free.js or Free.jsx

import Social2 from './socialicon2';
import { Button } from '@/components/ui/button';

export default function Free() {
  return (
    <div className="main-container w-[1440px] h-[582px] bg-[#fff] relative overflow-hidden mx-auto my-0">
      <div className="flex w-[1050px] pt-[160px] pr-0 pb-[160px] pl-0 flex-col gap-[96px] items-center flex-nowrap relative overflow-hidden mt-0 mr-0 mb-0 ml-[195px]">
        <div className="flex w-[607px] flex-col gap-[36px] items-center shrink-0 flex-nowrap relative z-[1]">
          <div className="flex w-[547px] flex-col gap-[30px] items-center shrink-0 flex-nowrap relative overflow-hidden z-[2]">
            <span className="flex w-[547px] h-[50px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[40px] font-bold leading-[50px] text-[#252b42] tracking-[0.2px] relative text-center whitespace-nowrap z-[3]">
              Start your 14 days free trial
            </span>
            <span className="flex w-[411px] h-[40px] justify-center items-start shrink-0 font-['Montserrat'] text-[14px] font-normal leading-[20px] text-[#727272] tracking-[0.2px] relative text-center overflow-hidden z-[4]">
              Met minim Mollie non desert Alamo est sit cliquey dolor <br />
              do met sent. RELIT official consequent.
            </span>
            <Button className="flex w-[186px] gap-[10px] items-start shrink-0 flex-nowrap border-none relative z-[5] pointer">
              <div className="flex w-[186px] h-[52px] pt-[15px] pr-[40px] pb-[15px] pl-[40px] flex-col gap-[10px] items-center shrink-0 flex-nowrap bg-[#23a6f0] rounded-[5px] relative overflow-hidden z-[6]">
                <span className="flex w-[106px] h-[22px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[22px] text-[#fff] tracking-[0.2px] relative text-center whitespace-nowrap z-[7]">
                  Try it free now
                </span>
              </div>
            </Button>
            {/* Add SocialIcon components here */}
            <Social2 />
          </div>
        </div>
      </div>
    </div>
  );
}
