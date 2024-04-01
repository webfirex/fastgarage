export default function Info2() {
    return (
        <div className="flex justify-center items-center w-full my-[100px]">
            <div className="flex justify-center items-center w-full max-w-[1304px]">
                <div className="flex z-10 flex-col justify-center w-full max-w-[60%] height-[90%] gap-4 p-[50px] md:mr-[-40px] bg-white rounded-2xl" style={{
                    boxShadow: '0 0 25px rgba(0,0,0,0.1)'
                }}>
                    <h1 className=" font-bold md:text-3xl sm:text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit</h1> 
                    <p className="w-full max-w-[800px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quidem error quas cumque ducimus vitae eligendi ut eos tenetur architecto ab, corporis exercitationem recusandae non laborum adipisci quam natus tempora!</p>
                    <div className="flex gap-3 items-center flex-wrap">
                        <a href="" className="rounded-3xl bg-black text-[#d9f99d] px-6 flex items-center font-bold cursorXD hover:border-2 border-[#000] py-3 hover:bg-[#d9f99d] hover:text-black transition-n ">Download now</a>
                    </div>
                </div>
                <img src="/repair-1.jpg" alt="repair" className="w-full max-w-[50%] rounded-2xl" />
            </div>
        </div>
    )
}