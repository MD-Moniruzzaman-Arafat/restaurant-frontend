// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// import image
import slider1 from "../assets/home/slide1.jpg";
import slider2 from "../assets/home/slide2.jpg";
import slider3 from "../assets/home/slide3.jpg";
import slider4 from "../assets/home/slide4.jpg";
import slider5 from "../assets/home/slide5.jpg";

const OrderOnlineSlider = () => {
      return (
            <>
                  <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                              clickable: true,
                        }}
                        breakpoints={{
                              '@0.00': {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                              },
                              '@0.75': {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                              },
                              '@1.00': {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                              },
                              '@1.50': {
                                    slidesPerView: 4,
                                    spaceBetween: 50,
                              },
                        }}
                        modules={[Pagination]}
                        className="mySwiper mt-5"
                  >
                        <SwiperSlide>
                              <img src={slider1} alt="" className='relative w-full' />
                              <h1 className='text-center absolute w-full top-80 font-bold bg-slate-400 text-2xl bg-opacity-35'>Salads</h1>
                        </SwiperSlide>
                        <SwiperSlide>
                              <img src={slider2} alt="" className='relative w-full' />
                              <h1 className='text-center absolute w-full top-80 font-bold bg-slate-400 text-2xl bg-opacity-35'>Soups</h1>
                        </SwiperSlide>
                        <SwiperSlide>
                              <img src={slider3} alt="" className='relative w-full' />
                              <h1 className='text-center absolute w-full top-80 font-bold bg-slate-400 text-2xl bg-opacity-35'>pizzas</h1>
                        </SwiperSlide>
                        <SwiperSlide>
                              <img src={slider4} alt="" className='relative w-full' />
                              <h1 className='text-center absolute w-full top-80 font-bold bg-slate-400 text-2xl bg-opacity-35'>desserts</h1>
                        </SwiperSlide>
                        <SwiperSlide>
                              <img src={slider5} alt="" className='relative w-full' />
                              <h1 className='text-center absolute w-full top-80 font-bold bg-slate-400 text-2xl bg-opacity-35'>Salads</h1>
                        </SwiperSlide>
                  </Swiper>
            </>
      );
};

export default OrderOnlineSlider;