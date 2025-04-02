import Link from "next/link";
import NavLinks from '../ui/nav-links';
import { FiHome } from "react-icons/fi";

const Nav = () => {

    return (
        <div className="flex h-screen md:w-1/5 md:h-screen md:bg-gray-800 md:flex-col md:items-center md:justify-center md:gap-24 w-full flex-row sticky top-0 left-0">
            <Link className="" href="/">
                <FiHome size={80} color="#0055cc" />
            </Link>
            <div className="flex-col hidden md:flex md:gap-12">
                <NavLinks />
            </div>
        </div>
    )
}

export default Nav;