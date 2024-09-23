import React from 'react'

const SectionFive = async (): Promise<JSX.Element> => {
  return (
        <section
            id="testimonials"
            className="overflow-hidden dark:bg-dark-2"
        >
            <img className="w-full absolute bg-lastimg" src="/images/hero/bg-last.png" />
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap items-center justify-center relative z-40">

                    <div className="w-full mx-auto mt-12 px-5 md:w-1/1 lg:w-1/1">
                        <h2 className="mb-4 text-2xl font-bold text-white text-center dark:text-white line_heading">
                            Interested in working together?
                        </h2>
                        <p className="mb-3 text-gray-7 mx-auto font-normal dark:text-dark-6 w30 text-center">
                            We have feeling that this is the beginning of something wonderful. Send us an email with your project needs, and we’ll get back to you within 1-2 business days (probably sooner).
                        </p>
                        <div className="flex justify-center mt-12">
                            <button className="signUpBtn sm-px-10 rounded-full flex items-center btn-gradient px-10 py-3 text-base font-medium text-white mr-3 duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark">
                                Book a Call <img className="ml-5" src="/images/hero/arrow.png" />
                            </button>
                            <button className="signUpBtn sm-px-10 rounded-full flex items-center bg-gray-2 px-8 py-3 text-base font-medium text-white mr-3 duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default SectionFive
