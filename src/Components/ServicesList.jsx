import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import '../../src/Services.css';

// import required modules
import { EffectCards } from 'swiper/modules';


export default function ServicesList() {
    const [selectedPackage, setselectedPackage] = useState('Web');
    return (<>
        <div className='theme_background border-t'>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-2 sm:px-5 pt-24 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full">
                        <p className="mb-8 leading-relaxed text-white"> <FontAwesomeIcon icon={faCircleNotch} className='theme_text mx-2' />EXPERT CODE CRAFT SERVICES</p>
                        <h1 className="title-font sm:text-4xl text-xl mb-4 font-medium text-white">Boosting Your Online Visibility</h1>
                        <p className="mb-8 leading-relaxed sm:text-lg text-xs text-white">Expert Code Craft is a Software Development Company in USA that provides Web Design Development, Logo Designing, Mobile Game App Development, and Digital Marketing. Our services include crafting advanced applications by expert consulting and working processes. Our focus is to drive rapid growth and agile adaptation. Our developers have a great hold on native, cross-platform, and hybrid mobile app development. Expert Code Craft provides high-quality mobile app solutions customized to meet your business's goals and targets. We aim to assist companies in modernizing intricate application environments and blending digital, SaaS, and legacy systems smoothly with speed and flexibility.</p>
                    </div>
                </div>
            </section>
            <section>
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper swiperList my-5"
                >
                    <SwiperSlide className='swiper-slideList ' >
                        <div className="flex flex-col text-white justify-between items-center h-100  p-0 sm:px-8 mx-3 space-y-4 text-center  py-4 ">
                            <img style={{ height: '70px', width: '70px' }} src='https://expertcodecraft.com/wp-content/uploads/2023/09/graph.webp' />
                            <h1 className='text-lg font-medium sm:text-3xl'>Web Development</h1>
                            <p className='text-gray-300'>Powerful online presence to efficiently digitalize your business operations.</p>
                            <a target='blank' href="https://expertcodecraft.com/web-design-and-development/" className="block w-full theme_color  p-2 text-xs sm:text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                                SERVICE DETAILS <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slideList '><div className="flex flex-col text-white justify-between items-center h-100  p-0 sm:px-8 mx-3 space-y-4 text-center  py-4 ">
                        <img style={{ height: '70px', width: '70px' }} src='https://expertcodecraft.com/wp-content/uploads/2023/09/graph.webp' />
                        <h1 className='text-lg font-medium sm:text-3xl '>Mobile App Development</h1>
                        <p className='text-gray-300'>Powerful online presence to efficiently digitalize your business operations.</p>
                        <a target='blank' href="https://expertcodecraft.com/mobile-application-development/" className="block w-full theme_color  p-2 text-xs sm:text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto ">
                            SERVICE DETAILS <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div></SwiperSlide>
                    <SwiperSlide className='swiper-slideList '><div className="flex flex-col text-white justify-between items-center h-100  p-0 sm:px-8 mx-3 space-y-4 text-center  py-4 ">
                        <img style={{ height: '70px', width: '70px' }} src='https://expertcodecraft.com/wp-content/uploads/2023/09/graph.webp' />
                        <h1 className='text-lg font-medium sm:text-3xl '>Software Development</h1>
                        <p className='text-gray-300'>Powerful online presence to efficiently digitalize your business operations.</p>
                        <a target='blank' href="https://expertcodecraft.com/custom-software-development/" className="block w-full theme_color  p-2 text-xs sm:text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto ">
                            SERVICE DETAILS <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div></SwiperSlide>
                    <SwiperSlide className='swiper-slideList '><div className="flex flex-col text-white justify-between items-center h-100  p-0 sm:px-8 mx-3 space-y-4 text-center  py-4 ">
                        <img style={{ height: '70px', width: '70px' }} src='https://expertcodecraft.com/wp-content/uploads/2023/09/graph.webp' />
                        <h1 className='text-lg font-medium sm:text-3xl '>Digital Marketing</h1>
                        <p className='text-gray-300'>Powerful online presence to efficiently digitalize your business operations.</p>
                        <a target='blank' href="https://expertcodecraft.com/digital-marketing-and-service/" className="block w-full theme_color  p-2 text-xs sm:text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto ">
                            SERVICE DETAILS <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div></SwiperSlide>
                    <SwiperSlide className='swiper-slideList '><div className="flex flex-col text-white justify-between items-center h-100  p-0 sm:px-8 mx-3 space-y-4 text-center  py-4 ">
                        <img style={{ height: '70px', width: '70px' }} src='https://expertcodecraft.com/wp-content/uploads/2023/09/graph.webp' />
                        <h1 className='text-lg font-medium sm:text-3xl '>Logo Designing</h1>
                        <p className='text-gray-300'>Powerful online presence to efficiently digitalize your business operations.</p>
                        <a target='blank' href="https://expertcodecraft.com/logo-design/" className="block w-full theme_color  p-2 text-xs sm:text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                            SERVICE DETAILS <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div></SwiperSlide>
                </Swiper>
            </section>
        </div>
    </>
    );
}
