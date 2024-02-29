import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Mousewheel } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/mousewheel"

const Slider = () => {
    return (
        <section className='border-2'>
            <Swiper
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Mousewheel]}
                className=" h-[600px]"
            >
                <SwiperSlide className='w-full border-2'>
                    <img src="https://i.ibb.co/QjFYQJv/swiper.jpg" className='w-full h-full object-cover object-bottom' alt="" />
                </SwiperSlide>
                <SwiperSlide className='w-full border-2'>
                    <img src="https://i.ibb.co/c1p1SWB/swiper2.jpg" className='w-full h-full object-cover object-bottom' alt="" />
                </SwiperSlide>
                <SwiperSlide className='w-full border-2'>
                    <img src="https://i.ibb.co/F8Xy15N/parallax.jpg" className='w-full h-full object-cover' alt="" />
                </SwiperSlide>
                <SwiperSlide className='w-full border-2'>
                    <img src="https://i.ibb.co/QdDFQJ3/julius-drost-uumkda-VS8r-M-unsplash.jpg" className='w-full h-full object-cover ' alt="" />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Slider;