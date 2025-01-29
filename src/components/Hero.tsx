"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import Lottie from "lottie-react";
import Hand from "../assets/Hand.json";
import { GoArrowRight } from "react-icons/go";

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
      <h4 className="flex items-center gap-2 text-lg md:text-2xl md-3 font-ovo ">
        <div className="animated-text">
          Hi! I&apos;m <span></span>
        </div>
        {/* <Image src={assets.hand_icon} alt="" className="w-6 animate-dance" /> */}
        <Lottie animationData={Hand} className="w-8" />
      </h4>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px] font-ovo"
      >
        Fullstack Developer Based In Bangladesh
      </motion.h1>
      <motion.p
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-ovo"
      >
        {" "}
        I am a fullstack developer from Barishal,Bangladesh with 1.5 year of
        experience in multiple company like SoftKarrot and NexStack Pte Ltd.
      </motion.p>
      <div className=" flex flex-col sm:flex-row gap-4 mt-4">
        <Link
          href="#contact-me"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent hover:text-black hover:bg-lightHover duration-500 hover:border-cyan-400"
        >
          Contact me
          <GoArrowRight />
        </Link>
        <a
          href="/resume.pdf"
          download="Masud Rana Resume"
          className="px-10 py-3 border hover:border-cyan-400 duration-500 rounded-full border-gray-500 flex items-center gap-2 dark:text-black bg-white "
        >
          My resume
          <Image src={assets.download_icon} alt="#" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
