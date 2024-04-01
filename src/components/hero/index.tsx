import Image from "next/image"
import Link from "next/link"

export default function Hero() {
    return (
        <div className="w-full relative flex flex-col justify-center items-center min-h-[70vh] py-8">
            {/* <Image src={'/hero-bg.jpg'} alt="bg" width={600} height={600} className="w-full max-w-[600px] opacity-30" /> */}
            <div className="w-full flex justify-center items-center flex-col h-full gap-10">
                <h1 className=" font-bold md:text-7xl sm:text-5xl text-center">Looking for a <span className="cursorX text-white" style={{
                    stroke: '1px solid black',
                    WebkitTextStroke: '2px black'
                }}>mechanic</span> near you <br /> For a repair or maintainance ?</h1> 
                <p className="w-full text-center max-w-[800px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quidem error quas cumque ducimus vitae eligendi ut eos tenetur architecto ab, corporis exercitationem recusandae non laborum adipisci quam natus tempora!</p>
                <div className="flex gap-3 justify-center items-center flex-wrap">
                    <Link href={''} className="cursorX">
                        <Image src={'/google-play-badge.png'} alt="download btn" width={200} height={50} />
                    </Link>
                    <Link href={''} className="cursorX">
                        <Image src={'/app-store.svg'} alt="download btn" width={160} height={50} />
                    </Link>
                </div>
            </div>
        </div>
    )
}