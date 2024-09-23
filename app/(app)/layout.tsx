import type { Metadata } from 'next'
import React from 'react'
import Head from 'next/head'
import 'primeicons/primeicons.css'

import '../globals.scss'
import '../globals-public.css'
import '../data-tables-css.css'
import HeaderComponent from 'components/Header/header'
import FooterComponent from 'components/Footer/footer'

export const metadata: Metadata = {
  title: 'Jaggasar',
  description: 'Your personal Jaggasar service'
}

export default async function RootLayout ({
  children,
  params
}: Readonly<{
  children: React.ReactNode
  params: { lang: string }
}>): Promise<JSX.Element> {
  return (
        <html lang={params.lang} className="bg-primary" style={{ fontSize: '1rem' }}>
            <Head>
                {/* Swiper and Animate CSS */}
                <link rel="stylesheet" href="assets/css/swiper-bundle.min.css" />
                <link rel="stylesheet" href="assets/css/animate.css" />
                <link rel="stylesheet" href="assets/css/tailwind.css" />

                {/* Google Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body className={'h-full bg-primary'}>
                <HeaderComponent />
                {children}
                <FooterComponent />
            </body>
        </html>
  )
}
