import PrimaryButton from "./Buttons/PrimaryButton";
import SecondaryButton from "./Buttons/SecondaryButton";

import InputText from "./Forms/InputText";
import TextArea from "./Forms/TextArea";

import ProjectCard from "./Cards/ProjectCard";
import TestimonialCard from "./Cards/TestimonialCard";

import ProjectItem from "./Items/ProjectItem";

import SubHeading from "./Text/SubHeading";
import Heading from "./Text/Heading";

const Components = () => {
    return (
        <div className="w-screen h-full p-12">
            <PrimaryButton text="Primary" />
            &nbsp;&nbsp;
            &nbsp;&nbsp;
            <SecondaryButton text="Secondary" />
            <br /><br />
            <InputText placeholder="Name" name="name" />
            <br /><br />
            <TextArea placeholder="Message" />
            <br /><br />
            <span className="flex items-center">
                <ProjectCard projectTitle="AdministratieTaxi" projectType="Website" />
                &nbsp;&nbsp;
                &nbsp;&nbsp;
                &nbsp;&nbsp;
                &nbsp;&nbsp;
                <ProjectCard projectTitle="Shoeshop" projectType="Web app" />
            </span>
            <br /><br />
            <TestimonialCard />
            <br /><br />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <ProjectItem />
            <br /><br />
            <SubHeading />
            <Heading />
        </div>
    );
};

export default Components;