// Components
import ProjectItem from "./ProjectItem";

// Data
import Projects from "../../Data/Projects";

const ProjectItems = () => {
    return (
        <div className="md:w-3/4">
            {
                // Loops through Projects array and returns each project
                Projects.map((project, index) => {
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