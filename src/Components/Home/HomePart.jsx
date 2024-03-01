import Banner from "../Banner/Banner";
import QusSection from "../FAQ/QusSection";
import Parallax from "../Slider/Parallax";
import Slider from "../Slider/Slider";


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
                <Parallax></Parallax>
            </div>
        </section>
    );
};

export default HomePart;