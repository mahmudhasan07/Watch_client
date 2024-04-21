import Banner from "../Banner/Banner";
import QusSection from "../FAQ/QusSection";
import FamousCollection from "../FamousCollection/FamousCollection";
import Review from "../Review/Review";
import Parallax from "../Slider/Parallax";
import Slider from "../Slider/Slider";
import Trending from "../Trending/Trending";
import Cards from "../Watchs/Cards";
import WhyUs from "../WhyUs/WhyUs";


const HomePart = () => {
    
    return (
        <section>
            <div>
                <Banner ></Banner>
            </div>
            <div>
                <Trending></Trending>
            </div>
            <div>
                <WhyUs></WhyUs>
            </div>
            <div>
                <FamousCollection></FamousCollection>
            </div>
            <div>
                <QusSection ></QusSection>

            </div>
            <div>
                <Parallax></Parallax>
            </div>
            <div>
                <Review></Review>
            </div>
        </section>
    );
};

export default HomePart;