import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import Parallax from "../Slider/Parallax";
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
            <div>
                <Parallax></Parallax>
            </div>
        </section>
    );
};

export default HomePart;