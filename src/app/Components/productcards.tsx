

import React from "react";
import Image from "next/image";

type Card = {
  id: number;
  image: string;  // Ensure the property name is 'image' (lowercase)
  title: string;
  subtitle: string;
  originalPrice: string;
  discountedPrice: string;
};

const ProductCards: React.FC = () => {
  const cards: Card[] = [
    {
      id: 1,
      image: "/images/product12.png",  // Path to image in public folder
      title: "Graphic Design",
      subtitle: "Department 1",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
    },
    {
      id: 2,
      image: "/images/product2.png",  // Path to image in public folder
      title: "Graphic Design",
      subtitle: "Department 2",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
    },
    {
      id: 3,
      image: "/images/product3.png",  // Path to image in public folder
      title: "Graphic Design",
      subtitle: "Department 3",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
    },
    {
      id: 4,
      image: "/images/product4.png",  // Path to image in public folder
      title: "Graphic Design",
      subtitle: "Department 4",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
    },
    {
      id: 5,
      image: "/images/product5.png",  // Path to image in public folder
      title: "Graphic Design",
      subtitle: "Department 5",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
    },
    {
      id: 6,
      image: "/images/product6.png",  // Path to image in public folder
      title: "Graphic Design",
      subtitle: "Department 6",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
    },
    {
      id: 7,
      image: "/images/product7.png",  // Path to image in public folder
      title: "Graphic Design",
      subtitle: "Department 7",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
    },
    {
      id: 8,
      image: "/images/product8.png",  // Path to image in public folder
      title: "Graphic Design",
      subtitle: "Department 8",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
    },
    {
      id: 9,
      image: "/images/product9.png",  // Path to image in public folder
      title: "Graphic Design",
      subtitle: "Department 4",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
    },
    {
      id: 10,
      image: "/images/product10.png",  // Path to image in public folder
      title: "Graphic Design",
      subtitle: "Department 5",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
    },
    {
      id: 11,
      image: "/images/product11.png",  // Path to image in public folder
      title: "Graphic Design",
      subtitle: "Department 6",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
    },
    {
      id: 12,
      image: "/images/product12.png",  // Path to image in public folder
      title: "Graphic Design",
      subtitle: "Department 6",
      originalPrice: "$16.48",
      discountedPrice: "$6.48",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {cards.map((card) => (
        <div
          key={card.id}
          className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md"
        >
          {/* Image Component with Next.js Optimization */}
          <Image
            src={card.image}
            alt={card.title}
            width={239}
            height={350}
            className="object-contain rounded-md"
          />
          {/* Card Title */}
          <span className="text-center font-bold text-lg mt-3">
            {card.title}
          </span>
          {/* Card Subtitle */}
          <span className="text-center text-sm text-gray-500">
            {card.subtitle}
          </span>
          {/* Price Section */}
          <div className="flex justify-center gap-2 mt-2">
            <span className="text-xs line-through text-gray-500">
              {card.originalPrice}
            </span>
            <span className="text-xs text-green-600">
              {card.discountedPrice}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ProductCards;