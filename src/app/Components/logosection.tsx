import React from 'react';
import Image from 'next/image';

const LogosSection: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-6 py-8 ">
      <div className="hover:scale-110 transition-transform duration-300">
        <Image
          src="/images/hooli.png"
          alt="Hooli Logo"
          className="w-[103px] h-[34px] lg:w-[120px] lg:h-[40px]"
          width={103}
          height={34}
        />
      </div>
      <div className="hover:scale-110 transition-transform duration-300">
        <Image
          src="/images/lya.png"
          alt="Lya Logo"
          className="w-[83px] h-[59px] lg:w-[100px] lg:h-[70px]"
          width={83}
          height={59}
        />
      </div>
      <div className="hover:scale-110 transition-transform duration-300">
        <Image
          src="/images/leaf.png"
          alt="Leaf Logo"
          className="w-[102px] h-[75px] lg:w-[120px] lg:h-[80px]"
          width={102}
          height={75}
        />
      </div>
      <div className="hover:scale-110 transition-transform duration-300">
        <Image
          src="/images/strip.png"
          alt="Strip Logo"
          className="w-[103px] h-[42px] lg:w-[120px] lg:h-[50px]"
          width={103}
          height={42}
        />
      </div>
      <div className="hover:scale-110 transition-transform duration-300">
        <Image
          src="/images/lya.png"
          alt="Lya Logo"
          className="w-[140px] h-[62px] lg:w-[160px] lg:h-[70px]"
          width={140}
          height={62}
        />
      </div>
      <div className="hover:scale-110 transition-transform duration-300">
        <Image
          src="/images/joker.png"
          alt="Joker Logo"
          className="w-[105px] h-[72px] lg:w-[120px] lg:h-[80px]"
          width={105}
          height={72}
        />
      </div>
    </div>
  );
};

export default LogosSection;