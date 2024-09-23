'use client'
import React from 'react'
import { Carousel } from 'primereact/carousel'

const SectionFour = (): JSX.Element => {
  const products = ['David J Karem', 'Ricky Jonson', 'Loren Aim', 'Jackie Boss', 'Critian Lo', 'Messin Jay', 'Elon uvis', 'Donald Cha', 'Messiv Ort', 'Elone Nusk', 'Jackie jan']

  const productTemplate = (text: string): any => {
    return (
        <div className="flex justify-between">
        <div>
            <img className="w140" src="/images/hero/Pic.png" />
        </div>
        <div className="ml-5">
            <h4 className="mb-0 text-xl mt-5 font-bold text-white relative z-40">
                {text}
            </h4>
            <h6 className="mb-3 text-sm mt-5 font-normal text-gray-7 relative z-40">
                Businessmen . 1 day ago
            </h6>
            <p className="mb-3 text-gray-7 font-normal dark:text-dark-6">
                Lorem ipsum dolor sit amet consectetur. Molestie bibendum ut nunc volutpat dictum risus eu tristique. Fames neque amet sit vel volutpat. Pellentesque pellentesque turpis nunc arcu tempus felis neque scelerisque. Suscipit eget consectetur enim orci vel amet leo tristique duis.Lorem ipsum dolor sit amet consectetur. Molestie bibendum ut nunc volutpat dictum risus eu tristique. Fames neque amet sit vel volutpat. Pellentesque pellentesque turpis nunc arcu tempus felis neque scelerisque. Suscipit eget consectetur enim orci vel amet leo tristique duis.
            </p>
        </div>
    </div>
    )
  }

  const responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '1199px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1
    }
  ]
  return (
        <section
            id="testimonials"
            className="overflow-hidden py-20 dark:bg-dark-2 md:py-[120px]"
        >
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap justify-center">
                    <div className="w-full px-4">
                        <div className="mx-auto max-w-[485px] text-center">
                            <h2 className="mb-1 text-2xl font-bold text-white dark:text-white line_heading">
                                What’s our user <span className="bg-blue rounded-full px-4 py-1">says</span> <br />about us
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="-mx-4 flex flex-wrap items-center">
                    <div className="w-full mt-12 px-5 md:w-1/1 lg:w-1/1">
                        <div className="box-client px-7 py-5 rounded-xl relative z-10 sm-py-0">
                            {/* <a href="#"><img className="pre-icon sm-hidden" src="/images/hero/pre.png" /></a>
                            <a href="#"><img className="next-icon sm-hidden" src="/images/hero/next.png" /></a> */}
                            <div className="box-client px-5 py-5 rounded-xl relative z-10">
                            <Carousel value={products} autoplayInterval={3000} className="custom-carousel" circular numScroll={1} numVisible={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />

                                <div className="flex justify-center items-center py-3">
                                    {/* <a href="#"><img className="px-2" src="/images/hero/slider.png" /></a>
                                    <a href="#"><img className="px-2" src="/images/hero/slider-active.png" /></a>
                                    <a href="#"><img className="px-2" src="/images/hero/slider.png" /></a>
                                    <a href="#"><img className="px-2" src="/images/hero/slider.png" /></a>
                                    <a href="#"><img className="px-2" src="/images/hero/slider.png" /></a> */}
                                </div>
                            </div>
                            <div className="flex justify-center sm-mt-5">
                                {/* <a href="#"><img className="mr-3" src="/images/hero/pre.png" /></a>
                                <a href="#"><img className="" src="/images/hero/next.png" /></a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default SectionFour
