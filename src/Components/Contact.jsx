import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from '@emailjs/browser';
import { useRef } from "react";


export default function Contact ({ contactRef }) {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_06fa1pr', 'template_f5utlag', form.current, {
          publicKey: 'sp7-Jy2sEbeevAri7',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            alert('SUCCESS')
          },
          (error) => {
            console.log('FAILED...', error.text);
            alert('FAILED...')
          },
        );
    };
    const contactMethods = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
            ,
            title: "Join our community",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            link: {
                name: "Join our Discord",
                href: "javascript:void(0)"
            },
        },
        {
            icon:
                <svg className="w-6 h-6" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_17_80)">
                        <path d="M15.1003 43.5C33.2091 43.5 43.1166 28.4935 43.1166 15.4838C43.1166 15.0619 43.1072 14.6307 43.0884 14.2088C45.0158 12.815 46.679 11.0886 48 9.11066C46.205 9.90926 44.2993 10.4308 42.3478 10.6575C44.4026 9.42588 45.9411 7.491 46.6781 5.21159C44.7451 6.35718 42.6312 7.16528 40.4269 7.60128C38.9417 6.02318 36.978 4.97829 34.8394 4.62816C32.7008 4.27803 30.5064 4.64216 28.5955 5.66425C26.6846 6.68635 25.1636 8.30947 24.2677 10.2827C23.3718 12.2559 23.1509 14.4693 23.6391 16.5807C19.725 16.3842 15.8959 15.3675 12.4 13.5963C8.90405 11.825 5.81939 9.33893 3.34594 6.29909C2.0888 8.46655 1.70411 11.0314 2.27006 13.4722C2.83601 15.9131 4.31013 18.047 6.39281 19.44C4.82926 19.3904 3.29995 18.9694 1.93125 18.2119V18.3338C1.92985 20.6084 2.7162 22.8132 4.15662 24.5736C5.59704 26.334 7.60265 27.5412 9.8325 27.99C8.38411 28.3863 6.86396 28.4441 5.38969 28.1588C6.01891 30.1149 7.24315 31.8258 8.89154 33.0527C10.5399 34.2796 12.5302 34.9613 14.5847 35.0025C11.0968 37.7423 6.78835 39.2283 2.35313 39.2213C1.56657 39.2201 0.780798 39.1719 0 39.0769C4.50571 41.9676 9.74706 43.5028 15.1003 43.5Z" fill="currentColor" />
                    </g>
                    <defs>
                        <clipPath id="clip0_17_80">
                            <rect width="48" height="48" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

            ,
            title: "Follow us on Twitter",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            link: {
                name: "Send us DMs",
                href: "javascript:void(0)"
            },
        },
    ]
    return (
        <main className="relative pt-28 theme_background" ref={contactRef}>
          
            <div className="relative z-10 max-w-screen-xl mx-auto text-white  sm:px-4 md:px-8">
                <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
                <p class="mb-8 leading-relaxed text-white"> <FontAwesomeIcon icon={faCircleNotch} className='theme_text mx-2' />Contact Us</p>

                    <p className="text-white text-3xl font-semibold sm:text-4xl">
                        Get in touch
                    </p>
                    <p className="text-gray-300">
                        We’d love to hear from you! Please fill out the form bellow.
                    </p>
                </div>
                <div className="mt-12 mx-auto px-4 p-8 testonomical_background shadow-lg sm:max-w-lg sm:px-8 sm:rounded-xl">
                    <form
                    ref={form} onSubmit={sendEmail}
                        className="space-y-5"
                    >
                        <div>
                            <label className="font-medium">
                                Full name
                            </label>
                            <input
                                type="text"
                                name="user_name"
                                required
                                className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                name="user_email"
                                required
                                className="w-full mt-2 px-3 py-2 text-white bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Phone number
                            </label>
                            <div className="relative mt-2">
                                <input
                                    type="number"
                                    name="phone"
                                    placeholder="+1 (555) 000-000"
                                    required
                                    className="w-full pl-3 py-2 pr-3 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="font-medium">
                                Message
                            </label>
                            <textarea name="message" required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"></textarea>
                        </div>
                        <button
                        type="submit" value="Send"
                            className="w-full px-4 py-2 transition duration-300 hover:scale-105 text-white font-medium theme_color hover:bg-rose-700 active:bg-gray-900 rounded-lg duration-150"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <section className="py-14 my-16 testonomical_background">
            <div className="max-w-screen-xl mx-auto px-4 text-white gap-12 md:px-8 lg:flex">
                <div className="max-w-md theme_color p-3">
                    <h3 className="text-white  text-3xl font-semibold sm:text-4xl">
                        Let’s connect
                    </h3>
                    <p className="mt-3">
                        We’re here to help and answer any question you might have, We look forward to hearing from you .
                    </p>
                </div>
                <div>
                    <ul className="mt-12 gap-y-6 gap-x-12 items-center md:flex lg:gap-x-0 lg:mt-0">
                        {
                            contactMethods.map((item, idx) => (
                                <li key={idx} className="space-y-3 border-t py-6 md:max-w-sm md:py-0 md:border-t-0 lg:border-l lg:px-12 lg:max-w-none">
                                    <div className="w-12 h-12 rounded-full border flex items-center justify-center text-white theme_color">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-white text-lg font-medium xl:text-xl">
                                        {item.title}
                                    </h4>
                                    <p>
                                        {item.desc}
                                    </p>
                                    <a href={item.link.href} className="flex items-center gap-1 text-sm theme_text duration-150 hover:text-rose-700 font-medium">
                                        {item.link.name}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
            {/* <div className='absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]' style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div> */}
        </main>
    )
}