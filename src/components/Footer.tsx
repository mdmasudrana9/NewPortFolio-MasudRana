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

      <div>
        <p> &copy; {currentYear} Masud Rana. All rights reserved.</p>
        <ul>
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
