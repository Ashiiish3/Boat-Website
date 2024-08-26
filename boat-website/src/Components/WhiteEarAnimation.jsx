import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {whiteImageObj} from '../Constant/AllData'

export default function WhiteEarAnimation() {
    gsap.registerPlugin(ScrollTrigger);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const frameCount = 277;
  const images = [];
  const airpods = { frame: 0 };
  const currentFrame = (index) => (
    whiteImageObj[`whiteEarbudsImage_${index.toString().padStart(4, '0')}`]
  );
  useEffect(() => {
    const canvas = canvasRef.current;
    contextRef.current = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 1; i <= frameCount; i++) {
      const image = new Image();
      image.src = currentFrame(i);
      image.onerror = () => {
        console.error(`Failed to load image: ${image.src}`);
      };
      images.push(image);
    }

    gsap.to(airpods, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: canvas,
        scroller: 'body',
        markers: "",
        start:"top 10%",
        end: "top -400%",
        scrub: 0.5,
        pin: true
      },
      onUpdate: render,
    });
    images[0].onload = render;
    function render() {
      const context = contextRef.current;
      const currentImage = images[airpods.frame];
      if (currentImage) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        // Calculate the scaling factor to maintain aspect ratio
        const scale = Math.min(
          canvas.width / currentImage.width,
          canvas.height / currentImage.height
        );
        // Calculate the position to center the image
        const x = (canvas.width / 2) - (currentImage.width / 2) * scale;
        const y = (canvas.height / 2) - (currentImage.height / 2) * scale;
        context.drawImage(
          currentImage,
          x,
          y,
          currentImage.width * scale,
          currentImage.height * scale
        );
      }
    }
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [frameCount]);
  return (
    <div className="w-full h-[500vh] bg-[#EDEDED]">
      <canvas
        className="w-full h-[90vh] sticky top-0 object-contain m-auto"
        ref={canvasRef}
        id="hero-lightpass"
      >
      </canvas>
    </div>
  )
}