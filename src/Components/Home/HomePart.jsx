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
                {/* <FAQ></FAQ> */}
                <QusSection ></QusSection>
            </div>
            <div>
                <Cards></Cards>
            </div>
            <div>
                <Parallax></Parallax>
            </div>
        </section>
    );
};

export default HomePart;