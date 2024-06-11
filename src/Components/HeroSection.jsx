import React from 'react'
import Hero from '../assets/Hero.webp'
export default function HeroSection() {
    return (
        <div>


            <section
                className="relative bg-top  shadow bg-no-repeat hero"
               
            >
                {/* <div
                    className="absolute inset-0"
                ></div> */}

                <div
                    className="relative mx-auto max-w-screen-4xl px-3 py-12  lg:flex lg:h-screen  lg:px-8"
                >
                    <div className="max-w-4xl text-start ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-2xl font-extrabold sm:text-5xl text-white py-2">

                            Top Software Development

                            <strong className="block font-extrabold theme_text py-2"> Company In USA </strong>
                        </h1>

                        <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white text-sm ">
                            Expert Code Craft is one of the best software development companies, and
                            it offers a comprehensive range of services tailored to meet
                            the evolving needs of businesses in the digital age.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <a
                                href="#"
                                className="block w-full theme_color  px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                Get Started <span aria-hidden="true">&rarr;</span>
                            </a>

                            <a
                                href="#"
                                className="block w-full  px-12 py-3 text-sm font-medium text-white hover:text-rose-700  sm:w-auto border-b"
                            >
                                Our Services <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <img
                                src='https://expertcodecraft.com/wp-content/uploads/2023/10/Daco_231819-1024x388-1.webp'
                                className="block rounded  text-sm font-medium text-white h-10 sm:h-16"
                            />
                            <img
                                src='https://expertcodecraft.com/wp-content/uploads/2023/09/trustpilot.webp'
                                className="block rounded  text-sm font-medium sm:w-auto h-10 sm:h-16"
                            />

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
