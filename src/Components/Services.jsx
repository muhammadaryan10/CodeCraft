import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import Packages from './Packages';
import Test from './Test';
import LogoPackages from './LogoPackages';
import SEOPackage from './SEOPackage';
import ECommercePackage from './ECommercePackage';
import AnimationPackage from './AnimationPackage';


export default function Services() {
    const [selectedPackage, setselectedPackage] = useState('Web');
    return (<>
        <div className='theme_background border-t'>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex sm:px-5 px-1 pt-24 items-center justify-center flex-col">
                    <div class="text-center lg:w-2/3 w-full">
                        {/* <p class="mb-8 leading-relaxed text-white"> <FontAwesomeIcon icon={faCircleNotch} className='theme_text mx-2' />EXPERT CODE CRAFT SERVICES</p> */}
                        <h1 class="title-font sm:text-4xl text-xl mb-4 font-medium text-white">EXPLORE NEW WAYS TO ATTRACT
                            CAPTIVATE YOUR CUSTOMERS</h1>
                        {/* <p class="mb-8 leading-relaxed text-white">Expert Code Craft is a Software Development Company in USA that provides Web Design Development, Logo Designing, Mobile Game App Development, and Digital Marketing. Our services include crafting advanced applications by expert consulting and working processes. Our focus is to drive rapid growth and agile adaptation. Our developers have a great hold on native, cross-platform, and hybrid mobile app development. Expert Code Craft provides high-quality mobile app solutions customized to meet your business's goals and targets. We aim to assist companies in modernizing intricate application environments and blending digital, SaaS, and legacy systems smoothly with speed and flexibility.</p> */}
                    </div>
                </div>
            </section>
        </div>
        <div className='flex justify-center'>
            <div className='flex justify-center Buttons rounded-4 border space-x-3 my-4'>
                <button className={`text-white hover:bg-rose-800 rounded-4 p-3 ${selectedPackage === 'Web' ? 'bg-rose-800' : ''}`} onClick={() => setselectedPackage('Web')}>Website Development </button>
                <button className={`${selectedPackage === 'Logo' ? 'bg-rose-700' : ''} text-white hover:bg-rose-800 rounded-4 p-3`} onClick={() => setselectedPackage('Logo')}>Logo Design </button>
                <button className={`${selectedPackage === 'ECOM' ? 'bg-rose-700' : ''} text-white hover:bg-rose-800 rounded-4 p-3`} onClick={() => setselectedPackage('ECOM')}>E-Commerce</button>
                <button className={`${selectedPackage === 'SEO' ? 'bg-rose-700' : ''} text-white hover:bg-rose-800 rounded-4 p-3`} onClick={() => setselectedPackage('SEO')}>SEO </button>
                <button className={`${selectedPackage === 'Animation' ? 'bg-rose-700' : ''} text-white hover:bg-rose-800 rounded-4 p-3`} onClick={() => setselectedPackage('Animation')}>Animation </button>
            </div>
        </div>
        {selectedPackage === 'Web' && <Packages />}
        {selectedPackage === 'Logo' && <LogoPackages />}
        {selectedPackage === 'SEO' && <SEOPackage />}
        {selectedPackage === 'ECOM' && <ECommercePackage />}
        {selectedPackage === 'Animation' && <AnimationPackage />}
        {/* <Test/> */}

    </>
    );
}
