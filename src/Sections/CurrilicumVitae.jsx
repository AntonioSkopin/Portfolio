// Components
import SubHeading from "../Components/Text/SubHeading";
import ProjectItem from "../Components/Items/ProjectItem";
import ProjectItems from "../Components/Items/ProjectItems";


const CurricilumVitae = () => {
    return (
        <section className="container mx-auto px-6 py-12">
            <div>
                <SubHeading text="Curricilum Vitae" />
                <h1 className="text-dark-blue text-2xl sm:text-5xl font-medium leading-relaxed">
                    I have worked on multiple&nbsp;
                    <br className="hidden sm:block" />
                    cool websites for businesses.
                </h1>
                <p className="text-gray-blue py-4 text-xl">From sports startups to an internship at an IT company. </p>
            </div>
            <div className="py-12 flex flex-col md:flex-row sm:justify-between">
                <ProjectItems />
                <div className="md:w-1/4 flex flex-col pt-12 md:py-0">
                    <div>
                        <p className="font-bold text-lg sm:text-xl text-gray-blue">What I do</p>
                        <p className="text-gray-blue py-2">
                            Fullstack developer & UI Designer
                        </p>
                    </div>
                    <div className="py-6">
                        <p className="font-bold text-lg sm:text-xl text-gray-blue">I work daily with</p>
                        <p className="text-gray-blue py-2">
                            HTML, CSS, Javascript, C#, Adobe XD
                        </p>
                    </div>
                    <div>
                        <p className="font-bold text-lg sm:text-xl text-gray-blue">Frameworks I use</p>
                        <p className="text-gray-blue py-2">
                            React, ASP.NET Core, Express
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CurricilumVitae;