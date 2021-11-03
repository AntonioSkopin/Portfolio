import { useEffect, useState } from "react";

// Icons
import { CgMenuLeftAlt } from "react-icons/cg";

// Components
import Menu from "./Menu";

const Navbar = () => {

    const [menuVisibility, setMenuVisibility] = useState(false);
    const [navbarBg, setNavbarBg] = useState();

    const handleMenu = () => {
        setMenuVisibility(!menuVisibility);
    };

    const handleScroll = e => {
        if (window.scrollY === 0) {
            setNavbarBg("transparent");
        } else if (window.scrollY > 0) {
            setNavbarBg("#fef9f7");
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    return(
        <header className={`w-screen fixed`} style={{zIndex: "999", backgroundColor: navbarBg }}>
            <div className="container mx-auto px-4 py-8 relative flex items-center">
                <div className="w-full flex justify-between items-center">
                    <div className="flex items-center">
                        <p className="text-2xl font-bold" style={{ color: "#2f292b" }}>Skopin<span className="red-text">.</span></p>
                        {/* DESKTOP NAV */}
                        <nav className="hidden md:block ml-24">
                            <ul className="flex font-light text-md">
                                <li><a href="#">Work</a></li>
                                <li className="mx-12"><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <p className="hidden md:block absolute right-0 font-light">🇳🇱 - Rotterdam</p>
                    {/* DESKTOP NAV */}
                    {/* MOBILE NAV */}
                    <div className="flex md:hidden">
                        <CgMenuLeftAlt 
                            onClick={handleMenu}
                            className="text-3xl cursor-pointer" 
                            style={{color: "#2f292b"}} />
                    </div>
                    {/* MOBILE NAV */}
                </div>
                {menuVisibility && <Menu handleMenu={handleMenu} />}
            </div>
        </header>
    );
};

export default Navbar;