import { FaCode } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa";

const MyServices = () => {
    return (
        <div id="myServices" className="flex flex-col justify-center w-full md:px-16 md:my-40 my-20 md:scroll-mt-20 scroll-mt-5">
            <h1 className="md:text-5xl text-4xl font-bold font-allertaStencil mb-8">
                My Services
            </h1>

            <div className="flex md:flex-row flex-col gap-8 items-center w-full">
                <div className="icon space-y-4 p-5 rounded-lg bg-[#363636b3]/90 transition duration-300 transform hover:-translate-y-3 cursor-pointer hover:bg-sky-500/75">
                    <FaCode
                        className="w-10 h-10"
                    />
                    <h2 className="text-3xl">
                        Web Design
                    </h2>
                    <p className="opacity-75 text-sm">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo numquam quaerat molestiae, quas cum, nobis ea eligendi voluptates ex id iure quidem quae?
                    </p>
                    <p className="opacity-75 text-sm">
                        Learn more
                    </p>
                </div>

                <div className="icon space-y-4 p-5 rounded-lg bg-[#363636b3]/90 transition duration-300 transform hover:-translate-y-3 cursor-pointer hover:bg-sky-500/75">
                    <FaCode
                        className="w-10 h-10"
                    />
                    <h2 className="text-3xl">
                        Web Design
                    </h2>
                    <p className="opacity-75 text-sm">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo numquam quaerat molestiae, quas cum, nobis ea eligendi voluptates ex id iure quidem quae?
                    </p>
                    <p className="opacity-75 text-sm">
                        Learn more
                    </p>
                </div>

                <div className="icon space-y-4 p-5 rounded-lg bg-[#363636b3]/90 transition duration-300 transform hover:-translate-y-3 cursor-pointer hover:bg-sky-500/75">
                    <FaAppStore
                        className="w-10 h-10"
                    />
                    <h2 className="text-3xl">
                        App Design
                    </h2>
                    <p className="opacity-75 text-sm">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo numquam quaerat molestiae, quas cum, nobis ea eligendi voluptates ex id iure quidem quae?
                    </p>
                    <p className="opacity-75 text-sm">
                        Learn more
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MyServices
