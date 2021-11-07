// Components
import Testimonial from "../Components/Testimonial/Testimonial";

// Assets
import Taxi from "../Assets/taxi.jpg";
import Boxing from "../Assets/boxing.jpg";
import Player from "../Assets/player.jpg";
import Closet from "../Assets/closet.jpg";

const Testimonials = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <Testimonial 
                img={Taxi}
                owner="Nordin"
                business="Administratie Taxi"
            />
            <Testimonial 
                img={Boxing}
                owner="Sabri Boudarra"
                business="Thaiboxing010"
            />
            <Testimonial 
                img={Player}
                owner="Clancy Konadu"
                business="4ThePlayers"
            />
            <Testimonial 
                img={Closet}
                owner="Anela Sefer"
                business="Anela's Closet"
            />
        </div>
    );
};

export default Testimonials;