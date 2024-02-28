import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import Slider from "../Slider/Slider";


const HomePart = () => {
    return (
        <section>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <FAQ></FAQ>
            </div>
            <div className="96">
                <Slider></Slider>
            </div>
        </section>
    );
};

export default HomePart;