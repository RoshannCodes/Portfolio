'use client'
import Image from "next/image"
import { useState } from "react"

interface TabItem {
    title: number | string
    description: string
}

type TabHeaders = 'Skills' | 'Education' | 'Experience'

const AboutMe = () => {

    const [tab, setTab] = useState<TabHeaders>('Skills')

    const Education: TabItem[] = [
        {
            title: 2016,
            description: 'Some Degree'
        },
        {
            title: 2020,
            description: 'Some Degree'
        },
        {
            title: 2023,
            description: 'Some Degree'
        },
    ]

    const Skills: TabItem[] = [
        {
            title: "Title 1",
            description: 'Some skill'
        },
        {
            title: "Title 2",
            description: 'Some amazing skill'
        },
        {
            title: "Title 3",
            description: 'Data Scientist'
        },
    ]

    const Experience: TabItem[] = [
        {
            title: "2016 - 2020",
            description: 'No description available'
        },
        {
            title: "2020 - 2023",
            description: 'No description available'
        },
        {
            title: "2023 - Present",
            description: 'No description available'
        },
    ]

    const [currentTab, setcurrentTab] = useState<TabItem[]>(Skills)

    const toggleTabs: (clickedTab: TabHeaders) => void = (clickedTab: TabHeaders) => {
        if (clickedTab === 'Skills') {
            setcurrentTab(Skills)
            setTab('Skills')
        }
        else if (clickedTab === 'Education') {
            setcurrentTab(Education)
            setTab('Education')
        }
        else {
            setcurrentTab(Experience)
            setTab('Experience')
        }
    }


    return (
        <div id="aboutMe" className='w-full flex md:flex-row flex-col justify-around md:scroll-mt-20 scroll-mt-5'>
            <div className='imageContainer'>
                <div>
                    <Image
                        src={'https://media.licdn.com/dms/image/v2/D4E03AQHodzFyOwNLQA/profile-displayphoto-shrink_400_400/B4EZN2487MHEAg-/0/1732866462103?e=1741219200&v=beta&t=g_VdB1WRqU5FkvUBkL9S7RoGS2aEvNoSjw-PtZpBnq8'}
                        width={350}
                        height={350}
                        alt="Roshan's Image"
                        className="rounded-xl"
                    />
                </div>
            </div>

            <div className="">
                <h1 className="md:text-5xl text-4xl font-bold font-allertaStencil md:mb-5 md:mt-0 my-5">
                    About Me
                </h1>
                <p className="opacity-75 text-sm max-w-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, perferendis doloribus voluptas deleniti fugiat qui sequi beatae aliquam laudantium! In aut inventore dolores sit quae molestias voluptatibus eum excepturi rem, nisi iste, ut necessitatibus?
                </p>

                <div className="md:w-1/2 w-[80%]">
                    <div className="options flex flex-row justify-between mt-5">

                        {
                            ['Skills', 'Experience', 'Education'].map((item, index) =>
                            (
                                <div
                                    onClick={() => toggleTabs(item as TabHeaders)}
                                    key={index}
                                    className={`relative py-0.5 before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[2px] before:bg-sky-500 before:transition-all before:duration-300 hover:before:w-full cursor-pointer ${tab === item ? 'before:w-full' : 'before:w-0'}`}
                                >
                                    {item}
                                </div>
                            ))
                        }
                    </div>

                    <div className="values mt-5 flex flex-col gap-3 items-start justify-center">
                        {
                            currentTab.map((item: TabItem, index: number) => (
                                <div
                                    key={index}
                                    className="flex flex-col"
                                >
                                    <p className="text-sky-500">
                                        {item.title}
                                    </p>
                                    <p>{item.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
