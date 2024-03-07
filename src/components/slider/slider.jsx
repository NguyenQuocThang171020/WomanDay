import { Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import './slider.css'
const Slider = () => {
    return (
        <div className='swiper'>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper">
            <SwiperSlide className='swiper-slide'>Slide 2</SwiperSlide>
            <SwiperSlide className='swiper-slide'>Slide 3</SwiperSlide>
            <SwiperSlide className='swiper-slide'>Slide 4</SwiperSlide>
        </Swiper>
    </div>
    );
}
 
export default Slider;