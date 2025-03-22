'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { FiUser, FiBatteryCharging, FiActivity, FiMail } from "react-icons/fi";

const NavLinks = () => {
    

    const pathName: string = usePathname();

    const links = [
        {name: "About", to: "/about", icon: <FiUser size={24} />},
        {name: "Training", to: "/training", icon: <FiBatteryCharging size={24}/>},
        {name: "Get Started", to: "/get-started", icon: <FiActivity size={24} />},
        {name: "Contact", to: "/contact", icon: <FiMail size={24} />},
    ]

    return (
        <>
            {
                links.map((link) => {
                    const {name, to, icon} = link;
                    return (
                        <Link 
                            key={`${link.name}`} href={to}
                            className={clsx(
                                'flex flex-row md:gap-2 items-center justify-start  w-full transition-all duration-300 hover:text-gray-500',
                                {
                                    'font-thin text-gray-600': pathName !== to,
                                    'font-black bg-neutral-300 md:bg-transparent text-white': pathName === to,
                                },
                            )}
                        >
                            {icon}
                            <p className=" text-lg">{name}</p>
                        </Link>
                    )
                })
            }
        </>
    )
};

export default NavLinks;