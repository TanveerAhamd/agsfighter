import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './Carousel.css'; // 👈 make sure to import the CSS

// ✅ Correct image imports
import img1 from '../../images/amazing.webp';
import img2 from '../../images/fifties.webp';
import img3 from '../../images/scorched.webp';
import img4 from '../../images/flesh.webp';
import img5 from '../../images/jarvis.webp';
import img6 from '../../images/murder.webp';
import img7 from '../../images/other.webp';
import img8 from '../../images/saving-grace.webp';
import img9 from '../../images/unleash.webp';
import img10 from '../../images/broken.webp';
import img11 from '../../images/victory.webp';
import img12 from '../../images/ivory.webp';
import img13 from '../../images/crazygobbles.webp';
import img14 from '../../images/makeitout.webp';
import img15 from '../../images/telephoneman.webp';
import img16 from '../../images/yourfeetwalk.webp';
import img17 from '../../images/rule.webp';
import img18 from '../../images/no-takebacks.webp';
import img19 from '../../images/bloodhoney.webp';

const images = [
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11, img12,
  img13, img14, img15, img16, img17, img18, img19
];

function Carousel() {
  return (
    <div className="container my-5">
      <Swiper
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        }}
        autoplay={{ delay: 2500 }}
        modules={[Autoplay]}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="carousel-item-wrapper">
              <img src={img} alt={`Book ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
