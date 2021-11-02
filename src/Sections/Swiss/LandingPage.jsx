const LandingPage = () => {
    return (
        <div className="h-screen container mx-auto px-4 py-12 flex flex-col justify-center">
            <div>
                <h1 className="font-bold text-center leading-none text-8xl md:text-9xl xl:text-big-xl transition ease-in-out duration-700" style={{ color: "#0d0f05" }}>
                    <span className="outline-text">Hi! I'm</span>
                    <br />
                    <span className="outline-txt">Antonio</span><span className="red-text">.</span>
                </h1>
                <div className="w-full flex justify-center">
                    <p className="w-3/5 md:w-full py-4 text-center text-sm md:text-md xl:text-lg text-gray-800 font-light leading-relaxed">
                        A fullstack developer with a passion for design. Scroll to learn more about me
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;