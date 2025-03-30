import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';


export function Carousel({card}) {

    return (
        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            className="mySwiper"
        >
            {card.pictures.map((data, index) => (
                <SwiperSlide key={index}>
                    <img src={data} alt={`Slide ${index}`} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

