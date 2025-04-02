import Link from "next/link";
import NavLinks from '../ui/nav-links';
import { FiHome, FiInstagram } from "react-icons/fi";
import { AiFillTikTok } from "react-icons/ai";


const Nav = () => {

    return (
        <div className="flex h-screen md:w-1/5 md:h-screen md:bg-gray-800 md:flex-col md:items-center md:justify-center md:gap-24 w-full flex-row sticky top-0 left-0">
            <Link className="" href="/">
                <FiHome size={80} color="#0055cc" />
            </Link>
            <div className="flex-col hidden md:flex md:gap-12">
                <NavLinks />
            </div>
            <div className="w-full absolute bottom-12 flex flex-row justify-center gap-4">
                <a target="_blank" href="https://www.instagram.com/breannagarciafitt?igsh=MTNmbXp1OGpidXh5bA==" className="">
                    <FiInstagram size={24} color={'#fff'} />
                </a>
                <a target="_blank" href="https://www.tiktok.com/@breannagarciafitt?_t=ZT-8vBj2eca7mo&_r=1" className="">
                    <AiFillTikTok size={24} color={'#fff'} />
                </a>
            </div>
        </div>
    )
}

export default Nav;