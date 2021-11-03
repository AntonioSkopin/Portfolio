// Icons
import { AiOutlineClose } from "react-icons/ai";

// Styles
import "../Styles/main.css";

const Menu = (props) => {
    return (
        <div className="h-screen w-screen fixed top-0 left-0 bg-white" style={{zIndex: "999", backgroundColor: "#fef9f7" }}>
            <div className="container mx-auto pt-8 h-full flex flex-col justify-between">
                <header className="px-4 flex items-center justify-between">
                    <p className="text-center text-2xl font-bold" style={{ color: "#2f292b" }}>Skopin<span className="red-text">.</span></p>
                    <AiOutlineClose
                        onClick={props.handleMenu} 
                        className="text-3xl cursor-pointer" />
                </header>
                <div className="px-4 w-full flex justify-center items-center">
                    <ul className="font-bold text-5xl text-center">
                        <li><a class="outline-text">Work</a></li>
                        <li className="py-12"><a class="outline-text">About</a></li>
                        <li><a class="outline-text">Contact</a></li>
                    </ul>
                </div>
                <div className="w-screen relative" style={{backgroundColor: "#1b1b1e"}}>
                    <div className="py-8 px-12 flex justify-between">
                        <div className="text-white">
                            <div>
                                <small className="text-gray-400">Email</small>
                                <p className="text-sm">a_skopin@icloud.com</p>
                            </div>
                            <div className="py-8">
                                <small className="text-gray-400">Phone</small>
                                <p className="text-sm">+31 6 18317710</p>
                            </div>
                        </div>
                        <div className="text-white">
                            <div>
                                <small className="text-gray-400">Based in</small>
                                <p className="text-sm">Rotterdam, the Netherlands</p>
                            </div>
                            <div className="py-8">
                                <small className="text-gray-400">Messengers</small>
                                <div className="flex">
                                    <p className="text-sm">FB MESSENGER -&nbsp;</p>
                                    <p className="text-sm">LINKEDIN -&nbsp;</p>
                                    <p className="text-sm ">FACEBOOK</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;