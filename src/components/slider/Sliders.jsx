/*eslint-disable*/
import { Autoplay, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';


const Sliders = ({ images, icon }) => {
    return (
        <div>
            <Swiper
                modules={[Virtual, Autoplay]}
                loop={true}
                loopedSlides={images?.length}
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                }}
                speed={25000}
                slidesPerView={6.5}
                centeredSlides={true}
                spaceBetween={-20}
                breakpoints={{
                    320: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    575: {
                        slidesPerView: 3,
                        spaceBetween: 50
                    },
                    990: {
                        slidesPerView: `${icon ? 6.5 : 4.5}`,
                        spaceBetween: `${icon ? 0 : 20}`
                    },
                }}
            >
                {images?.map((logo, index) => (
                    <SwiperSlide key={index} virtualIndex={index}>
                        <img src={logo} alt={`Slide ${index}`} className={`${icon ? 'w-[173px]' : 'w-auto'} ${!icon ? "h-auto" : "h-[55px]"} `} />
                        <div className={`flex font-secondary justify-between md:mt-2 ${icon && 'hidden'}`}>
                            <h1 className='md:text-[12px] bg-slate-100 py-1 rounded-md border px-3'>Plumbing</h1>
                            <h1 className='md:text-[16px] font-secondary md:leading-[22px]'>Nov 26, 2021</h1>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Sliders;
