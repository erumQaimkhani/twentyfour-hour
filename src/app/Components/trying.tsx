import Number from "./number";
import OurTeam from "./ourteam";
export default function Trying() {
    return (
      <div className="main-container w-[1440px] h-[236px] bg-[#fff] relative overflow-hidden mx-auto my-0">
        <div className="flex w-full h-full pt-[24px] pb-[24px] flex-col items-center absolute top-0 left-1/2 transform -translate-x-1/2">
          <div className="flex w-[1018px] gap-[60px] justify-center items-center relative">
            <div className="flex w-[394px] pt-[24px] pb-[24px] flex-col gap-[80px] items-start relative">
              <div className="flex w-[394px] flex-col gap-[24px] items-start">
                <span className="text-[14px] font-normal text-[#e64040] tracking-[0.2px]">
                  Problems trying
                </span>
                <span className="w-[394px] h-[96px] text-[24px] font-bold text-[#252b42] tracking-[0.1px]">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                </span>
              </div>
            </div>
            <div className="flex w-[529px] flex-col gap-[49px] items-start relative overflow-hidden">
              <span className="w-[545px] h-[40px] text-[14px] font-normal text-[#727272] tracking-[0.2px]">
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
              </span>
            </div>
          </div>
        </div>
        <Number />
        <OurTeam />
      </div>
    );
  }
  