import Logo from "../../Assets/small_4tp_logo.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

// Data
// import Projects from "../../Data/Projects.json";

const ProjectItem = () => {
    const [isItemOpen, setIsItemOpen] = useState(false);

    const toggleItem = () => {
        setIsItemOpen(!isItemOpen);
    }

    const projects = [
        {
            "ID": "0",
            "Title": "Freelance Fullstack Developer",
            "Date": "March 2021 - now",
            "Tools": "React, Node.js, TailwindCSS, Express, CSS, Git, Figma, Adobe XD",
            "Tasks": "- Build a web app for players & coaches - Build a webshop - Build a website for potential clients"
        },
        {
            "ID": "1",
            "Title": "Freelance Front-end Developer",
            "Date": "February 2021 - now",
            "Tools": "HTML, CSS, TailwindCSS",
            "Tasks": "- Build a web app for players & coaches - Build a webshop - Build a website for potential clients"
        },
        {
            "ID": "2",
            "Title": "Freelance Fullstack Developer",
            "Date": "March 2021 - now",
            "Tools": "React, Node.js, TailwindCSS, Express, CSS, Git, Figma, Adobe XD",
            "Tasks": "- Build a web app for players & coaches - Build a webshop - Build a website for potential clients"
        },
        {
            "ID": "3",
            "Title": "Freelance Fullstack Developer",
            "Date": "March 2021 - now",
            "Tools": "React, Node.js, TailwindCSS, Express, CSS, Git, Figma, Adobe XD",
            "Tasks": "- Build a web app for players & coaches - Build a webshop - Build a website for potential clients"
        }
    ];

    const items = projects.map(item =>
        <div key={item.ID}>
            <span className="flex items-center">
                <div onClick={toggleItem}
                    className="bg-light-blue w-20 h-20 rounded-xl transition duration-500 ease-in-out transform hover:-rotate-12 cursor-pointer flex items-center justify-center">
                    <img src={Logo} alt="Logo" className="p-3 sm:p-4" />
                </div>
                <div className="flex flex-col pl-4">
                    <p className="font-bold text-lg sm:text-xl text-dark-blue">{item.Title}</p>
                    <p className="text-gray-blue text-sm sm:text-md">{item.Date}</p>
                    {
                        // Only display couple of tools when item is not toggled
                        !isItemOpen && <p className="text-gray-blue text-sm sm:text-md">{item.Tools}</p>
                    }
                </div>
            </span>
            {
                !isItemOpen && <span className="flex w-screen items-center mt-2">
                    <hr className="w-4/5 sm:w-1/2" />
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
                            React, Node.js, TailwindCSS, Express, CSS, Git, Figma, Adobe XD
                        </p>
                    </div>
                    <div className="flex flex-col pl-24 pt-6">
                        <p className="font-bold text-lg sm:text-xl text-gray-blue">Tasks & Responsibilities</p>
                        <p className="text-gray-blue w-1/1">
                            - Build a web app for players & coaches
                            <br />
                            - Build a webshop
                            <br />
                            - Build a website for potential clients
                        </p>
                    </div>

                    <span className="flex w-screen items-center mt-2">
                        <hr className="w-4/5 sm:w-1/2" />
                        <IoIosArrowUp
                            onClick={toggleItem}
                            className="text-3xl text-gray-300 ml-4 cursor-pointer transition duration-500 ease-in-out hover:text-gray-600" />
                    </span>
                </div>
            }
        </div>
    )

    return (
        <div>
            {items}
        </div>
    );
};

export default ProjectItem;