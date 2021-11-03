// Components
import ProjectItem from "./ProjectItem";

// Styles
import "./Styles/project.css";

// Assets
import Newspaper from "../../Assets/Images/newspaper.jpg";
import Taxi from "../../Assets/Images/taxi.jpg";
import Boxer from "../../Assets/Images/boxing.jpg";
import Player from "../../Assets/Images/player.jpg";
import Shortr from "../../Assets/2.jpg";

const ProjectsList = () => {
    return (
        <main>
            <nav class="menu">
                <ProjectItem 
                    projectTitle="Newspaper"
                    projectIMG={Newspaper}
                    link="https://github.com/AntonioSkopin/Newspapr" />
                <ProjectItem 
                    projectTitle="Admin Taxi"
                    projectIMG={Taxi}
                    link="https://administratietaxi.nl" />
                <ProjectItem 
                    projectTitle="Thaiboxing 010"
                    projectIMG={Boxer}
                    link="https://thaiboxing010.com" />
                <ProjectItem 
                    projectTitle="4ThePlayers"
                    projectIMG={Player}
                    link="https://4theplayers.eu" />
                <ProjectItem 
                    projectTitle="Shortr."
                    projectIMG={Shortr}
                    link="" />
            </nav>
        </main>
    );
};

export default ProjectsList;