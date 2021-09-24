// Components
import ProjectItem from "./ProjectItem";

// Data
import CvData from "../../Data/CvData";

const ProjectItems = () => {
    return (
        <div className="md:w-3/4">
            {
                // Loops through Projects array and returns each project
                CvData.map((project, index) => {
                    console.log(project);
                    return <ProjectItem
                        key={index}
                        IMG={project.IMG}
                        Title={project.Title}
                        Date={project.Date}
                        Tools={project.Tools}
                        Tasks={project.Tasks} />
                })
            }
        </div>
    );
};

export default ProjectItems;