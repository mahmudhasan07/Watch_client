import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/mousewheel"

const Slider = () => {
    return (
        <section>
            <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="https://i.ibb.co/c1p1SWB/swiper2.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
        </section>
    );
};

export default Slider;