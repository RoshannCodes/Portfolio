import { FaPhoneAlt, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const ContactMe = () => {
    return (
        <div id="contactMe" className="flex md:flex-row flex-col md:justify-center md:gap-20 gap-14 w-full md:px-16 md:mt-40 my-20 md:scroll-mt-0 scroll-mt-5">
            <div className="flex items-start flex-col md:w-1/2 w-full">
                <h1 className="md:text-5xl text-4xl w-full font-bold font-allertaStencil mb-8">
                    Contact Me
                </h1>

                <div className="flex flex-col gap-5">
                    <div className="flex flex-row items-center gap-2">
                        <BiLogoTelegram
                            className="w-4 h-4 text-sky-500"
                        />
                        <p>
                            contact@example.com
                        </p>
                    </div>

                    <div className="flex flex-row items-center gap-2">
                        <FaPhoneAlt
                            className="w-4 h-4 text-sky-500"
                        />
                        <p>
                            9777777770
                        </p>
                    </div>

                    <div className="socials flex flex-row items-center gap-3">
                        <Link
                            href={'#'}
                            target="_blank"
                        >
                            <FaFacebook className="w-6 h-6" />
                        </Link>
                        <Link
                            href={'#'}
                            target="_blank"
                        >
                            <FaXTwitter className="w-6 h-6" />
                        </Link>
                        <Link
                            href={'#'}
                            target="_blank"
                        >
                            <FaInstagram className="w-6 h-6" />
                        </Link>
                        <Link
                            href={'#'}
                            target="_blank"
                        >
                            <FaLinkedin className="w-6 h-6" />
                        </Link>
                    </div>

                    <div className="mt-5">
                        <button
                        type="button"
                        className="px-7 py-2 bg-sky-500 hover:bg-sky-700 transition duration-300 rounded-lg"
                        >
                            Download CV
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex flex-row gap-8 md:w-1/2 w-full">
                <form
                    action=""
                    className="space-y-4 w-full"
                >
                    <div className="w-full">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full bg-[#2D2D2D] focus:outline-none focus:border-none focus:outline-sky-500 border-sky-200 px-5 md:py-2 py-2.5 rounded-lg text-white"
                        />
                    </div>
                    <div className="w-full">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full bg-[#2D2D2D] focus:outline-none focus:border-none focus:outline-sky-500 border-sky-200 px-5 md:py-2 py-2.5 rounded-lg text-white"
                        />
                    </div>
                    <div className="w-full">
                        <textarea
                            rows={10}
                            placeholder="Your Message"
                            className="w-full bg-[#2D2D2D] focus:outline-none focus:border-none focus:outline-sky-500 border-sky-200 px-5 md:py-1 py-2 rounded-lg text-white"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="px-7 py-2 rounded-lg bg-sky-500 hover:bg-sky-700 transition duration-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactMe