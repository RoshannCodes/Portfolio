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
            title: "2024 - Present",
            description: 'IOE Pulchowk Campus'
        },
        {
            title: 2023,
            description: 'Viswa Niketan Secondary School'
        },
        {
            title: 2021,
            description: 'Nilkantha Secondary School'
        },
    ]

    const Skills: TabItem[] = [
        {
            title: "Data Wrangling and Preprocessing",
            description: 'Proficient in cleaning, transforming and preparing large datasets using Python libraries'
        },
        {
            title: "Deep Learning for Data Science",
            description: 'Skilled in building, training, and optimizing deep learning models using TensorFlow and PyTorch for AI applications.'
        },
        {
            title: "Machine Learning and Predictive Modeling",
            description: 'Experienced in evaluating models. Knowledg of building models using Scikit-learn'
        },
    ]

    const Experience: TabItem[] = [
        {
            title: "Not Available",
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
        <div id="aboutMe" className='w-full flex md:flex-row flex-col justify-around items-center md:scroll-mt-20 scroll-mt-5'>
            <div className='imageContainer'>
                <div>
                    <Image
                        src={'/images/profilenf.jpeg'}
                        width={350}
                        height={350}
                        alt="Roshan's Image"
                        className="rounded-xl"
                    />
                </div>
            </div>

            <div className="md:w-1/2 w-full">
                <h1 className="md:text-5xl text-4xl font-bold font-allertaStencil md:mb-5 md:mt-0 my-5">
                    About Me
                </h1>
                <p className="opacity-75 text-sm max-w-xl">
                I am Roshan Koirala, a data science enthusiast studying at Pulchowk Engineering College. Skilled in programming, data analysis, and machine learning, I use tools like Python, Pandas, and Matplotlib to derive insights and solve problems. Passionate about AI and advanced analytics, I am committed to continuous learning and making a meaningful impact in data science.
                </p>

                <div className="">
                    <div className="options md:w-1/2 w-[80%] flex flex-row justify-between mt-5">

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

                    <div className="values md:min-h-[240px] mt-5 flex flex-col gap-3 items-start max-w-lg w-full">
                        {
                            currentTab.map((item: TabItem, index: number) => (
                                <div
                                    key={index}
                                    className="flex flex-col"
                                >
                                    <p className="text-sky-500 text-sm md:text-base">
                                        {item.title}
                                    </p>
                                    <p className="text-[0.8rem] md:text-sm">{item.description}</p>
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
