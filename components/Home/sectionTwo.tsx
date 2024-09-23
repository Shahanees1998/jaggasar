import React from 'react'

const SectionTwo = async (): Promise<JSX.Element> => {
  return (
        <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[0px]">
            <img className="absolute w-full" src="/images/hero/center.png" />
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-12 text-center lg:mb-[70px]">
                            <h2 className="mb-8 text-2xl font-bold text-white dark:text-white line_heading">
                                Experience, Innovation, and Results—We’re the<br />Perfect Blend to Elevate Your Business to the <br /><span className="bg-purple rounded-full px-4 py-1">Next Level</span>
                            </h2>
                            <p className="mb-8 text-gray-7 font-normal dark:text-dark-6 lg:mb-9">
                                Discover how our expertise, tailored solutions, and proven results make us the ideal partner for <br />your business growth.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-mx-4 flex flex-wrap items-center">
                    <div className="w-full px-10 md:w-1/1 lg:w-1/1">
                        <div className="liner-box rounded-xl relative z-10">
                            <div className="flex flex-wrap items-center">
                                <div className="w-full px-10 py-5 py-2 md:w-1/2 lg:w-1/2">
                                    <div className="flex">
                                        <div className="w60">
                                            <img className="" src="/images/hero/left1.png" />
                                        </div>
                                        <div className="opacity1 ml-2">
                                            <h3 className="mb-2 text-1xl font-medium text-white relative z-40">
                                                Expert Team
                                            </h3>
                                            <p className="mb-8 text-gray-7 text-sm font-normal dark:text-dark-6 lg:mb-9">
                                                With years of experience in the industry, our team combines deep technical knowledge with creative prowess. We’re committed to understanding your unique needs and providing solutions that drive real results.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                                <div className="w-full md:w-1/2 lg:w-1/2 flex justify-end sm-hidden">
                                    <img className="w50" src="/images/hero/new.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-10 md:w-1/1 lg:w-1/1 mt-12">
                        <div className="liner-box rounded-xl relative z-10">
                            <div className="flex flex-wrap items-center">
                                <div className="w-full px-10 py-5 py-2 md:w-1/2 lg:w-1/2">
                                    <div className="flex">
                                        <div className="w100">
                                            <img className="" src="/images/hero/left2.png" />
                                        </div>
                                        <div className="opacity1 ml-2">
                                            <h3 className="mb-2 text-1xl font-medium text-white relative z-40">
                                                Custom Solutions
                                            </h3>
                                            <p className="mb-8 text-gray-7 text-sm font-normal dark:text-dark-6 lg:mb-9">
                                                We don’t believe in one-size-fits-all. Each project is approached with a fresh perspective and customized strategy. Whether you need a new website, a comprehensive marketing campaign, or a unique software application, we craft solutions that fit your exact requirements.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                                <div className="w-full md:w-1/2 lg:w-1/2 flex justify-end sm-hidden">
                                    <img className="w50" src="/images/hero/new1.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-10 md:w-1/1 lg:w-1/1 mt-12">
                        <div className="liner-box rounded-xl relative z-10">
                            <div className="flex flex-wrap items-center">
                                <div className="w-full px-10 py-5 py-2 md:w-1/2 lg:w-1/2">
                                    <div className="flex">
                                        <div className="w100">
                                            <img className="" src="/images/hero/left3.png" />
                                        </div>
                                        <div className="opacity1 ml-2">
                                            <h3 className="mb-2 text-1xl font-medium text-white relative z-40">
                                                Proven Results
                                            </h3>
                                            <p className="mb-8 text-gray-7 text-sm font-normal dark:text-dark-6 lg:mb-9">
                                                Our track record speaks for itself. We’ve helped businesses across various industries achieve their goals with quantifiable success. From increased web traffic to improved conversion rates, our results are backed by data and client testimonials.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                                <div className="w-full md:w-1/2 lg:w-1/2 flex justify-end sm-hidden">
                                    <img className="w50" src="/images/hero/new2.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
  )
}

export default SectionTwo
