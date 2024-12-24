import React from "react";
import Link from "next/link";
// import Review2 from "./reviw2";

const Review: React.FC = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10 bg-white">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <Link href="/description" className="text-center text-gray-500 text-sm font-semibold hover:text-green-500">
          Description
        </Link>
        <Link href="/additional-information" className="text-center text-gray-500 text-sm font-semibold hover:text-green-500">
          Additional Information
        </Link>
        <Link href="/reviews" className="text-center text-gray-500 text-sm font-semibold hover:text-green-500">
          Reviews (0)
        </Link>
      </div>

      {/* Product and Review Cards Section */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Your cards go here */}
      </div>

      {/* Render Review2 Component */}
      {/* <Review2 /> */}
    </div>
  );
};

export default Review;
