import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialIcon: React.FC = () => {
  return (
    <div className="flex justify-center gap-6 mt-8">
      <p className="text-white">Fallow Us:</p>
      <Link href="#" aria-label="Facebook">
        <FaFacebook className="text-white hover:text-[#99c4dd] text-2xl" />
      </Link>
      <Link href="#" aria-label="Twitter">
        <FaTwitter className="text-white  hover:text-[#99c4dd] text-2xl" />
      </Link>
      <Link href="#" aria-label="Instagram">
        <FaInstagram className="text-white hover:text-[#99c4dd] text-2xl" />
      </Link>
      <Link href="#" aria-label="LinkedIn">
        <FaLinkedin className="text-white hover:text-[#99c4dd] text-2xl" />
      </Link>
    </div>
  );
};

export default  SocialIcon;