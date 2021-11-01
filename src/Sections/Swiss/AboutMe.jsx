import { FiDownload } from "react-icons/fi";

const AboutMe = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <div>
                <h1 className="font-light text-3xl w-1/2 leading-relaxed">
                    A UI UX designer driven by ideas and
                    enthusiasm. I always keep an eye for clean
                    nice visual design for website and
                    applications.
                </h1>
            </div>
            <div className="h-auto py-24 flex justify-between">
                <h1 className="w-4/5 text-2xl font-semibold">2019 - Present</h1>
                <p className="font-light text-xl leading-loose">
                    My design style is simplistic yet effective and I design with a purpose! 
                    I’m well-versed in producing mobile/desktop applications and websites which satisfy 
                    clients and keep users happy.
                </p>
            </div>
            <div className="text-center">
                <button class="learn-more" style={{ width: "15rem" }}>
                    <span class="circle" aria-hidden="true">
                        <span class="icon arrow"></span>
                    </span>
                    <span class="button-text button-text-black">Download CV</span>
                </button>
            </div>
        </div>
    );
};

export default AboutMe;