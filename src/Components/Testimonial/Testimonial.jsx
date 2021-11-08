// Icons
import { FaQuoteLeft } from "react-icons/fa";

import Slide from 'react-reveal/Slide';

const Testimonial = props => {
    return (
        <Slide bottom>
            <div className="flex flex-col md:flex-row py-12">
                <img src={props.img} alt="" className="py-6 md:py-0 md:pr-12 w-full md:w-1/2" />
                <div className="flex flex-col justify-between">
                    <div>
                        <FaQuoteLeft className="text-4xl red-text" />
                        <h1 className="text-4xl leading-relaxed py-6">
                            Bondlayer made our process so simple! 
                            We can design and test in use immediatly.
                        </h1>
                    </div>
                    <div>
                        <p>{props.owner}</p>
                        <p className="font-semibold text-xl">{props.business}</p>
                    </div>
                </div>
            </div>
        </Slide>
    );
};

export default Testimonial;