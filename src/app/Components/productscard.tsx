
import Image from 'next/image';


const ProductsCard = () => {
  return (
    <div className="main-container flex w-full pt-[48px] pr-0 pb-[48px] pl-0 flex-col gap-[48px] items-center flex-nowrap relative overflow-hidden mx-auto my-0">
      {/* First Row of Cards */}
      <div className="flex w-[1048px] gap-[30px] items-start shrink-0 flex-wrap justify-between">
        
        {/* Card 1 */}
        <div className="flex w-[238px] flex-col items-center shrink-0 flex-nowrap relative z-[1]">
          <div className="flex w-[239px] flex-col items-start shrink-0 flex-nowrap bg-[#fff] relative overflow-hidden z-[2]">
            <div className="h-[350px] self-stretch shrink-0 relative overflow-hidden z-[3] flex justify-center items-center">
              <Image
                src="/images/product1.png" // Image path
                alt="Graphic Design"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="flex pt-[25px] pr-[25px] pb-[35px] pl-[25px] flex-col gap-[10px] items-center self-stretch shrink-0 flex-nowrap relative overflow-hidden z-[5]">
              <span className="flex w-[131px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[16px] font-bold leading-[24px] text-[#252b42] tracking-[0.1px] relative text-center whitespace-nowrap z-[6]">
                Graphic Design
              </span>
              <span className="flex w-[146px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[14px] font-bold leading-[24px] text-[#727272] tracking-[0.2px] relative text-center whitespace-nowrap z-[7]">
                English Department
              </span>
              <div className="flex w-[108px] pt-[5px] pr-[3px] pb-[5px] pl-[3px] gap-[5px] items-start shrink-0 flex-nowrap relative z-[8]">
                <span className="flex w-[52px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[16px] font-bold leading-[24px] text-[#bdbdbd] tracking-[0.1px] relative text-center whitespace-nowrap z-[9]">
                  $16.48
                </span>
                <span className="flex w-[45px] h-[24px] justify-center items-start shrink-0 basis-auto font-['Montserrat'] text-[16px] font-bold leading-[24px] text-[#23856d] tracking-[0.1px] relative text-center whitespace-nowrap z-10">
                  $6.48
                </span>
              </div>
              <div className="flex w-[82.231px] gap-[6.077px] items-center shrink-0 flex-nowrap relative z-[11]">
                <div className="w-[16px] h-[16px] shrink-0 bg-[url(/images/product1.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[12]" />
                <div className="w-[16px] h-[16px] shrink-0 bg-[url(/images/product2.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[13]" />
                <div className="w-[16px] h-[16px] shrink-0 bg-[url(/images/product3.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[14]" />
                <div className="w-[16px] h-[16px] shrink-0 bg-[url(/images/product4.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[15]" />
              </div>
            </div>
          </div>
        </div>

        {/* Product Card */}
        <div className="flex w-[238px] flex-col items-center justify-center shrink-0 flex-nowrap relative z-[1]">
  
        </div>

      </div>
    </div>
  );
};

export default ProductsCard;
