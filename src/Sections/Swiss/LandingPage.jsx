const LandingPage = () => {
    return (
        <div className="container mx-auto px-4 py-12 flex flex-col justify-center">
            <div className="text-center">
                <h1 className="font-bold leading-none text-big-xl" style={{ color: "#0d0f05" }}>
                    Hi! I'm
                    <br />
                    Antonio
                </h1>
                <p className="py-4 text-lg text-gray-800 font-light">
                    Welcome to my online space. Your Friendly Web Developer.
                </p>
            </div>
            <div className="flex justify-between py-20">
                <h1 className="text-3xl font-medium">
                    Boost your business
                    <br />
                    with 360-degree
                    <br />
                    solutions
                </h1>
                <div className="flex items-center">
                    <div className="red-bg cursor-pointer circle w-64 h-64 transition ease-in-out duration-700 transform hover:scale-110 rounded-full p-8 text-center flex items-center justify-center">
                        <p className="text-white text-xl font-medium">GET IN TOUCH</p>
                    </div>
                    <span className="flex pl-12 font-semibold">
                        <p className="transition ease-in-out duration-700 hover-to-red cursor-pointer">LINKEDIN</p>
                        <p className="px-2">/</p>
                        <p className="transition ease-in-out duration-700 hover-to-red cursor-pointer">WHATSAPP</p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;