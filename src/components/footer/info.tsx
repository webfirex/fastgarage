import Image from "next/image";
import Line from "../ui-components/line";
import Link from "next/link";

export default function Info() {
    return (
        <section className="w-full flex justify-center items-center">
            <div className="w-full max-w-[1200px] flex justily-center items-center flex-col">
                  <div className="relative w-full h-px mb-10 z-0">
                    <Line />
                  </div>
                  <div className="flex fex-wrap justify-between w-full z-40">
                    <div className="flex flex-wrap">
                      <div className="flex flex-col gap-3 min-w-[200px]">
                        <a href="#" className="cursorX">Home</a>
                        <a href="#" className="cursorX">About</a>
                        <a href="#" className="cursorX">Services</a>
                        <a href="#" className="cursorX">Locations</a>
                        <a href="#" className="cursorX">Contact</a>
                      </div>
                      <div className="flex flex-col gap-3 min-w-[200px]">
                        <a href="#" className="cursorX">Home</a>
                        <a href="#" className="cursorX">About</a>
                        <a href="#" className="cursorX">Services</a>
                        <a href="#" className="cursorX">Locations</a>
                        <a href="#" className="cursorX">Contact</a>
                      </div>
                      <div className="flex flex-col gap-3 min-w-[100px] justify-center items-center">
                        <Link href={''} className="cursorX"> 
                            <Image src={'/google-play-badge.png'} alt="download btn" width={200} height={50} />
                        </Link>
                        <Link href={''} className="cursorX">
                            <Image src={'/app-store.svg'} alt="download btn" width={160} height={50} />
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-3 max-w-[500px] w-full">
                      <h1 className=" font-bold md:text-3xl sm:text-3xl">Subscribe to News Letter</h1> 
                      <input type="email" placeholder="Your Email" className="border-[#000000] border-2 py-3 px-7 rounded-lg w-full max-w-[500px]" />
                      <div className="flex gap-3 items-center flex-wrap">
                          <a href="" className="rounded-3xl  px-6 flex items-center font-bold cursorXD border-2 border-[#000] py-3 bg-[#d9f99d] text-black transition-n ">Subscribe</a>
                      </div> 
                    </div> 
                  </div>
            </div>
        </section>
    )
}