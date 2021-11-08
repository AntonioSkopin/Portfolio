// Components
import InputText from "../Components/Forms/InputText";
import TextArea from "../Components/Forms/TextArea";
import OrangeButton from "../Components/Buttons/OrangeButton";

import Slide from "react-reveal/Slide";

const Contact = () => {
    return (
        <div id="contact" className="w-screen" style={{ backgroundColor: "#1b1b1e" }}>
            <div className="container mx-auto px-4 py-20 text-white">
                <div className="flex flex-col md:flex-row justify-evenly">
                    <Slide left>
                        <div>
                            <h1 className="text-6xl py-4 font-semibold w-3/4 leading-normal">
                                Let's discuss
                                your project
                            </h1>
                            <form action="https://formspree.io/f/moqyozqq" method="POST" className="py-12 flex flex-col w-max">
                                <InputText name="name" placeholder="Name*" />
                                <InputText name="email" placeholder="Email*" />
                                <TextArea name="message" placeholder="Your message*" />
                                <OrangeButton 
                                    type="button"
                                    text="Send"
                                    textColor="button-text-white" />
                            </form>
                        </div>
                    </Slide>
                    <Slide right>
                        <div className="md:pl-24 py-8">
                            <p className="text-2xl font-light leading-relaxed">
                                Besides, there's a
                                bunch of other ways to
                                contact me
                            </p>
                            <div className="py-20 pr-4 grid grid-cols-2 gap-12">
                                <div>
                                    <div>
                                        <small className="text-gray-400">Email</small>
                                        <p className="text-xl">a_skopin@icloud.com</p>
                                    </div>
                                    <div className="py-8">
                                        <small className="text-gray-400">Phone</small>
                                        <p className="text-xl">+31 6 18317710</p>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <small className="text-gray-400">Based in</small>
                                        <p className="text-xl">Rotterdam, the Netherlands</p>
                                    </div>
                                    <div className="py-8">
                                        <small className="text-gray-400">Messengers</small>
                                        <a href="https://www.instagram.com/webdev.antonio/" className="text-xl">INSTAGRAM</a>
                                        <a href="https://www.linkedin.com/" className="text-xl">LINKEDIN</a>
                                        <a href="https://www.facebook.com." className="text-xl">FACEBOOK</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default Contact;