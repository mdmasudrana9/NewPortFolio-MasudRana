import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center  justify-center gap-4">
      <div>
        <Image
          src={assets.profile_img}
          alt="#"
          className="rounded-full w-32 "
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl md-3 font-ovo">
        Hi! Im Masud Rana{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">
        FullStack Developer Based In Bangladesh
      </h1>
      <p className="max-w-2xl mx-auto font-ovo">
        {" "}
        I am a frontend developer from Barishal , Bangladesh with 2 year of
        experience in multiple compant like SoftKarrot , NextStack{" "}
      </p>
      <div className=" flex flex-col sm:flex-row gap-4 mt-4">
        <Link
          href="#conatct"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          contact me{" "}
          <Image alt="" src={assets.right_arrow_white} className="w-4" />{" "}
        </Link>
        <Link
          href="/src/assets/public/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 "
        >
          <Image src={assets.download_icon} alt="#" className="w-4" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
