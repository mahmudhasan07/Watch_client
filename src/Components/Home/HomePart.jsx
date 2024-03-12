import Banner from "../Banner/Banner";
import QusSection from "../FAQ/QusSection";
import Parallax from "../Slider/Parallax";
import Slider from "../Slider/Slider";
import Cards from "../Watchs/Cards";
import WhyUs from "../WhyUs/WhyUs";


const HomePart = () => {
    return (
        <section>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <WhyUs></WhyUs>
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