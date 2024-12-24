
import React from 'react';
import LogosSection from './logosection';
import Grow from './grow';
const BigCompanySection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center px-4">
        {/* Heading Section */}
        <div className="mb-8">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 animate-fadeIn">
            Big Companies Are Here
          </h2>
          <p className="mt-4 text-gray-600 text-sm lg:text-base leading-relaxed animate-fadeIn delay-200">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics.
          </p>
        </div>
        {/* Logos Section */}
        <div className="flex flex-wrap justify-center gap-8 animate-slideUp">
          <LogosSection />
          <Grow />
        </div>
      </div>
    </div>
  );
};

export default BigCompanySection;
