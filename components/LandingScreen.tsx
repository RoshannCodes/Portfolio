const LandingScreen = () => {
    return (
        <div className="min-h-screen w-full flex flex-row items-center justify-start md:px-16 bg-[url('/images/profilenbg.jpeg')] bg-no-repeat md:bg-contain bg-cover bg-[center_left_40%] [clip-path:inset(0_0_10%_0)] bg-fixed md:bg-scroll md:mb-10 mb-5">
            <div className="px-7 md:px-0">
                <p className="md:text-2xl text-xl leading-normal opacity-75 font-allertaStencil">
                    Aspiring Data Scientist
                </p>
                <p className="md:text-5xl text-4xl font-bold leading-snug ">
                    Hi, I&apos;m <span className="text-sky-500 font-allertaStencil">Roshan</span>  
                    <br />
                    From Nepal
                </p>
            </div>
            {/* <div className="imageContainer">
                <div className="rounded-full">
                    <Image
                    src={'https://media.licdn.com/dms/image/v2/D4E03AQHodzFyOwNLQA/profile-displayphoto-shrink_400_400/B4EZN2487MHEAg-/0/1732866462103?e=1741219200&v=beta&t=g_VdB1WRqU5FkvUBkL9S7RoGS2aEvNoSjw-PtZpBnq8'}
                    width={350}
                    height={350}
                    alt="Roshan's Image"
                    className="rounded-full"
                    />
                </div>
            </div> */}
        </div>
    )
}

export default LandingScreen
