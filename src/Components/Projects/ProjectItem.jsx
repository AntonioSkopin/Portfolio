import "./Styles/project.css";

import Slide from 'react-reveal/Slide';

const ProjectItem = props => {
    return (
        <Slide left>
            <div class="menu__item py-4">
                <a href={props.link} class="menu__item-link font-bold text-7xl md:text-9xl">{props.projectTitle}</a>
                <img class="menu__item-img" src={props.projectIMG} alt="Project image"/>
                <div class="marquee font-bold text-7xl md:text-9xl">
                    <div class="marquee__inner" aria-hidden="true">
                        <span>{props.projectTitle}</span>
                        <span>{props.projectTitle}</span>
                        <span>{props.projectTitle}</span>
                        <span>{props.projectTitle}</span>
                    </div>
                </div>
            </div>
        </Slide>
    );
};

export default ProjectItem;