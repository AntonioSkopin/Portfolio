// Components
import SubHeading from "../Components/Text/SubHeading";
import PrimaryButton from "../Components/Buttons/PrimaryButton";

// Assets
import Man from "../Assets/man.jpg";

const LandingPage = () => {
    return (
        <div className="w-screen h-screen">
            <div className="container mx-auto flex justify-center px-6 py-24">
                <div className="flex flex-col items-center">
                    <h1 className="text-center text-dark-blue text-3xl xl:text-5xl font-medium" style={{ lineHeight: "4rem" }}>
                        Antonio Skopin
                        <br />
                        Fullstack Developer
                        <br />
                        Based in the Netherlands
                    </h1>
                    <img
                        src={Man}
                        className="rounded-full mt-16"
                        style={{ height: "55rem", width: "35rem" }} />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;