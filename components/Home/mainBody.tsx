'use client'
import React from 'react'
import { Carousel } from 'primereact/carousel'

const MainBody = (): JSX.Element => {
  const products = ['1', '2', '3', '4', '5', '1', '2', '3', '4', '5', '1']

  const productTemplate = (image: string): any => {
    return (
            <div className={`flex items-center justify-center ${image === '4' ? '-mt-4' : ''}`}>
                <img className='h-38' src={`/images/hero/${image}.png`} />
            </div>
    )
  }

  const responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 4,
      numScroll: 1
    },
    {
      breakpoint: '1199px',
      numVisible: 4,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 4,
      numScroll: 1
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1
    }
  ]
  return (
        <div
            id="home"
            className="relative overflow-hidden pt-[120px] md:pt-[130px] lg:pt-[130px]"
        >
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-10 sm-px-10 md:w-1/2 lg:w-1/2">
                        <div className="wow fadeInUp group" data-wow-delay=".1s">
                            <h1 className="mb-8 text-6xl font-bold text-white dark:text-white">
                                Grow Your <br /> <span className="color-secoundry">Business </span>With Us
                            </h1>
                            <p className="mb-8 text-white font-normal dark:text-dark-6 lg:mb-9 sm-center">
                                We help you transform your revenue generation systems through intelligent, and frictionless user experiences that outperform your competition and drive more demand. We provide full-service solutions from software development to marketing strategies.
                            </p>
                            <div className="flex sm-jus-center">
                                <button

                                    className="signUpBtn sm-px-10 rounded-full flex items-center btn-gradient px-10 py-3 text-base font-medium text-white mr-3 duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                                >
                                    Book a Call <img className="ml-5" src="/images/hero/arrow.png" />
                                </button>
                                <button

                                    className="signUpBtn sm-px-10 rounded-full flex items-center bg-gray-2 px-8 py-3 text-base font-medium text-white mr-3 duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                                >
                                    Learn More
                                </button>
                            </div>
                            <div className="flex flex-wrap justify-between items-center sm-jus-center">
                                <span className="flex items-center py-10 sm-py-10"><img src="/images/hero/badge 1.png" /><p className="text-white ml-2">10 Years of expertise</p></span>
                                <div className="border-right sm-hidden"></div>
                                <span className="flex items-center py-10 sm-py-10"><img src="/images/hero/feedback 1.png" /><p className="text-white ml-2">50+ Satisfied Clients</p></span>
                                <div className="border-right sm-hidden"></div>
                                <span className="flex items-center py-10 sm-py-10"><img src="/images/hero/brief 1.png" /><p className="text-white ml-2">100+ Successful Projects</p></span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2 lg:w-1/2">
                        <div className="wow fadeInUp group" data-wow-delay=".1s">
                            <img className="w-full" src="/images/hero/banner-img.png" />
                        </div>
                    </div>
                </div>
                <div className="flex main-carousel items-center justify-between mt-16">
                    <Carousel value={products} autoplayInterval={3000} className="custom-carousel" circular numScroll={1} numVisible={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
                </div>
            </div>
        </div>
  )
}

export default MainBody
