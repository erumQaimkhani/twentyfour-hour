"use client";
import Link from "next/link";
import { useState } from "react";

export default function Bandage2() {
    const [activeLink, setActiveLink] = useState("Home");

    const handleSetActive = (link: string) => {
        setActiveLink(link);
    };

    return (
        <div className="main-container w-full h-[729px] bg-[#fff] relative overflow-hidden mx-auto">
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden z-[3]">
                <div className="w-[1322px] h-[91px] relative mx-auto z-[4]">
                    <div className="flex justify-between items-center w-full h-[91px]">
                        {/* Left Side: Brand */}
                        <div className="flex items-center">
                            <span className="font-['Montserrat'] text-[24px] font-bold text-[#252b42]">
                                Bandage
                            </span>
                        </div>

                        {/* Center: Navigation */}
                        <div className="flex space-x-6">
                            {["Home", "Product", "Pricing", "Contact"].map((link) => (
                                <Link
                                    key={link}
                                    href={`/${link.toLowerCase()}`}
                                    onClick={() => handleSetActive(link)}
                                    className={`text-[14px] font-bold ${
                                        activeLink === link ? "text-[#23a6f0]" : "text-[#727272]"
                                    }`}
                                >
                                    {link}
                                </Link>
                            ))}
                        </div>

                        {/* Right Side: Login and CTA */}
                        <div className="flex items-center space-x-6">
                            <Link href="/login" className="text-[14px] font-bold text-[#23a6f0]">
                                Login
                            </Link>
                            <button className="bg-[#23a6f0] text-white font-bold px-4 py-2 rounded">
                                Become a member
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
