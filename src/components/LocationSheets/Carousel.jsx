// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Navigation, Pagination } from 'swiper/modules';
import React, { useState } from 'react';


    export function Carousel({ card }) {
        const [current, setCurrent] = useState(0);
        const length = card.pictures.length;
    
        const nextSlide = () => {
            setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
        };
    
        const prevSlide = () => {
            setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
        };
    
        if (!Array.isArray(card.pictures) || card.pictures.length === 0) {
            return null;
        }
    
        return (
            <div className="carousel">
                <button className="left-arrow" onClick={prevSlide}>&#10094;</button>
                <img src={card.pictures[current]} alt={`Slide ${current}`} className="slide-image" />
                <button className="right-arrow" onClick={nextSlide}>&#10095;</button>
                {length > 1 && <div className="counter">{current + 1} / {length}</div>}
            </div>
        );
    }

//     return (
//         <Swiper
//             modules={[Navigation, Pagination]}
//             navigation
//             pagination={{ clickable: true }}
//             loop={true}
//             className="mySwiper"
//         >
//             {card.pictures.map((data, index) => (
//                 <SwiperSlide key={index}>
//                     <img src={data} alt={`Slide ${index}`} />
//                 </SwiperSlide>
//             ))}
//         </Swiper>
//     );
// };

