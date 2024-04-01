"use client"
import { useEffect } from "react";
import Image from "next/image";

export default function Header() {
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };

    return () => {
      window.onscroll = null; // Clean up the event listener when component unmounts
    };
  }, []); // Run this effect only once on component mount

  function scrollFunction() {
    const header = document.getElementById("header");
    if (header) {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        header.style.height = "75px";
        header.style.width = "calc(100vw - 30px)";
        header.style.margin = "0 15px";
        header.style.borderRadius = "70px";
        header.style.top = "15px";
        header.style.backgroundColor = "#d9f99d74";
        header.style.border = "1px solid #c8ff61";
        header.style.backdropFilter = "blur(50px)";
      } else {
        header.style.height = "100px";
        header.style.width = "100vw";
        header.style.margin = "0";
        header.style.borderRadius = "0";
        header.style.top = "0";
        header.style.backgroundColor = "#fff";
        header.style.border = "none";
        header.style.backdropFilter = "none";

      }
    }
  }

  return (
        <div id="header" className="flex justify-center z-50 px-4 bg-[#fff] w-full h-[100px] items-center lg:px-[50px] py-6 fixed top-0 left-0 transition-n">
            <div className="w-full flex justify-between items-center">
                <div className="flex gap-4 h-full items-center">
                    <a href="https://webepex.com" className="h-14 flex justify-center items-center cursorX"> 
                        <Image src="/logo-h-b.svg" alt="" height={"20"} width={"100"} className="hover:scale-105 transition-n" />
                    </a>
                    <nav className="flex justify-center items-center h-full">
                        <a className="mx-7 cursorX hover:scale-90 transition-n" href="">Home</a>
                        <a className="mx-7 cursorX hover:scale-90 transition-n" href="">About us</a>
                        <a className="mx-7 cursorX hover:scale-90 transition-n" href="">Services</a>
                        <a className="mx-7 cursorX hover:scale-90 transition-n" href="">Locations</a>
                    </nav>
                </div>
                <div className="flex gap-4 h-full items-center">
                    <nav className="flex justify-center items-center h-full">
                        <a className="mx-7 cursorX hover:scale-90 transition-n" href="">admin@fastgarrage.com</a>
                    </nav>
                    <a href="" className="rounded-3xl bg-black text-[#d9f99d] px-6 flex items-center font-bold cursorXD hover:border-2 border-[#000] py-3 hover:bg-[#d9f99d] hover:text-black transition-n ">Download now</a>
                </div>
            </div>
        </div>
    )
}