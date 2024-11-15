"use client";

import AppBar from "./components/app-bar";
import { motion } from "framer-motion";
import { Button } from "./components/ui/button";
import Link from "next/link";
import { HoverBorderGradient } from "./components/ui/hover-border-gradient";
import HeroVideoDialog from "./components/ui/hero-video-dialog";
import { BorderBeam } from "./components/ui/border-beam";

export default function Home() {
  const gettywords = "Deep Dive Into Getty";
  const header = "Lets get anonymous";

  // Combine both strings into an array of words
  const words = [...gettywords.split(" "), ...header.split(" ")];

  return (
    <div className=" ">
      <div className="flex items-center justify-center">
        <AppBar />
      </div>

      <div className="h-full max-w-full relative mt-10 ">
        <div className=" p-2 flex flex-col items-center justify-center ">
          <Link href="" className="">
            <span className="relative z-10 text-sm ">
              <HoverBorderGradient>🌟 Join Our Community</HoverBorderGradient>
            </span>
          </Link>

          <div className="leading-loose font-normal">
            <span className="text-4xl flex items-center mt-10 justify-center font-bold text-white z-50 md:text-5xl mx-auto flex-wrap w-[650px]">
              {words.map((word, index) => (
                <motion.span
                  className="px-1"
                  key={index}
                  initial={{
                    opacity: 0,
                    filter: "blur(10px)",
                  }}
                  animate={{
                    opacity: 1,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </div>
        </div>
        <div className="relative w-[950px] mx-auto mt-10 h-fit pointer-events-auto">
          <div className="shadow-[0px_0px_300px_0px_#5b21b6] top-full left-0 bg-black absolute mt-24 -z-10 flex max-w-screen-lg w-full h-auto aspect-video flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
            <HeroVideoDialog
              className="rounded-3xl"
              videoSrc="https://www.youtube.com/embed/U14GpQ5K03g"
              thumbnailSrc="/thumbnail.jpg"
              thumbnailAlt="Video Thumbnail"
            />
            <BorderBeam size={250} duration={12} delay={9} />
          </div>
        </div>
      </div>
    </div>
  );
}
