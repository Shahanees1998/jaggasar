import React from 'react'

const SectionOne = async (): Promise<JSX.Element> => {
  return (
        <section className="pb-8 pt-20 dark:bg-dark lg:pb-[0] lg:pt-[120px] sm:pt-[20px]">
            <img className="absolute" src="/images/hero/Ellipse 13.png" />
            <img className="absolute w-full mt600" src="/images/hero/bg.png" />
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-12 text-center lg:mb-[70px]">
                            <h2 className="mb-8 text-2xl font-bold text-white dark:text-white line_heading sm-font1">
                                Empowering Your <span className="bg-green rounded-full px-4 py-1">Business</span>with a Full Suite of<br /><span className="bg-blue rounded-full px-4 py-1">Creative</span> & <span className="bg-purple rounded-full px-4 py-1">Digital Solutions</span>
                            </h2>
                            <p className="mb-8 text-gray-7 font-normal dark:text-dark-6 lg:mb-9">
                                From stunning designs to powerful software, strategic marketing to content <br />creation—our expert team delivers tailored services that drive <br />real results.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-mx-4 flex flex-wrap items-center">
                    <div className="w-full px-10 md:w-1/1 lg:w-1/1">
                        <div className="liner-box px-10 py-5 rounded-xl relative z-10">
                            <div className="flex flex-wrap items-center">
                                <div className="w-full py-2 md:w-1/2 lg:w-1/2">
                                    <div className="opacity1 mt-5">
                                        <h3 className="mb-8 text-3xl mt-5 font-medium text-white line_heading relative z-40">
                                            Website & Software <br />Application Development
                                        </h3>
                                        <p className="mb-8 text-gray-7 font-normal dark:text-dark-6 lg:mb-9">
                                            Custom-built websites and software applications designed to scale with your business. We create fast, secure, and user-friendly digital solutions tailored to your unique needs.
                                        </p>
                                        <button

                                            className="signUpBtn rounded-full flex items-center bg-transparent py-3 text-base font-medium text-green mr-3 duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                                        >
                                            Learn More <img className="ml-2" src="/images/hero/Vector (4).png" />
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full py-2 md:w-1/2 lg:w-1/2">
                                    <img className="w-full" src="/images/hero/dev.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mt-12 px-5 md:w-1/3 lg:w-1/3">
                        <div className="liner-box px-5 py-5 rounded-xl relative z-10">
                            <div className="opacity1 mt-5">
                                <h3 className="mb-3 text-2xl mt-5 font-medium text-white line_heading relative z-40">
                                    UI/UX Design
                                </h3>
                                <p className="mb-3 text-gray-7 font-normal dark:text-dark-6">
                                    Intuitive, visually stunning designs that deliver seamless user experiences.
                                </p>
                                <button

                                    className="signUpBtn mb-5 rounded-full flex items-center bg-transparent text-base font-medium text-green mr-3 duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                                >
                                    Learn More <img className="ml-2" src="/images/hero/Vector (4).png" />
                                </button>
                            </div>
                            <img className="w-full mt-5" src="/images/hero/design1.png" />
                        </div>
                    </div>
                    <div className="w-full mt-12 px-5 md:w-1/3 lg:w-1/3">
                        <div className="liner-box px-5 py-5 rounded-xl relative z-10">
                            <div className="opacity1 mt-5">
                                <h3 className="mb-3 text-2xl mt-5 font-medium text-white line_heading relative z-40">
                                    Content Production (Video, Photo, Graphic)
                                </h3>
                                <p className="mb-3 text-gray-7 font-normal dark:text-dark-6">
                                    Engaging visuals that tell your brand’s story.
                                </p>
                                <button

                                    className="signUpBtn mb-5 rounded-full flex items-center bg-transparent text-base font-medium text-green mr-3 duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                                >
                                    Learn More <img className="ml-2" src="/images/hero/Vector (4).png" />
                                </button>
                            </div>
                            <img className="w-full mt-5" src="/images/hero/design2.png" />
                        </div>
                    </div>
                    <div className="w-full mt-12 px-5 md:w-1/3 lg:w-1/3">
                        <div className="liner-box px-5 py-5 rounded-xl relative z-10">
                            <div className="opacity1 mt-5">
                                <h3 className="mb-3 text-2xl mt-5 font-medium text-white line_heading relative z-40">
                                    Social Media Content Management
                                </h3>
                                <p className="mb-3 text-gray-7 font-normal dark:text-dark-6">
                                    Grow your online presence with targeted, creative social media content.
                                </p>
                                <button

                                    className="signUpBtn mb-5 rounded-full flex items-center bg-transparent text-base font-medium text-green mr-3 duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                                >
                                    Learn More <img className="ml-2" src="/images/hero/Vector (4).png" />
                                </button>
                            </div>
                            <img className="w-full mt-5" src="/images/hero/design3.png" />
                        </div>
                    </div>
                    <div className="w-full mt-12 px-5 md:w-1/3 lg:w-1/3">
                        <div className="liner-box px-5 py-5 rounded-xl relative z-10">
                            <div className="opacity1 mt-5">
                                <h3 className="mb-3 text-2xl mt-5 font-medium text-white line_heading relative z-40">
                                    Ad Management
                                </h3>
                                <p className="mb-3 text-gray-7 font-normal dark:text-dark-6">
                                    Maximize your ROI with optimized ad campaigns.
                                </p>
                                <button

                                    className="signUpBtn mb-5 rounded-full flex items-center bg-transparent text-base font-medium text-green mr-3 duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                                >
                                    Learn More <img className="ml-2" src="/images/hero/Vector (4).png" />
                                </button>
                            </div>
                            <img className="w-full mt-5" src="/images/hero/design4.png" />
                        </div>
                    </div>
                    <div className="w-full mt-12 px-5 md:w-1/3 lg:w-1/3">
                        <div className="liner-box px-5 py-5 rounded-xl relative z-10">
                            <div className="opacity1 mt-5">
                                <h3 className="mb-3 text-2xl mt-5 font-medium text-white line_heading relative z-40">
                                    SEO (Search Engine Optimization)
                                </h3>
                                <p className="mb-3 text-gray-7 font-normal dark:text-dark-6">
                                    Boost your visibility and outrank the competition with our SEO strategies.
                                </p>
                                <button

                                    className="signUpBtn mb-5 rounded-full flex items-center bg-transparent text-base font-medium text-green mr-3 duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                                >
                                    Learn More <img className="ml-2" src="/images/hero/Vector (4).png" />
                                </button>
                            </div>
                            <img className="w-full mt-5" src="/images/hero/design5.png" />
                        </div>
                    </div>
                    <div className="w-full mt-12 px-5 md:w-1/3 lg:w-1/3">
                        <div className="liner-box px-5 py-5 rounded-xl relative z-10">
                            <div className="opacity1 mt-5">
                                <h3 className="mb-3 text-2xl mt-5 font-medium text-white line_heading relative z-40">
                                    Consulting & Coaching
                                </h3>
                                <p className="mb-3 text-gray-7 font-normal dark:text-dark-6">
                                    Take your business to the next level with expert guidance.
                                </p>
                                <button

                                    className="signUpBtn mb-5 rounded-full flex items-center bg-transparent text-base font-medium text-green mr-3 duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                                >
                                    Learn More <img className="ml-2" src="/images/hero/Vector (4).png" />
                                </button>
                            </div>
                            <img className="w-full mt-5" src="/images/hero/design6.png" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
  )
}

export default SectionOne
