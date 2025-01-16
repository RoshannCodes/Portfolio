'use client'
import Link from "next/link"
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";

const MobileNav = () => {
    const [navLinksVisible, setNavLinksVisible] = useState<boolean>(false)

    const navPaths = [
        { link: '/', name: "Home" },
        { link: '#aboutMe', name: "About" },
        { link: '#myServices', name: "Services" },
        { link: '#myWork', name: "Portfolio" },
        { link: '#contactMe', name: "Contact" },
    ]

    useEffect(() => {
        if (navLinksVisible) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [navLinksVisible]);

    const toggleNavLinksVisibility = () => {
        setNavLinksVisible(prev => !prev)
    }

    return (
        <nav className='w-full relative md:hidden flex flex-row justify-between items-center px-5 py-3 border-b border-b-white/10 z-10'>
            <div className='logo font-allertaStencil'>
                <p className='text-3xl'>
                    <span className='text-sky-500'>R</span>oshan
                </p>
            </div>

            <div
                onClick={() => toggleNavLinksVisibility()}
                className="cursor-pointer">
                <FaBars
                    className="size-6"
                />
            </div>

            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${navLinksVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setNavLinksVisible(false)}
            />

            <div
                className={`fixed top-0 right-0 w-[60%] h-screen bg-black border-r border-white/10 transform transition-transform duration-300 ease-in-out ${navLinksVisible ? 'translate-x-0' : 'translate-x-full'} border z-50 ps-2`}
            >
                <div
                    onClick={() => toggleNavLinksVisibility()}
                    className="cursor-pointer z-50 pt-4 ps-2">
                    <IoClose
                        className="size-6"
                    />
                </div>
                <div className="pt-20">
                    {navPaths.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            onClick={() => setNavLinksVisible(false)}
                            className="block py-4 px-4 hover:bg-gray-800/25 text-gray-400 transition-all duration-300"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default MobileNav