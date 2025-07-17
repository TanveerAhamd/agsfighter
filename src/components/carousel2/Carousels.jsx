import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import img1 from '../../images/before-after-blackaries (1).webp';
import img2 from '../../images/before-after-quiver.webp';
import img3 from '../../images/before-after-phantom (1).webp';
import img4 from '../../images/before-after-redtide (1).webp';
import img5 from '../../images/before-after-play.webp';

const images = [img1, img2, img3, img4, img5];

function Carousels() {
  return (
    <div className="container-fluid bg-white py-5 d-flex align-items-center justify-content-center flex-column">
      <h1 className="d-flex align-items-center justify-content-center py-3">
        Before and after samples
      </h1>

      <div className="container">
        <Swiper
          spaceBetween={20}
          slidesPerView={1} // ✅ Always 1 image per slide
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="item text-center">
                <img
                  src={img}
                  alt={`Book ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '500px',
                    objectFit: 'cover',
                    borderRadius: '8px'
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Carousels