import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Cleints() {
    
    return (
        <div className='theme_background py-8  bg-center  bg-cover shadow bg-no-repeat' style={{ minHeight:'100vh', backgroundImage: `url(https://expertcodecraft.com/wp-content/uploads/2023/09/podium-for-product-presentation-with-yellow-circles-3d-render-background.webp})` }}>
            <section class="">
                <div class="container mx-auto flex px-5 pt-24 items-center justify-center flex-col">
                    <div class="text-center lg:w-2/3 w-full">
                        <p class="mb-8 leading-relaxed text-white"> <FontAwesomeIcon icon={faCircleNotch} className='theme_text mx-2' />OUR CLIENTS</p>
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Partners in Success, Stronger Together</h1>
                        <p class="mb-8 leading-relaxed text-white">Discover the Breadth of Industries We've Collaborated with, Forging Mutually Successful Partnerships.</p>
                    </div>
                </div>
            </section>
            
            <section className='container  grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3  gap-4 '>
                <div className='border p-5 flex items-center'>
                    <img src='https://expertcodecraft.com/wp-content/uploads/2023/09/dalton.webp' />
                </div>
                <div className='border p-5 flex items-center'>
                    <img src='https://expertcodecraft.com/wp-content/uploads/2023/09/nickjohn.webp' />
                </div>
                <div className='border p-5 flex items-center'>
                    <img src='https://expertcodecraft.com/wp-content/uploads/2023/09/huston.webp' />
                </div>
                <div className='border p-5 flex items-center'>
                    <img src='https://expertcodecraft.com/wp-content/uploads/2023/09/skylight.webp' />
                </div>
                <div className='border p-5 flex items-center'>
                    <img src='https://expertcodecraft.com/wp-content/uploads/2023/09/jacksmith.webp' />
                </div>
                <div className='border p-5 flex items-center'>
                    <img src='https://expertcodecraft.com/wp-content/uploads/2023/09/blake-star.webp' />
                </div>
                <div className='border p-5 flex items-center'>
                    <img src='https://expertcodecraft.com/wp-content/uploads/2023/09/alex-design-studio.webp' />
                </div>
                <div className='border p-5 flex items-center'>
                    <img src='https://expertcodecraft.com/wp-content/uploads/2023/09/bahama-museum.webp' />
                </div>
            </section>
        </div>
    )
}
