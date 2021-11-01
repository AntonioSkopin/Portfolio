// Components
import ProjectCard from "../../Components/Cards/ProjectCard";
import SubHeading from "../../Components/Text/SubHeading";

// Icons
import { FiPlus } from "react-icons/fi";

const Projects = () => {
    return (
        <section className="container mx-auto px-6 py-12">
            <div>
                <SubHeading text="Portfolio" />
                <h1 className="text-dark-blue text-2xl sm:text-5xl font-semibold" style={{ lineHeight: "1.4" }}>
                    Showcase of the projects&nbsp;
                    <br className="hidden sm:block" />
                    I have worked on.
                </h1>
            </div>
            <div className="py-16 grid grid-cols-1 md:grid-cols-2 gap-14">
                <ProjectCard Title="4ThePlayers" Type="Fullstack Web App" />
                <ProjectCard Title="ShoeShop" Type="Fullstack Website" />
                <ProjectCard Title="Shortr." Type="Fullstack Web App" />
                <ProjectCard Title="Thaiboxing 010" Type="Frontend Website" />
                {/* <ProjectCard Title="Administratie Taxi" Type="Frontend Website" /> */}
            </div>
            <div className="w-full flex justify-center py-4 cursor-pointer">
                <p className="flex items-center text-blue text-lg">View more projects<FiPlus className="ml-4" /></p>
            </div>
        </section>
    );
};

export default Projects;