import React from 'react'

import MainBody from 'components/Home/mainBody'
import SectionFive from 'components/Home/sectionFive'
import SectionFour from 'components/Home/sectionFour'
import SectionOne from 'components/Home/sectionOne'
import SectionThree from 'components/Home/sectionThree'
import SectionTwo from 'components/Home/sectionTwo'

const HomeComponent = async (): Promise<JSX.Element> => {
  return (
        <div className="bg-primary">

            <MainBody />

            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />

        </div>
  )
}

export default HomeComponent
