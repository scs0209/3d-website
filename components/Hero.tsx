"use client";

import { heroVideo, smallHeroVideo } from "@/utils";
import gsap from "gsap";
import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    // 초기 렌더링 시 비디오 소스를 설정합니다.
    handleVideoSrcSet();

    // resize 이벤트 리스너를 추가합니다.
    window.addEventListener("resize", handleVideoSrcSet);

    // 컴포넌트 언마운트 시 이벤트 리스너를 제거합니다.
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

  if (!videoSrc) {
    return null;
  }

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
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <Link href="#highlights" className="btn">
          Buy
        </Link>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
