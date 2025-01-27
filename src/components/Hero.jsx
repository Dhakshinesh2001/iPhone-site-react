import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import {heroVideo, smallHeroVideo} from "../utils"
import { useEffect, useState } from 'react';



const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 768 ? smallHeroVideo: heroVideo);
  const handleVideoSrc = () => {
    if (window.innerWidth < 768) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }
  useEffect(() => {
    handleVideoSrc()
  }, [])
  
  
  useGSAP(() => {
    gsap.to('#Hero',
      {
        opacity: 1,
        delay: 1.5
      }
    )
  });
  return (
    <section className="w-full nav-height bg-black relative">
        <div className="h-5/6 w-full flex-center flex-col">
        <p id="Hero" className="hero-title">iPhone 15 Pro </p>
        <div className="md:w-10/12 w-9/12">
        <video
            className="pointer-events-none" autoPlay muted loop playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
            </video>

         
        </div>

       

        </div>
        </section>
  )};
export default Hero;

// 