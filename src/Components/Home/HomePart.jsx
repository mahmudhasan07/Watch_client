import Banner from "../Banner/Banner";
import QusSection from "../FAQ/QusSection";
import Parallax from "../Slider/Parallax";
import Slider from "../Slider/Slider";
import Cards from "../Watchs/Cards";


const HomePart = () => {
    return (
        <section>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <QusSection ></QusSection>

            </div>
            <div>
                <Parallax></Parallax>
            </div>
            <div>
            </div>
        </section>
    );
};

export default HomePart;