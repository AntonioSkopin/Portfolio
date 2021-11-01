import "../../Styles/Button/button.css";

const Contact = () => {
    return (
        <div className="w-screen" style={{ backgroundColor: "#1b1b1e" }}>
            <div className="container mx-auto px-4 py-20 text-white">
                {/* <p className="text-xl">Contact me</p> */}
                <div className="flex flex-col md:flex-row justify-evenly">
                    <div>
                        <h1 className="text-6xl py-4 font-semibold w-3/4 leading-normal">
                            Let's discuss
                            your project
                        </h1>
                        <form className="py-12 flex flex-col w-max">
                            <input 
                                type="text"
                                placeholder="Name*"
                                className="border-b-2 border-white bg-transparent text-white focus:outline-none pb-2" />
                            <input 
                                type="text"
                                placeholder="Email*"
                                className="border-b-2 border-white bg-transparent text-white focus:outline-none pb-2 my-12" />
                            <textarea 
                                name=""
                                placeholder="Your message"
                                className="border-b-2 border-white bg-transparent text-white focus:outline-none pb-2"
                                cols="30" 
                                rows="4"></textarea>
                            <button class="my-12 learn-more">
                                <span class="circle" aria-hidden="true">
                                    <span class="icon arrow"></span>
                                </span>
                                <span class="button-text button-text-white">Send</span>
                            </button>
                        </form>
                    </div>
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
                                    <p className="text-xl">INSTAGRAM</p>
                                    <p className="text-xl">LINKEDIN</p>
                                    <p className="text-xl">WHATSAPP</p>
                                    <p className="text-xl">FACEBOOK</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;