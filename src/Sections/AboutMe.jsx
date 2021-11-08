// Components
import OrangeButton from "../Components/Buttons/OrangeButton";

// Assets
import CV from "../Assets/CV.pdf";

import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const AboutMe = () => {
    return (
        <div id="about" className="container mx-auto px-4 pt-12">
            <Fade left>
                <h1 className="text-2xl md:text-5xl font-light leading-loose md:leading-relaxed">
                    A fullstack webdeveloper driven by ideas and
                    enthusiasm. My goal is to build user friendly websites
                    and help businesses grow. My design style is simplistic yet effective and I design with a purpose! 
                    I’m well-versed in producing mobile/desktop applications and websites which satisfy 
                    clients and keep users happy.
                </h1>
            </Fade>
            <Zoom top>
                <div className="text-center py-8">
                    <OrangeButton 
                        type="link"
                        location={CV}
                        text="Download CV"
                        textColor="button-text-black"
                        width="15rem" />
                </div>
            </Zoom>
        </div>
    );
};

export default AboutMe;