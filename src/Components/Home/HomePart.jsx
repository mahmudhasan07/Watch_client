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
            <div className="">
                <Slider></Slider>
            </div>
            <div>
                <h1 className="text-4xl font-semibold">Hello Text world</h1>
                <h1 className="text-4xl font-semibold">Hello Text world</h1>
                <h1 className="text-4xl font-semibold">Hello Text world</h1>
                <h1 className="text-4xl font-semibold">Hello Text world</h1>
            </div>
        </section>
    );
};

export default HomePart;