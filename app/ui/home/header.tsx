import Link from "next/link";
const Header = () => {

    return (
        <div className="w-full h-full flex flex-row items-center">
            <div className="w-1/2">
                <h1 className="text-8xl font-serif">Strong AF Fitness</h1>
            </div>
            <div className="w-1/2 flex flex-row justify-end items-center">
                <button className=" bg-slate-300 text-slate-900 px-4 py-2 text-2xl font-bold rounded-4xl transition-all duration-300 hover:scale-105 hover:bg-slate-50 hover:cursor-pointer"><Link href={'/coaching'}>Start Your Journey</Link></button>
            </div>
        </div>
    )
}

export default Header;