// Components
import OrangeButton from "../Components/Buttons/OrangeButton";

const AboutMe = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div>
                <h1 className="font-light text-3xl xl:w-1/2 leading-relaxed">
                    A fullstack webdeveloper driven by ideas and
                    enthusiasm. My goal is to build user friendly websites
                    and help businesses grow.
                </h1>
            </div>
            <div className="h-auto py-24 flex justify-between">
                <h1 className="w-4/5 text-xl sm:text-2xl font-semibold">2019 - Present</h1>
                <p className="font-light text-xl leading-loose">
                    My design style is simplistic yet effective and I design with a purpose! 
                    I’m well-versed in producing mobile/desktop applications and websites which satisfy 
                    clients and keep users happy.

                    I love turning my ideas into reality.
                </p>
            </div>
            <div className="text-center">
                <OrangeButton 
                    text="Download CV"
                    textColor="button-text-black"
                    width="15rem" />
            </div>
        </div>
    );
};

export default AboutMe;