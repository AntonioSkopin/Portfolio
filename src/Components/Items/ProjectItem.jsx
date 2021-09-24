import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

const ProjectItem = (props) => {

    const [isItemOpen, setIsItemOpen] = useState(false);

    const toggleItem = () => {
        setIsItemOpen(!isItemOpen);
    }

    return (
        <div>
            <span className="flex items-center">
                <div onClick={toggleItem}
                    className="bg-light-blue w-20 h-20 rounded-xl transition duration-500 ease-in-out transform hover:-rotate-12 cursor-pointer flex items-center justify-center">
                    <img src={props.IMG} alt="Logo" className="p-3 sm:p-4" />
                </div>
                <div className="flex flex-col pl-4">
                    <p className="font-bold text-lg sm:text-xl text-dark-blue">{props.Title}</p>
                    <p className="text-gray-blue py-1 text-sm sm:text-md">{props.Date}</p>
                    {
                        // Only display couple of tools when item is not toggled
                        !isItemOpen && <p className="text-gray-blue text-sm sm:text-md">{props.Tools.substr(0, 25)}...</p>
                    }
                </div>
            </span>
            {
                !isItemOpen && <span className="flex w-screen items-center mt-2">
                    <hr className="w-75 sm:w-1/2 2xl:w-1/4" />
                    <IoIosArrowDown
                        onClick={toggleItem}
                        className="text-3xl text-gray-300 ml-4 cursor-pointer transition duration-500 ease-in-out hover:text-gray-600" />
                </span>
            }
            {
                isItemOpen &&
                <div className="transition duration-500 ease-in-out">
                    <div className="flex flex-col pl-24 pt-4">
                        <p className="font-bold text-lg sm:text-xl text-gray-blue">Tooling</p>
                        <p className="text-gray-blue w-1/1 sm:w-1/2">
                            {props.Tools}
                        </p>
                    </div>
                    <div className="flex flex-col pl-24 pt-6">
                        <p className="font-bold text-lg sm:text-xl text-gray-blue">Tasks & Responsibilities</p>
                        <ul className="text-gray-blue w-3/4">
                            {
                                props.Tasks.map((task, index) => {
                                    return <li className="py-2 md:py-1" key={index}>{task}</li>
                                })
                            }
                        </ul>
                    </div>
                    <span className="flex w-screen items-center mt-2">
                        <hr className="w-4/5 sm:w-1/2 2xl:w-1/4" />
                        <IoIosArrowUp
                            onClick={toggleItem}
                            className="text-3xl text-gray-300 ml-4 cursor-pointer transition duration-500 ease-in-out hover:text-gray-600" />
                    </span>
                </div>
            }
        </div>
    );
};

export default ProjectItem;