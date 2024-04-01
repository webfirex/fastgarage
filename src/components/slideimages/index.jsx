"use client"
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.css';
import Image from 'next/image';

const slider1 = [
    {
        color: "#fff",
        src: "repair-1.jpg"
    },
    {
        color: "#fff",
        src: "repair-1.jpg"
    },
    {
        color: "#fff",
        src: "repair-1.jpg"
    },
    {
        color: "#fff",
        src: "repair-1.jpg"
    }
]

const slider2 = [
    {
        color: "#fff",
        src: "repair-1.jpg"
    },
    {
        color: "#fff",
        src: "repair-1.jpg"
    },
    {
        color: "#fff",
        src: "repair-1.jpg"
    },
    {
        color: "#fff",
        src: "repair-1.jpg"
    }
]

export default function ImageSlider() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    })

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
    const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

    return (
        <div ref={container} className={styles.slidingImages}>
            <motion.div style={{x: x1}} className={styles.slider}>
                    {
                        slider1.map( (project, index) => {
                            return <div key={index} className={styles.project} style={{backgroundColor: project.color, borderRadius: '14px'}} >
                                <div className={styles.imageContainer}>
                                    <Image 
                                    fill={true}
                                    alt={"image"}
                                    src={`/${project.src}`}
                                    style={{
                                        borderRadius: '10px',
                                    }}
                                    className='cursorX'/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{x: x2}} className={styles.slider}>
                    {
                        slider2.map( (project, index) => {
                            return <div key={index} className={styles.project} style={{backgroundColor: project.color, borderRadius: '14px'}} >
                                <div key={index} className={styles.imageContainer}>
                                    <Image 
                                    fill={true}
                                    alt={"image"}
                                    src={`/${project.src}`}
                                    style={{
                                        borderRadius: '10px',
                                    }}
                                    className='cursorX'/>
                                </div>
                            </div>
                        })
                    }
                </motion.div>
                <motion.div style={{height}} className={styles.circleContainer}>
                    <div className={styles.circle}></div>
                </motion.div>
        </div>
    )
}