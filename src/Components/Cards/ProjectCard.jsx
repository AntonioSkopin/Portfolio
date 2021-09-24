import IMG from "../../Assets/project-img.jpg";

const ProjectCard = (props) => {
    return (
        <div className="project-card cursor-pointer flex flex-col rounded-3xl smooth-shadow transition duration-700 ease-in-out hover:shadow-xl">
            <div className="relative w-full h-full">
                <img
                    src={IMG}
                    alt="Project"
                    className="rounded-t-3xl w-full"
                />
                <div className="hovered-project-card-cta absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-gray-800 transition duration-700 ease-in-out">
                    <div className="w-full h-full flex items-center justify-center p-4">
                        <p className="text-white font-bold text-xl">View Project</p>
                    </div>
                </div>
            </div>
            <span className="px-8 py-12 bg-white rounded-b-3xl">
                <p className="font-bold text-2xl text-dark-blue">{props.Title}</p>
                <p className="pt-2 text-gray-600">{props.Type}</p>
            </span>
        </div>
    );
};

export default ProjectCard;