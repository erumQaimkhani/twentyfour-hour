import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex gap-4 mt-4">
      <Link
        href="#"
        aria-label="Facebook"
        className="text-[#23A6F0] hover:text-[#99c4dd] text-xl transition-colors duration-300"
      >
        <FaFacebook />
      </Link>
      <Link
        href="#"
        aria-label="Twitter"
        className="text-[#23A6F0] hover:text-[#99c4dd] text-xl transition-colors duration-300"
      >
        <FaTwitter />
      </Link>
      <Link
        href="#"
        aria-label="Instagram"
        className="text-[#23A6F0] hover:text-[#99c4dd] text-xl transition-colors duration-300"
      >
        <FaInstagram />
      </Link>
      <Link
        href="#"
        aria-label="LinkedIn"
        className="text-[#23A6F0] hover:text-[#99c4dd] text-xl transition-colors duration-300"
      >
        <FaLinkedin />
      </Link>
    </div>
  );
}
