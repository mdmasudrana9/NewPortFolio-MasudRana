import Image from "next/image";
import { assets } from "../assets/assets";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-20">
      <div className="text-center">
        <Image className="w-36 mx-auto md-2" src={assets.logo} alt="" />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image className="w-6" src={assets.mail_icon} alt="" />
          rana.cse6.bu@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t  border-gray-400 mx-[10%] mt-12 py-6">
        <p> &copy; {currentYear} Masud Rana. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <Link target="_blank" href="#">
              Github
            </Link>
          </li>
          <li>
            <Link target="_blank" href="#">
              Github
            </Link>
          </li>
          <li>
            <Link target="_blank" href="#">
              Github
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
