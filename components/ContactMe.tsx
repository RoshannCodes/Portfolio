'use client'
import { FaPhoneAlt, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { BiLogoTelegram } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Loader from "./ui/Loader";

interface Errors {
    from_name?: string
    email?: string
    message?: string
}

const ContactMe = () => {

    const [messageStatus, setMessageStatus] = useState<string>("");
    const [errors, setErrors] = useState<Errors>({});
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const socials = [
        {
            icon: <FaFacebook className="w-6 h-6" />,
            link: 'https://www.facebook.com/roshan.koirala.14473',
        },
        {
            icon: <FaXTwitter className="w-6 h-6" />,
            link: 'https://x.com/Roshaneyyy',
        },
        {
            icon: <FaInstagram className="w-6 h-6" />,
            link: 'https://www.instagram.com/roshannn.ipynb',
        },
        {
            icon: <FaLinkedin className="w-6 h-6" />,
            link: 'https://www.linkedin.com/in/roshankoirala',
        },
    ]

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validateForm = () => {
        const newErrors: Errors = {};
        if (!formData.from_name.trim()) newErrors.from_name = "Please enter your name.";
        if (!formData.email.trim()) newErrors.email = "Email address is required.";
        else if (!emailRegex.test(formData.email)) newErrors.email = "Please enter a valid email address.";
        if (!formData.message.trim()) newErrors.message = "Message is required.";
        else if (formData.message.length < 10) newErrors.message = "Message must be at least 10 characters long.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const [formData, setFormData] = useState({
        from_name: "",
        to_name: "Roshan Koirala",
        email: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsLoading(true)
        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                formData,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );
            setMessageStatus("SUCCESS! Your message has been sent.");
            setFormData({
                from_name: "",
                to_name: "Roshan Koirala",
                email: "",
                message: "",
            });
        }
        catch (error: any) {
            setMessageStatus("Failed to send the message! Please try again!");
            console.error("Error sending message: ", error.text);
        }
        finally {
            setTimeout(() => {
                setMessageStatus("")
            }, 5000);
            setIsLoading(false)
        }
    };


    return (
        <div id="contactMe" className="flex md:flex-row flex-col md:justify-center md:gap-20 gap-14 w-full md:px-16 my-20 md:scroll-mt-0 scroll-mt-5">
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
                            koiralaroshan321@gmail.com
                        </p>
                    </div>

                    <div className="flex flex-row items-center gap-2">
                        <FaPhoneAlt
                            className="w-4 h-4 text-sky-500"
                        />
                        <p>
                            9749329752
                        </p>
                    </div>

                    <div className="socials flex flex-row items-center gap-3">
                        {
                            socials.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.link}
                                    target="_blank"
                                >
                                    {item.icon}
                                </Link>
                            ))
                        }
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
                    onSubmit={handleSubmit}
                    className="space-y-4 w-full"
                >
                    <div className="w-full">
                        <input
                            type="text"
                            name="from_name"
                            value={formData.from_name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full bg-[#2D2D2D] focus:outline-none focus:border-none focus:outline-sky-500 border-sky-200 px-5 md:py-2 py-2.5 rounded-lg text-white"
                        />
                        {errors.from_name && <p className="text-red-500 text-center mt-2 -mb-2 text-xs sm:text-sm">{errors.from_name}</p>}
                    </div>
                    <div className="w-full">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="w-full bg-[#2D2D2D] focus:outline-none focus:border-none focus:outline-sky-500 border-sky-200 px-5 md:py-2 py-2.5 rounded-lg text-white"
                        />
                        {errors.email && <p className="text-red-500 text-center mt-2 -mb-2 text-xs sm:text-sm">{errors.email}</p>}
                    </div>
                    <div className="w-full">
                        <textarea
                            rows={10}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            className="w-full bg-[#2D2D2D] focus:outline-none focus:border-none focus:outline-sky-500 border-sky-200 px-5 md:py-1 py-2 rounded-lg text-white"
                        />
                        {errors.message && <p className="text-red-500 text-center mt-1 -mb-2 text-xs sm:text-sm">{errors.message}</p>}
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-32 h-[2.6rem] px-7 rounded-lg bg-sky-500 hover:bg-sky-700 transition duration-300 disabled:opacity-70 flex items-center justify-center"
                        >
                            {isLoading ? <Loader size="h-5 w-5" /> : "Submit"}
                        </button>
                    </div>
                    {messageStatus && (
                        <p
                            className={`mt-4 ${messageStatus.includes("SUCCESS") ? "text-[#0EEA2F]" : "text-[#fc0303]"} text-center`}
                        >
                            {messageStatus}
                        </p>
                    )}
                </form>
            </div>
        </div>
    )
}

export default ContactMe