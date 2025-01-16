'use client'
import Link from "next/link"

const Navbar = () => {

    return (
        <nav className='w-full hidden md:flex flex-row justify-around items-center py-3 border-b border-b-white/10'>
            <div className='logo font-allertaStencil'>
                <p className='text-3xl'>
                    <span className='text-sky-500'>R</span>oshan
                </p>
            </div>
            <div className='links flex flex-row gap-5'>
                <Link
                    href={'/'}
                    className="relative py-0.5 px-2 before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-sky-500 before:transition-all before:duration-300 hover:before:w-full"
                >
                    Home
                </Link>
                <Link
                    href={'#aboutMe'}
                    className="relative py-0.5 px-2 before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-sky-500 before:transition-all before:duration-300 hover:before:w-full"
                >
                    About
                </Link>
                <Link
                    href={'#myServices'}
                    className="relative py-0.5 px-2 before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-sky-500 before:transition-all before:duration-300 hover:before:w-full"
                >
                    Services
                </Link>
                <Link
                    href={'#myWork'}
                    className="relative py-0.5 px-2 before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-sky-500 before:transition-all before:duration-300 hover:before:w-full"
                >
                    Portfolio
                </Link>
                <Link
                    href={'#contactMe'}
                    className="relative py-0.5 px-2 before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-sky-500 before:transition-all before:duration-300 hover:before:w-full"
                >
                    Contact
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
