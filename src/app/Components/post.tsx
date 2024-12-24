

// export default PostList;
import React from "react";
import Image from "next/image";

// Type definition for posts
interface Post {
  imageUrl: string;
  category: string;
  title: string;
  description: string;
  date: string;
  commentCount: number;
}

// Sample data
const featuredPostsData: Post[] = [
  {
    imageUrl: "/images/road.png",
    category: "Google",
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    commentCount: 10,
  },
  {
    imageUrl: "/images/car.png",
    category: "Google",
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    commentCount: 10,
  },
  {
    imageUrl: "/images/umbrella.png",
    category: "Google",
    title: "Loudest à la Madison #1 (L'integral)",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    commentCount: 10,
  },
];

const PostList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {featuredPostsData.map((post, index) => (
        <div
          key={index}
          className="post-card bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          {/* Image */}
          <div className="relative w-full h-64 flex justify-center items-center">
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={725} // Adjust according to your needs
              height={300} // Adjust according to your needs
              className="object-contain" // Ensures the image stays centered
            />
          </div>

          {/* Content */}
          <div className="p-4 space-y-2">
            {/* Category */}
            <span className="text-xs text-blue-500 font-semibold">{post.category}</span>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>

            {/* Description */}
            <p className="text-sm text-gray-600">{post.description}</p>

            {/* Date and Comment Count */}
            <small className="block text-gray-500 mt-2">
              {post.date} • {post.commentCount} comments
            </small>
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center p-4 border-t border-gray-200">
            {/* Comment Button */}
            <button className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-500 focus:outline-none transition-colors duration-200">
              <Image
                src="/images/comment.png" // Corrected path
                alt="Comment Icon"
                width={16}
                height={16}
              />
              <span>{post.commentCount} comments</span>
            </button>

            {/* Learn More Button */}
            <button className="flex items-center gap-2 text-sm text-gray-700 hover:text-blue-500 focus:outline-none transition-colors duration-200">
              <span className="font-semibold">Learn More</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
