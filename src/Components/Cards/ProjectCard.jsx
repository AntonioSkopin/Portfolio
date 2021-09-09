import IMG from "../../Assets/project-img.jpg";

const ProjectCard = (props) => {
    return (
        <div className="flex flex-col rounded-3xl w-max shadow-md transition duration-700 ease-in-out hover:shadow-xl">
            <img
                src={IMG}
                alt="Project"
                className="rounded-t-3xl w-96"
            />
            <span className="px-6 py-8 bg-white rounded-b-3xl">
                <p className="font-bold text-2xl text-dark-blue">{props.projectTitle}</p>
                <p className="pt-2 text-gray-600">{props.projectType}</p>
            </span>
        </div>
    );
};

export default ProjectCard;