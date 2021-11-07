import { Suspense, lazy } from "react";

// Components
const Navbar = lazy(() => import("../Sections/Navbar"));
const LandingPage = lazy(() => import("../Sections/LandingPage"));
const Projects = lazy(() => import("../Sections/Projects"));
const AboutMe = lazy(() => import("../Sections/AboutMe"));
const Testimonials = lazy(() => import("../Sections/Testimonials"));
const Contact = lazy(() => import("../Sections/Contact"));

const SwissHomePage = () => {
    return (
        <Suspense fallback={<h1>Wait...</h1>}>
            <div className="w-screen" style={{ backgroundColor: "#fef9f7", zIndex: "999" }}>
                <Navbar />
                <LandingPage />
                <AboutMe />
                <Projects />
                <Testimonials />
                <Contact />
            </div>
        </Suspense>
    );
};

export default SwissHomePage;