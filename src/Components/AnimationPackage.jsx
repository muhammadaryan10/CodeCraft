import '../../src/Packages.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


export default function AnimationPackage() {
    return (
        <div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'1'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper py-5"
            >
                <SwiperSlide>
                    <div className="p-6 sm:h-[80vh] h-[90vh] testonomical_background flex flex-col justify-center items-center">
                        <img src='https://expertcodecraft.com/wp-content/uploads/2023/09/rocket-1.webp' style={{ height: '64px', width: '64px' }} />
                        <h1 className='text-white sm:text-3xl text-xl py-2'>Basic Package</h1>
                        <p className='text-white  text-center py-2 sm:text-lg text-xs'>Book our Basic Package if you are looking for a web development service as an individual or small business. We offer affordable website development services.</p>
                        <h1 className='theme_background text-white w-100 p-3 sm:text-2xl text-sm my-3'>$249</h1>
                        <div className='overflow-y-scroll bg-transparent w-100' style={{ height: '45%' }}>
                            <ul class="">
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />1 Page</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />3 Stock Images</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />1 jQuery Slider Banner</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />Contact/Query Form</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />Social Media Integration</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />Complete W3C Certified HTML</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />48 to 72 hours TAT</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />Complete Deployment</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />100% Ownership Rights</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />100% Satisfaction Guaranteed</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />100% Unique Design Guaranteed</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />100% Money Back Guarantee*</p>
                                </li>
                            </ul>
                        </div>
                        <a href="https://expertcodecraft.com/web-design-and-development/" className="w-100 theme_color transition duration-300 hover:scale-105  p-3 my-8 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                            Order Now <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-6 sm:h-[80vh] h-[90vh] testonomical_background flex flex-col justify-center items-center">
                        <img src='https://expertcodecraft.com/wp-content/uploads/2023/09/rocket-1.webp' style={{ height: '64px', width: '64px' }} />
                        <h1 className='text-white sm:text-3xl text-xl py-2'>Startup Package</h1>
                        <p className='text-white  text-center py-2 sm:text-lg text-xs'>Book our Basic Package if you are looking for a web development service as an individual or small business. We offer affordable website development services.</p>
                        <h1 className='theme_background text-white w-100 p-3 sm:text-2xl text-sm my-3'>$449</h1>
                        <div className='overflow-y-scroll bg-transparent w-100' style={{ height: '45%' }}>
                            <ul class="">
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />1 Page</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />3 Stock Images</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />1 jQuery Slider Banner</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />Contact/Query Form</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />Social Media Integration</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />Complete W3C Certified HTML</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />48 to 72 hours TAT</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />Complete Deployment</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />100% Ownership Rights</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />100% Satisfaction Guaranteed</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />100% Unique Design Guaranteed</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />100% Money Back Guarantee*</p>
                                </li>
                            </ul>
                        </div>
                        <button href="#" className="w-100 theme_color transition duration-300 hover:scale-105  p-3 my-8 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                            Order Now <span aria-hidden="true">&rarr;</span>
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-6 sm:h-[80vh] h-[90vh] testonomical_background flex flex-col justify-center items-center">
                        <img src='https://expertcodecraft.com/wp-content/uploads/2023/09/rocket-1.webp' style={{ height: '64px', width: '64px' }} />
                        <h1 className='text-white sm:text-3xl text-xl py-2'>Standard Package</h1>
                        <p className='text-white  text-center py-2'>Book our Basic Package if you are looking for a web development service as an individual or small business. We offer affordable website development services.</p>
                        <h1 className='theme_background text-white w-100 p-3 text-2xl my-3'>$949</h1>
                        <div className='overflow-y-scroll bg-transparent w-100' style={{ height: '45%' }}>
                            <ul class="">
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />1 Page</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />3 Stock Images</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />1 jQuery Slider Banner</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />Contact/Query Form</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />Social Media Integration</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />Complete W3C Certified HTML</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />48 to 72 hours TAT</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />Complete Deployment</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />100% Ownership Rights</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />100% Satisfaction Guaranteed</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />100% Unique Design Guaranteed</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />100% Money Back Guarantee*</p>
                                </li>
                            </ul>
                        </div>
                        <button href="#" className="w-100 theme_color transition duration-300 hover:scale-105  p-3 my-8 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                            Order Now <span aria-hidden="true">&rarr;</span>
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-6 sm:h-[80vh] h-[90vh] testonomical_background flex flex-col justify-center items-center">
                        <img src='https://expertcodecraft.com/wp-content/uploads/2023/09/rocket-1.webp' style={{ height: '64px', width: '64px' }} />
                        <h1 className='text-white sm:text-3xl text-xl py-2'>Professional Package</h1>
                        <p className='text-white  text-center py-2'>Book our Basic Package if you are looking for a web development service as an individual or small business. We offer affordable website development services.</p>
                        <h1 className='theme_background text-white w-100 p-3 text-2xl my-3'>$1,449</h1>
                        <div className='overflow-y-scroll bg-transparent w-100' style={{ height: '45%' }}>
                            <ul class="">
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />1 Page</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />3 Stock Images</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />1 jQuery Slider Banner</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />Contact/Query Form</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />Social Media Integration</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />Complete W3C Certified HTML</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />48 to 72 hours TAT</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />Complete Deployment</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />100% Ownership Rights</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />100% Satisfaction Guaranteed</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />100% Unique Design Guaranteed</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />100% Money Back Guarantee*</p>
                                </li>
                            </ul>
                        </div>
                        <button href="#" className="w-100 theme_color transition duration-300 hover:scale-105  p-3 my-8 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                            Order Now <span aria-hidden="true">&rarr;</span>
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-6 sm:h-[80vh] h-[90vh] testonomical_background flex flex-col justify-center items-center">
                        <img src='https://expertcodecraft.com/wp-content/uploads/2023/09/rocket-1.webp' style={{ height: '64px', width: '64px' }} />
                        <h1 className='text-white sm:text-3xl text-xl py-2'>Business Package</h1>
                        <p className='text-white  text-center py-2'>Book our Basic Package if you are looking for a web development service as an individual or small business. We offer affordable website development services.</p>
                        <h1 className='theme_background text-white w-100 p-3 text-2xl my-3'>$2,449</h1>
                        <div className='overflow-y-scroll bg-transparent w-100' style={{ height: '45%' }}>
                            <ul class="">
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />1 Page</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />3 Stock Images</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />1 jQuery Slider Banner</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />Contact/Query Form</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />Social Media Integration</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />Complete W3C Certified HTML</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />48 to 72 hours TAT</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />Complete Deployment</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />100% Ownership Rights</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />100% Satisfaction Guaranteed</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />100% Unique Design Guaranteed</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />100% Money Back Guarantee*</p>
                                </li>
                            </ul>
                        </div>
                        <button href="#" className="w-100 theme_color transition duration-300 hover:scale-105  p-3 my-8 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                            Order Now <span aria-hidden="true">&rarr;</span>
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="p-6 sm:h-[80vh] h-[90vh] testonomical_background flex flex-col justify-center items-center">
                        <img src='https://expertcodecraft.com/wp-content/uploads/2023/09/rocket-1.webp' style={{ height: '64px', width: '64px' }} />
                        <h1 className='text-white sm:text-3xl text-xl py-2'>Corporate Package</h1>
                        <p className='text-white  text-center py-2'>Book our Basic Package if you are looking for a web development service as an individual or small business. We offer affordable website development services.</p>
                        <h1 className='theme_background text-white w-100 p-3 text-2xl my-3'>$3,949</h1>
                        <div className='overflow-y-scroll bg-transparent w-100' style={{ height: '45%' }}>
                            <ul class="">
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />1 Page</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />3 Stock Images</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />1 jQuery Slider Banner</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />Contact/Query Form</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />Social Media Integration</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />Complete W3C Certified HTML</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />48 to 72 hours TAT</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />Complete Deployment</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />100% Ownership Rights</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />100% Satisfaction Guaranteed</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />100% Unique Design Guaranteed</p>
                                </li>
                                <li class="py-2">
                                    <p class=" text-white">
                                        <FontAwesomeIcon icon={faCheck} className='theme_text mx-2' />100% Money Back Guarantee*</p>
                                </li>
                            </ul>
                        </div>
                        <button href="#" className="w-100 theme_color transition duration-300 hover:scale-105  p-3 my-8 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                            Order Now <span aria-hidden="true">&rarr;</span>
                        </button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
