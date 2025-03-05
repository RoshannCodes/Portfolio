import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const MyWork = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const myWork = [
        {
            imageSrc: '/images/npl-data.jpeg',
            title: 'Nepal Premier League Match Data Scraping & Analysis',
            description: 'Scraped match data using Python and BeautifulSoup, extracting key stats for performance insights and predictive modeling through data visualization.',
            link: 'https://github.com/RoshannCodes/NEPAL-PREMIER-LEAGUE-DATA-SCRAPPING-AND-ANALYSIS'
        },
        {
            imageSrc: '/images/gesture-paint.jpeg',
            title: 'Gesture Control Paints',
            description: 'Developed a system using computer vision and OpenCV to recognize hand gestures, enabling touchless control for various applications. Implemented real-time tracking and interaction for an intuitive user experience.',
            link: 'https://github.com/RoshannCodes/FINGER-ARTISTRY-CANVAS'
        },
        {
            imageSrc: '/images/ludo.jpeg',
            title: 'Ludo game implementation!',
            description: 'Developed a Ludo game using C++, implementing game logic, player movements, and dice mechanics for an interactive gameplay experience.',
            link: 'https://github.com/RoshannCodes/LUDO-CPP-PROJECT'
        },
    ]

    const handleItemClick = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    }

    return (
        <div id="myWork" className="flex flex-col justify-center w-full md:px-16 my-20 md:scroll-mt-20 scroll-mt-5 md:mb-28">
            <h1 className="md:text-5xl text-4xl font-bold font-allertaStencil mb-8">
                My Work
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full">
                {
                    myWork.map((item, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden h-full cursor-pointer rounded-xl transition duration-300 transform hover:-translate-y-3 max-h-80 min-h-72"
                            onClick={() => handleItemClick(index)}
                        >
                            <div className="h-full">
                                <Image
                                    src={item.imageSrc}
                                    width={300}
                                    height={400}
                                    alt="Image"
                                    className="rounded-xl w-full object-cover object-left h-full"
                                />
                            </div>

                            <div className={`absolute inset-x-0 bottom-0 h-full flex flex-col items-center justify-center 
                                bg-black/50 text-white rounded-xl z-10 
                                ${activeIndex === index ? 'translate-y-0' : 'translate-y-full'}
                                group-hover:translate-y-0 
                                transition-transform duration-300 ease-in-out px-8 space-y-3`}
                            >
                                <p className="font-bold text-center">
                                    {item.title}
                                </p>
                                <p className="text-center text-sm">
                                    {item.description}
                                </p>
                                <Link
                                    href={item.link}
                                    target="_blank"
                                >
                                    <RedirectIcon
                                        classes={'size-6 bg-white text-black box-content p-2 rounded-full'}
                                    />
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div
                className="text-center mt-8"
            >
                <Link
                    href={'https://github.com/RoshannCodes'}
                    target="_blank"
                    className="border border-sky-500 text-sky-500 hover:text-white hover:bg-sky-500 transition duration-300 py-2 px-5 rounded-xl">
                    See more
                </Link>
            </div>
        </div>
    )
}

export default MyWork

const RedirectIcon = ({ classes }: { classes: string }) => {
    return <svg
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={classes}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
}