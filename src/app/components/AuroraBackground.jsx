"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import { LinkPreview } from "./ui/link-preview";
import { FlipWords } from "./ui/flip-words";

export function AuroraBackgroundDemo() {
  return (
    (<AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4">
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
             Hi, I’m Rohit Shahi!
        </div>
        <div
          className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            Engineering student with skills in <FlipWords words={["Web Development","Blockchain","AI"]}/>
            <br />
            <div className="text-center">Welcome to my portfolio!</div>
        </div>
        <div className="justify-center align-middle flex gap-4">
        <button
          >
            <LinkPreview
            className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2"
            url="https://github.com/rohiit257"
            >
                Github
            </LinkPreview>
          
        </button>
        <button
          >
            <LinkPreview
            className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2"
            url="https://drive.google.com/file/d/1e9nZJ34cu46D3uQbmARXGVEw5TnnOHpR/view?usp=sharing"
            imageSrc=""
            >
                Resume
            </LinkPreview>
          
        </button>

        </div>
       
        
      </motion.div>
    </AuroraBackground>)
  );
}
