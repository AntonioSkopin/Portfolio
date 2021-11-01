const Navbar = () => {
    return(
        <div className="container mx-auto px-4 py-8 relative flex items-center">
            <p className="text-2xl font-bold" style={{ color: "#2f292b" }}>Skopin<span className="red-text">.</span></p>
            <ul className="flex ml-24 font-light text-sm">
                <li><a href="#">Work</a></li>
                <li className="mx-12"><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <p className="absolute right-0 font-light">🇳🇱 - Rotterdam</p>
        </div>
    );
};

export default Navbar;