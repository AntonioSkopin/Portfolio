import _1 from "../../Assets/newspaper.jpg";
import _2 from "../../Assets/taxi.jpg";
import _3 from "../../Assets/boxing.jpg";
import _4 from "../../Assets/player.jpg";
import _5 from "../../Assets/5.jpg";
import "../../Styles/test.css";

const ProjectsTest = () => {
    return (
        <main>
            <nav class="menu">
                <div class="menu__item">
                    <a class="menu__item-link">Newspaper</a>
                    <img class="menu__item-img" src={_1} alt="Some image"/>
                    <div class="marquee">
                        <div class="marquee__inner" aria-hidden="true">
                            <span>Newspaper</span>
                            <span>Newspaper</span>
                            <span>Newspaper</span>
                            <span>Newspaper</span>
                        </div>
                    </div>
                </div>
                <div class="menu__item">
                    <a class="menu__item-link">Admin Taxi</a>
                    <img class="menu__item-img" src={_2} alt="Some image"/>
                    <div class="marquee">
                        <div class="marquee__inner" aria-hidden="true">
                            <span>Admin Taxi</span>
                            <span>Admin Taxi</span>
                            <span>Admin Taxi</span>
                            <span>Admin Taxi</span>
                        </div>
                    </div>
                </div>
                <div class="menu__item">
                    <a class="menu__item-link">Thaiboxing 010</a>
                    <img class="menu__item-img" src={_3} alt="Some image"/>
                    <div class="marquee">
                        <div class="marquee__inner" aria-hidden="true">
                            <span>Thaiboxing 010</span>
                            <span>Thaiboxing 010</span>
                            <span>Thaiboxing 010</span>
                            <span>Thaiboxing 010</span>
                        </div>
                    </div>
                </div>
                <div class="menu__item">
                    <a class="menu__item-link">4ThePlayers</a>
                    <img class="menu__item-img" src={_4} alt="Some image"/>
                    <div class="marquee">
                        <div class="marquee__inner" aria-hidden="true">
                            <span>4ThePlayers</span>
                            <span>4ThePlayers</span>
                            <span>4ThePlayers</span>
                            <span>4ThePlayers</span>
                        </div>
                    </div>
                </div>
                <div class="menu__item">
                    <a class="menu__item-link">Shortr.</a>
                    <img class="menu__item-img" src={_5} alt="Some image"/>
                    <div class="marquee">
                        <div class="marquee__inner" aria-hidden="true">
                            <span>Shortr.</span>
                            <span>Shortr.</span>
                            <span>Shortr.</span>
                            <span>Shortr.</span>
                        </div>
                    </div>
                </div>
            </nav>
        </main>
    );
};

export default ProjectsTest;