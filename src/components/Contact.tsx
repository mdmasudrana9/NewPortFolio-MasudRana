"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";

type TError = {
  success: boolean;
  message: string;
};

const Contact = () => {
  const [result, setResult] = useState("");
  console.log(result);
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "f66e2598-6f62-481d-b9ca-42ea966c210a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data: TError = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  if (result === "Form Submitted Successfully") {
    setTimeout(() => {
      setResult("");
    }, 5000);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact-me"
      className="w-full  px-[12%] py-10 scroll-mt-20  "
    >
      <motion.h4
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center text-lg md-2 font-ovo"
      >
        Connect with me{" "}
      </motion.h4>
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        Get in touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        I&apos;d love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.5 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex-1 p-3  cursor-pointer outline-none border-[0.5px] border-gray-400 bg-white rounded-md hover:border-orange-300 duration-500 dark:bg-darkHover/30 dark:border-white/90 "
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="flex-1 p-3 cursor-pointer outline-none border-[0.5px] border-gray-400 bg-white rounded-md hover:border-orange-300 duration-500 dark:bg-darkHover/30 dark:border-white/90"
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <textarea
          className="w-full resize-none cursor-pointer p-4 outline-none border-[0.5px] border-gray-400 bg-white rounded-md mb-6 hover:border-orange-300 duration-500 dark:bg-darkHover/30 dark:border-white/90"
          rows={6}
          placeholder="Enter your message"
          required
          name="message"
        ></textarea>
        <button
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover "
          type="submit"
        >
          Submit now{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </button>
        <p className="mt-4 text-green-400">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
