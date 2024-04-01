import Info from "./info";

export default function Footer() {
    return (
        <div className="w-full flex flex-col justify-center items-center p-8 ">
            <div className="w-full max-w-[1204px] flex flex-col justify-center items-center gap-8">
                <div className="flex gap-6 flex-col justify-center items-center">
                    <img src="/logo-h-b.svg" alt="fastgarrage" className="w-full max-w-[200px]" />
                    <h1 className="text-center uppercase text-3xl font-black">Fast Garrage</h1>
                    <p className="text-center w-full max-w-[600px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, impedit. Harum aut nihil est cumque eligendi vitae eius assumenda, enim eos labore? Nihil fugiat quisquam ipsam velit cupiditate officia deserunt.</p>
                </div>
                <Info />
            </div>
        </div>
    )
}