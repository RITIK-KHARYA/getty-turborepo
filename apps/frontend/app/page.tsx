"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

import AppBar from "./components/app-bar";
import Footer from "./components/footer";
import Particles from "./components/ui/particles";
import HeroVideoDialog from "./components/ui/hero-video-dialog";
import { HoverBorderGradient } from "./components/ui/hover-border-gradient";
import { BorderBeam } from "./components/ui/border-beam";
import { Button } from "./components/ui/button";

export default function Home() {
  // Text content for the hero section
  const headlineText = "Deep dive into getty,";
  const subheadlineText = "Lets get anonymous";

  // Theme-based color state
  const { themes } = useTheme();
  const [particlesColor, setParticlesColor] = useState("light");

  useEffect(() => {
    setParticlesColor(themes.includes("dark") ? "#fafaf9" : "#171717");
  }, [themes]);

  // Split headline into words for animation
  const animatedWords = [
    ...headlineText.split(" "),
    ...subheadlineText.split(" "),
  ];

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-center">
        <AppBar />
      </div>

      {/* Hero Section */}
      <div className="h-screen max-w-full relative mt-10">
        <div className="p-2 flex flex-col items-center justify-center">
          {/* CTA Link */}
          <Link href="" className="">
            <span className="relative z-10 text-sm">
              <HoverBorderGradient>🌟 Join Our Community</HoverBorderGradient>
            </span>
          </Link>

          {/* Animated Headline */}
          <div className="leading-loose font-normal z-10 mt-10 ">
            <span className=" flex items-center justify-center font-bold text-white md:text-5xl  mx-auto flex-wrap w-[700px]  gap-x-1">
              {animatedWords.map((word, index) => (
                <motion.span
                  className="px-1 text-6xl "
                  key={index}
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </div>

          {/* Subheadline */}
          <span className="text-center mt-10 w-[650px] text-muted-foreground z-10 text-md">
            Getty welcomes you to the world where you forget everything within a
            day. Share the platform—your thoughts are invisible to the world.
          </span>
          <div className="w-full flex items-center justify-center mt-10">
           //there will be button here
          </div>
        </div>

        {/* Video Section */}
        <div className="relative w-[1000px] mx-auto pointer-events-auto z-10 mt-24">
          <div className="shadow-[0px_0px_300px_0px_#5b21b6] top-full left-0 bg-black absolute -z-10 flex max-w-screen-lg w-full aspect-video flex-col items-center justify-center overflow-hidden rounded- border bg-background">
            <HeroVideoDialog
              videoSrc="https://www.youtube.com/embed/U14GpQ5K03g"
              thumbnailSrc="/thumbnail.jpg"
              thumbnailAlt="Video Thumbnail"
            />
            <BorderBeam size={250} duration={12} delay={5} />
          </div>
        </div>
      </div>

      {/* Particles Background */}
      <Particles
        className="absolute inset-0"
        quantity={150}
        ease={90}
        color={particlesColor}
        refresh
      />

      <div className=" ">
        <Footer />
      </div>
    </div>
  );
}
