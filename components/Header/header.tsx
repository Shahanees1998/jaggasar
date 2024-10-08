'use client'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const HeaderComponent = (): JSX.Element => {
  const nav = ['Home', 'About', 'Services', 'Projects', 'Blog']
  const pathName = usePathname()
  const [menu, openMenu] = useState<boolean>(false)
  return (
        <header
            className="ud-header sticky left-0 top-0 z-40 flex w-full items-center bg-primary"
        >
            <div className="container">
                <div className="relative -mx-4 flex items-center justify-between">
                    <div className="max-w-full px-4 sm-hidden">
                        <a href="index.html" className="navbar-logo block w-full py-5 ">
                            <img
                                src="/images/logo/logo.svg"
                                alt="logo"
                                className="header-logo w-full"
                            />
                        </a>
                    </div>
                    <div className="flex w-full items-center justify-between px-4 relative z-40">
                        <div className="mx-auto mobile-menu-icon">
                            <img className='cursor-pointer pr-4 md:hidden' src={'/images/logo/hmbrg.svg'} onClick={() => { openMenu(!menu) }} />
                            <nav
                                id="navbarCollapse"
                                className="absolute right-0 z-40 top-full mx-auto hidden w-full rounded-lg py-5 shadow-lg dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-4 lg:py-0 lg:shadow-none dark:lg:bg-transparent xl:px-6 sm-menu"
                            >
                                <ul className="blcok lg:flex topNav">
                                    {
                                        nav?.map((item, index) => {
                                          return (
                                                <li key={index} className="group px-5 relative">
                                                    <Link
                                                        href={'/home'}
                                                        className={`ud-menu-scroll flex text-base font-semibol group-hover:text-secondary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:text-grey-200 lg:group-hover:text-blue lg:group-hover:opacity-70 ${pathName?.includes(item?.toLocaleLowerCase()) ? 'text-gray-7 font-bold' : 'text-dark-6'}`}
                                                    >
                                                        {item}
                                                    </Link>
                                                </li>
                                          )
                                        })
                                    }

                                </ul>
                            </nav>

                            {menu && <nav
                                id="mobileNavbarCollapse"
                                className="mobile-navbar right-0 z-40 top-full mx-auto web-none w-full rounded-lg py-5 shadow-lg dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:px-4 lg:py-0 lg:shadow-none dark:lg:bg-transparent xl:px-6 sm-menu"
                            >
                                <div className='w-full flex justify-end pr-4 mt-2 items-end'>
                                    <img src={'/images/hero/cross.svg'} className='w-4 h-4' onClick={() => { openMenu(!menu) }}/>
                                </div>
                                <ul className="blcok lg:flex topNav">
                                    {
                                        nav?.map((item, index) => {
                                          return (
                                                <li key={index} className="group px-5 relative">
                                                    <Link
                                                        href={'/home'}
                                                        className={`ud-menu-scroll flex text-2xl py-4 font-semibol group-hover:text-secondary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:text-grey-200 lg:group-hover:text-blue lg:group-hover:opacity-70 ${pathName?.includes(item?.toLocaleLowerCase()) ? 'text-gray-7 font-bold' : 'text-dark-6'}`}
                                                    >
                                                        {item}
                                                    </Link>
                                                    <img src={'/images/hero/rectangle.png'} />
                                                </li>
                                          )
                                        })
                                    }
                                    <img src={'/images/hero/contact.svg'} className='mt-10 ml-4' />

                                    <div className='flex absolute mt-24 gap-4'>
                                        <img src={'/images/hero/u.svg'} className='ml-4 ' />
                                        <img src={'/images/hero/x.svg'} />
                                        <img src={'/images/hero/i.svg'} />

                                    </div>
                                </ul>
                            </nav>}
                        </div>
                        <a href="index.html" className="navbar-logo block py-5 lg-none">
                            <img
                                src="/images/logo/mobile.png"
                                alt="logo"
                                className="header-logo"
                            />
                        </a>

                        <div className="flex items-center justify-end">
                            <div className="mobileNav">
                                <a
                                    href="signup.html"
                                    className="signUpBtn rounded-full nav-shadow btn-gradient px-6 text-base font-semibold text-white mr-3 duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
                                >
                                    Work With Us!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
  )
}

export default HeaderComponent
