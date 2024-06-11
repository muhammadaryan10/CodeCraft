import IOS from '../assets/IOS.webp'

export default function Grow (){
    return (
        <div className="testonomical_background  lg:max-w-screen-xl Grow_Section" style={{minHeight :'70vh'}}>
        <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Grow Your Business With
                <span className="inline-block theme_text my-3">
                  Experts Code Craft
                </span>
              </h2>
              <p className="text-base text-gray-300 md:text-lg">
              Expert Code Craft is a top software development company in USA. It presents a great variety of services for software development solutions that proceed to be advantageous in having a competitive digital availability in the market.
              </p>
            </div>
            <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
              <div>
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full theme_color">
                  <svg
                    className="w-10 h-10 text-white"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5 text-white">
                Top-Rated iOS App Development Services
                </h6>
                <p className="text-sm text-white">
                We offer top-level services for iOS application development to boost your business revenue. Our developers are focused and do their best to present the best results for iOS app development solutions.
                </p>
              </div>
              <div>
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full theme_color">
                  <svg
                    className="w-10 h-10 text-white"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <h6 className="mb-2 font-semibold leading-5 text-white">
                Game Development
                </h6>
                <p className="text-sm text-white">
                Expert Code Craft is unrivaled in crafting cross platform game development solutions that go beyond expectations. Our expertise lies in engineering experiences that deeply engage and captivate audiences. Our team is dedicated to pushing boundaries and ensuring that every game we create is a masterpiece in its own right.
                </p>
              </div>
            </div>
          </div>
          <div className='flex justify-end'>
            <img
              className="object-cover  rounded shadow-lg sm:h-96 pr-5 hidden  lg:block"
              style={{height :'650px'}}
              src={IOS}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  };