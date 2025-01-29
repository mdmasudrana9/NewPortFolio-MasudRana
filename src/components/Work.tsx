"use client";

import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";
import { AboutProps } from "@/types/types";
import Link from "next/link";
const Work = ({ isDarkMode }: AboutProps) => {
  if (isDarkMode === null) return null;
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      id="my-work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      {/* <motion.h4
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center text-lg md-2 font-ovo"
      >
        My Portfolio
      </motion.h4> */}
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        My Latest Work<span className="text-cyan-400">Work</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in fullstack development.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-auto gap-5  my-10 dark:text-black"
      >
        {workData.map((project, index) => (
          <motion.div
            whileInView={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <Link href={project.url} target="_blank">
              <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex justify-between items-center duration-500 group-hover:bottom-7">
                <div>
                  <h2 className="font-semibold">{project.title}</h2>
                  <p className="text-sm text-gray-700">{project.description}</p>
                </div>
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-cyan-400 transition">
                  <Image
                    src={
                      isDarkMode
                        ? assets.right_arrow_bold_dark
                        : assets.send_icon
                    }
                    alt=""
                    className="w-5"
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.5 }}
        href=""
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 hover:border-cyan-400 dark:text-white dark:border-white dark:hover:bg-darkHover "
      >
        Show More{" "}
        <Image src={assets.right_arrow_bold} alt="#" className="w-4" />
      </motion.a>
    </motion.div>
  );
};

export default Work;
