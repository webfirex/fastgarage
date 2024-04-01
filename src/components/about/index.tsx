"use client"
import React, { useState, useLayoutEffect, useRef } from 'react'
// import styles from './style.module.css';


export default function AboutUs() {

    return (
        <div className="flex justify-center items-center w-full my-[100px] flex-col gap-10">
            <h1 className=" font-bold text-6xl text-center">Lorem ipsum dolor sit amet <br /> consectetur adipisicing</h1> 
            <div className="flex justify-center mt-[100px] w-full max-w-[1304px]">

                <div className="relative w-full h-full max-w-[40%]">
                    <img src="/repair-1.jpg" alt="repair" className="w-full rounded-2xl" />
                </div>
                
                <div className="flex flex-col w-full max-w-[60%] height-[100%] gap-4 p-[50px] rounded-2xl" style={{
                    boxShadow: '0 0 25px rgba(0,0,0,0.1)'
                }}>
                    <h1 className=" font-bold md:text-3xl sm:text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit</h1> 
                    <p className="w-full max-w-[800px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quidem error quas cumque ducimus vitae eligendi ut eos tenetur architecto ab, corporis exercitationem recusandae non laborum adipisci quam natus tempora!</p>
                    <div className="flex gap-3 items-center flex-wrap">
                        <a href="" className="rounded-3xl bg-black text-[#d9f99d] px-6 flex items-center font-bold cursorXD hover:border-2 border-[#000] py-3 hover:bg-[#d9f99d] hover:text-black transition-n ">Download now</a>
                    </div>
                    <div className="flex flex-col justify-center gap-6 w-full mt-[80px]">
                        <div className="flex gap-6 p-4 w-full items-center">
                            <img src="/tyre.png" alt="" className='w-[70px]' />
                            <h1 className=" font-bold md:text-xl sm:text-3xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, nihil, molestias </h1> 
                        </div>
                        <div className="flex gap-6 p-4 w-full items-center">
                            <img src="/tyre.png" alt="" className='w-[70px]' />
                            <h1 className=" font-bold md:text-xl sm:text-3xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, nihil, molestias </h1> 
                        </div>
                        <div className="flex gap-6 p-4 w-full items-center">
                            <img src="/tyre.png" alt="" className='w-[70px]' />
                            <h1 className=" font-bold md:text-xl sm:text-3xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, nihil, molestias </h1> 
                        </div>
                        <div className="flex gap-6 p-4 w-full items-center">
                            <img src="/tyre.png" alt="" className='w-[70px]' />
                            <h1 className=" font-bold md:text-xl sm:text-3xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, nihil, molestias </h1> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}