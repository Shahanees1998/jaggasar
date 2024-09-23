import React from 'react'

const FooterComponent = async (): Promise<JSX.Element> => {
  return (
        <footer
            className="wow fadeInUp relative z-10 bg-primary pt-20 mt-20 lg:pt-[100px]"
            data-wow-delay=".15s"
        >
            <div className="container">
                <img className="absolute w-full left-0 right-0 mt_140" src="/images/hero/footer-lines.png" />
                <div className="-mx-4 flex flex-wrap relative z-40">
                    <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-3/12">
                        <div className="mb-10 w-full">
                            <a
                                href="javascript:void(0)"
                                className="mb-6 inline-block max-w-[160px]"
                            >
                                <img
                                    src="/images/logo/logo-white.svg"
                                    alt="logo"
                                    className="max-w-full"
                                />
                            </a>
                            <p className="mb-8 max-w-[270px] text-base text-gray-7">
                                There are many variations of passages of Lorem the Ipsum available it  majority.
                            </p>

                            <form className="max-w-md mx-auto">
                                <div className="relative">
                                    <input type="search" id="default-search" className="block w-full footer-search p-4 ps-10 text-sm text-secondary border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required />
                                    <button type="submit" className="text-white footer-btn absolute end-2.5 bottom-2.5 btn-gradient hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subscribe</button>
                                </div>
                            </form>

                        </div>
                    </div>
                    <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-3/12">
                        <div className="mb-10 w-full">
                            <h4 className="mb-9 text-lg font-semibold text-gradient uppercase">Resources</h4>
                            <ul>
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        className="mb-3 inline-block text-base text-gray-7 hover:text-white"
                                    >
                                        Products
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        className="mb-3 inline-block text-base text-gray-7 hover:text-white"
                                    >
                                        Expertise
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        className="mb-3 inline-block text-base text-gray-7 hover:text-white"
                                    >
                                        Case Studies
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        className="mb-3 inline-block text-base text-gray-7 hover:text-white"
                                    >
                                        Careers
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        className="mb-3 inline-block text-base text-gray-7 hover:text-white"
                                    >
                                        Blogs
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-3/12">
                        <div className="mb-10 w-full">
                            <h4 className="mb-9 text-lg font-semibold text-gradient uppercase">Products</h4>
                            <ul>
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        className="mb-3 inline-block text-base text-gray-7 hover:text-white"
                                    >
                                        JagOp By Jaggasar
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        className="mb-3 inline-block text-base text-gray-7 hover:text-white"
                                    >
                                        FAQ
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        className="mb-3 inline-block text-base text-gray-7 hover:text-white"
                                    >
                                        Partners
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        className="mb-3 inline-block text-base text-gray-7 hover:text-white"
                                    >
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-3/12">
                        <div className="mb-10 w-full">
                            <h4 className="mb-9 text-lg font-semibold text-gradient uppercase">Servces</h4>
                            <ul>
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        className="mb-3 inline-block text-base text-gray-7 hover:text-white"
                                    >
                                        Web & App Development
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        className="mb-3 inline-block text-base text-gray-7 hover:text-white"
                                    >
                                        UI/UX Design
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        className="mb-3 inline-block text-base text-gray-7 hover:text-white"
                                    >
                                        Content Production
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        className="mb-3 inline-block text-base text-gray-7 hover:text-white"
                                    >
                                        Social Media Management
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        className="mb-3 inline-block text-base text-gray-7 hover:text-white"
                                    >
                                        Ad Management
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        className="mb-3 inline-block text-base text-gray-7 hover:text-white"
                                    >
                                        SEO
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="javascript:void(0)"
                                        className="mb-3 inline-block text-base text-gray-7 hover:text-white"
                                    >
                                        Consulting & Coaching
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="mt-5 border-t border-[#8890A4] border-opacity-40 py-8"
            >
                <div className="container">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 md:w-1/2 lg:w-1/2">
                            <div className="my-1">
                                <p className="text-base text-gray-7">
                                    Copyright © 2024 Jaggasar Group. All rights reserved.
                                </p>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2 lg:w-1/2">
                            <div className="my-1 flex justify-end sm-set">
                                <a href="#"><img className="px-3" src="/images/hero/Link (1).png" /></a>
                                <a href="#"><img className="px-3" src="/images/hero/Link (2).png" /></a>
                                <a href="#"><img className="px-3" src="/images/hero/Link (3).png" /></a>
                                <a href="#"><img className="px-3" src="/images/hero/Link (4).png" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default FooterComponent
