import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Carousel = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    const imgLink = [
        {alt: 'image 1', link: 'https://wallpaperaccess.com/full/5407223.jpg'},
        {alt: 'image 2', link: 'https://wallpapers.com/images/featured/d4w62mny8rdusxe0.jpg'},
        {alt: 'image 3', link: 'https://wallpaperaccess.com/full/1774985.jpg'},
        {alt: 'image 4', link: 'https://wallpapercave.com/wp/wp3194644.jpg'},
        {alt: 'image 5', link: 'https://wallpaperboat.com/wp-content/uploads/2020/02/education-03.jpg'},
        {alt: 'image 6', link: 'https://wallpapercave.com/wp/wp3191234.jpg'},
        {alt: 'image 7', link: 'https://cdn.wallpapersafari.com/10/62/jZwREl.jpg'},
    ];

    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        className="mySwiper"
        modules={[Autoplay, Pagination, Navigation]}
        navigation={true}
        onAutoplayTimeLeft={onAutoplayTimeLeft}>
            {imgLink.map((img, indx) => (
                <SwiperSlide key={indx}>
                    <div className=' relative ring w-full h-full'>
                        <img src={img.link} className=' w-full h-full' />
                    </div>
                </SwiperSlide>
            ))}
            
            <div className="autoplay-progress z-20" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
            </div>
        </Swiper>
    );
}

export default Carousel; 