"use client";

import { heroVideo, smallHeroVideo } from "@/utils";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState<string | undefined>(undefined);

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    handleVideoSrcSet();

    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  });

  useEffect(() => {
    if (videoSrc) {
      gsap.to("#hero", { opacity: 1, delay: 1.5 });
      gsap.to("#cta", { opacity: 1, y: -50, delay: 2.5 });
    }
  }, [videoSrc]);

  return (
    <section className="w-full nav-height bg-black">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhones 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source data-cy="video" src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="relative z-10 flex flex-col items-center opacity-0 translate-y-20"
      >
        <Link href="#highlights" className="btn" data-cy="link">
          Buy
        </Link>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
