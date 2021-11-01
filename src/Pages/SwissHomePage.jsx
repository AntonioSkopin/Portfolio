import Contact from "../Sections/Swiss/Contact";
import Navbar from "../Sections/Swiss/Navbar";
import LandingPage from "../Sections/Swiss/LandingPage";
import Testimonials from "../Sections/Swiss/Testimonials";
import Projects from "../Sections/Swiss/Projects";
import AboutMe from "../Sections/Swiss/AboutMe";

const SwissHomePage = () => {
    return (
        <div className="w-screen" style={{ backgroundColor: "#fef9f7" }}>
            <Navbar />
            <LandingPage />
            <Projects />
            <AboutMe />
            <Testimonials />
            <Contact />
        </div>
    );
};

export default SwissHomePage;