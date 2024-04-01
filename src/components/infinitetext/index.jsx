'use client'
import Image from 'next/image'
import styles from './index.module.css'
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export default function Inftext() {

  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: e => direction = e.direction * -1
      },
      x: "-300px",
    })
    requestAnimationFrame(animate);
  }, [])

  const animate = () => {
    if(xPercent < -10){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -10;
    }
    gsap.set(firstText.current, {xPercent: xPercent})
    gsap.set(secondText.current, {xPercent: xPercent})
    requestAnimationFrame(animate);
    xPercent += 0.025 * direction;
  }

  return (
    <div className='w-full my-[100px] mb-[300px]'>
      <div className="relative w-full"> 
        <div className={styles.sliderContainer}>
          <div ref={slider} className={styles.slider}>
            <p ref={firstText}>Get your vehicle repaired just in minutes</p>
            <p ref={secondText}>Get your vehicle repaired just in minutes</p>
          </div>
        </div>
      </div>
    </div>
  )
}