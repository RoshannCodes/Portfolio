import Image from "next/image"
import Link from "next/link"

const MyWork = () => {

    const myWork = [
        {
            imageSrc: '/images/Image.jpg',
            title: 'The Title',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas delectus, et odit enim inventore illum nemo quaerat totam iste assumenda porro, dolorum cum.',
            link: '#'
        },
        {
            imageSrc: '/images/Image.jpg',
            title: 'The Title',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas delectus, et odit enim inventore illum nemo quaerat totam iste assumenda porro, dolorum cum.',
            link: '#'
        },
        {
            imageSrc: '/images/Image.jpg',
            title: 'The Title',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas delectus, et odit enim inventore illum nemo quaerat totam iste assumenda porro, dolorum cum.',
            link: '#'
        },
    ]

    return (
        <div id="myWork" className="flex flex-col justify-center w-full md:px-16 my-20 md:scroll-mt-20 scroll-mt-5 md:mb-28">
            <h1 className="md:text-5xl text-4xl font-bold font-allertaStencil mb-8">
                My Work
            </h1>

            <div className="flex md:flex-row flex-col gap-8 items-center w-full">
                {
                    myWork.map((item, index) => (
                        <div key={index} className="group relative overflow-hidden">
                            <Image
                                src={item.imageSrc}
                                width={300}
                                height={400}
                                alt="Image"
                                className="rounded-xl w-full object-contain"
                            />

                            <div className="absolute inset-x-0 bottom-0 h-full flex flex-col items-center justify-center bg-black/50 text-white rounded-xl z-10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out px-8 space-y-3">
                                <p className="font-bold">
                                    {item.title}
                                </p>
                                <p className="text-center text-sm">
                                    {item.description}
                                </p>
                                <Link
                                    href={item.link}
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
