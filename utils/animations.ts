import * as THREE from "three";
import { TimelineMax } from "gsap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

type AnimateWithGsapTimeLineProps = {
  timeline: TimelineMax;
  rotationRef: React.RefObject<THREE.Group>;
  rotationState: number;
  firstTarget: string;
  secondTarget: string;
  animationProps: {
    transform: string;
    duration: number;
  };
};

export const animateWithGsapTimeLine = ({
  timeline,
  rotationRef,
  rotationState,
  firstTarget,
  secondTarget,
  animationProps,
}: AnimateWithGsapTimeLineProps) => {
  timeline.to(rotationRef.current!.rotation, {
    y: rotationState,
    duration: 1,
    ease: "power2.inOut",
  });

  timeline.to(
    firstTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );

  timeline.to(
    secondTarget,
    {
      ...animationProps,
      ease: "power2.inOut",
    },
    "<"
  );
};

export const animateWithGsap = (
  target: any,
  animationProps?: any,
  scrollProps?: any
) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: "restart reverse restart reverse",
      start: "top 85%",
      ...scrollProps,
    },
  });
};
