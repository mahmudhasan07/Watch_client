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
                <QusSection ></QusSection>
                <Cards></Cards>
                <Parallax></Parallax>
            </div>
            <div>
                {/* <FAQ></FAQ> */}
            </div>
            <div>
            </div>
            <div>
            </div>
        </section>
    );
};

export default HomePart;