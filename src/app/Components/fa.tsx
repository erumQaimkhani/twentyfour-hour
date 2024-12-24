export default function Fa() {
    return (
      <div className="main-container w-[1440px] h-[1037px] bg-white relative overflow-hidden mx-auto my-0">
        <div className="flex w-[1056px] pt-20 pb-20 flex-col gap-12 items-center relative ml-[192px]">
          <div className="flex w-[1050px] pt-12 pb-12 flex-col items-center relative z-10">
            <div className="flex w-[651px] flex-col items-center relative">
              <div className="flex w-[607px] flex-col gap-2 items-center relative">
                <span className="h-12 font-montserrat text-[40px] font-bold leading-[50px] text-[#252b42] tracking-wide">
                  Pricing FAQs
                </span>
                <span className="flex w-[552px] h-15 justify-center font-montserrat text-[20px] text-[#727272] text-center leading-7 tracking-wide">
                  Problems trying to resolve the conflict between <br />
                  the two major realms of Classical physics
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-[1056px] flex-col gap-7 items-center relative">
            {Array.from({ length: 3 }).map((_, rowIndex) => (
              <div key={rowIndex} className="flex w-[1056px] gap-7 items-center">
                {Array.from({ length: 2 }).map((_, colIndex) => (
                  <div
                    key={colIndex}
                    className={`flex w-[${colIndex === 0 ? 491 : 535}px] flex-col items-start relative overflow-hidden`}
                  >
                    <div className="flex p-6 flex-col items-start rounded-lg bg-white shadow-md">
                      <div className="flex w-full gap-5 items-start">
                        <div
                          className="w-[9px] h-[16px] bg-no-repeat bg-cover"
                          style={{
                            backgroundImage: `url('/assets/images/${
                              colIndex === 0
                                ? 'icon-left.png'
                                : 'icon-right.png'
                            }')`,
                          }}
                        />
                        <div className="flex flex-col gap-1 items-start">
                          <span className="h-6 font-montserrat text-[16px] font-bold text-[#252b42] tracking-wide">
                            The quick fox jumps over the lazy dog
                          </span>
                          <span className="flex flex-col gap-1 text-[14px] font-montserrat text-[#727272] leading-[20px] tracking-wide">
                            <span>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</span>
                            <span>RELIT official consequent door ENIM RELIT Mollie.</span>
                            <span>Excitation venial consequent sent nostrum met.</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <span className="flex w-[552px] h-7 justify-center font-montserrat text-[20px] text-[#727272] text-center">
            Haven’t got your answer? Contact our support
          </span>
        </div>
      </div>
    );
  }
  