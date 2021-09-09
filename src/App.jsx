import PrimaryButton from "./Components/Buttons/PrimaryButton";
import SecondaryButton from "./Components/Buttons/SecondaryButton";

import InputText from "./Components/Forms/InputText";
import TextArea from "./Components/Forms/TextArea";

import ProjectCard from "./Components/Cards/ProjectCard";
import TestimonialCard from "./Components/Cards/TestimonialCard";

import ProjectItem from "./Components/Items/ProjectItem";

import SubHeading from "./Components/Text/SubHeading";
import Heading from "./Components/Text/Heading";

const App = () => {
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
    )
};

export default App;