import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
const Hero = () => {
  return (
    <div
      id="home"
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center  justify-center gap-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile_img2}
          alt="#"
          className="rounded-full w-32 "
        />
      </motion.div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl md-3 font-ovo ">
        Hi! Im Masud Rana{" "}
        <Image src={assets.hand_icon} alt="" className="w-6 animate-dance" />
      </h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-ovo"
      >
        FullStack Developer Based In Bangladesh
      </motion.h1>
      <motion.p
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-ovo"
      >
        {" "}
        I am a frontend developer from Barishal , Bangladesh with 2 year of
        experience in multiple compant like SoftKarrot , NextStack{" "}
      </motion.p>
      <div className=" flex flex-col sm:flex-row gap-4 mt-4">
        <Link
          href="#conatct"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          contact me
          <Image alt="" src={assets.right_arrow_white} className="w-4" />{" "}
        </Link>
        <Link
          href="/src/assets/public/sample-resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:text-black bg-white "
        >
          my resume
          <Image src={assets.download_icon} alt="#" className="w-4" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
