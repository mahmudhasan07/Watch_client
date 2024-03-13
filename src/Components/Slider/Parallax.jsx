import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';


const Parallax = () => {
    return (
        <section>
            <div>
                <ParallaxBanner
                    layers={[
                        { image: 'https://i.ibb.co/QjFYQJv/swiper.jpg', speed: -15 },
                        { image: 'https://i.ibb.co/c1p1SWB/swiper2.jpg', speed: -10 },
                    ]}
                    className="aspect-[2/1] object-cover"
                />
            </div>
            {/* <div>
            <ParallaxBanner
                layers={[{ image: 'https://i.ibb.co/c1p1SWB/swiper2.jpg', speed: -15 }]}
                className="aspect-[2/1] object-cover "
            />
            </div>
            <div>
            <ParallaxBanner
                layers={[{ image: 'https://i.ibb.co/F8Xy15N/parallax.jpg', speed: -15 }]}
                className="aspect-[2/1] object-cover"
            />
            </div> */}
        </section>
    );
};

export default Parallax;