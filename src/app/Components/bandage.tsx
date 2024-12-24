import React from 'react'
import Link from 'next/link'

export default function Bandage() {
  return (
    // Bottom Section
    <div>
      <div className="py-4 bg-white">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#252b42]">Bandage</div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-gray-500">
              Home
            </Link>
            <Link href="/shop" className="hover:text-gray-500">
              Shop
            </Link>
            <Link href="/about" className="hover:text-gray-500">
              About
            </Link>
            <Link href="/blog" className="hover:text-gray-500">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-gray-500">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}

