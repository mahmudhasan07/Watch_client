import React, { Children } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';


const Parallax = () => {
    return (
        <section>
            <ParallaxBanner className="aspect-[2/1]"
                layers={[{ image: '/static/banner.jpg', speed: -15 }, {
                    children: (
                        <div>
                            <h1 className="text-8xl text-white font-thin">Hello World!</h1>
                        </div>
                    )
                }]}>
            </ParallaxBanner>

        </section>
    );
};

export default Parallax;