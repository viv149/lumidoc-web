
import React from 'react'
import AboutHeroSection from '../../../components/about/AboutHeroSection'
import Overview from '../../../components/about/Overview'
import History from '../../../components/about/History'
import TestimonialSection from '../../../components/home/TestimonialSection'
import AboutContactSection from '../../../components/about/AboutContactSection'

export default function page() {
    return (
        <React.Fragment>
            <div className="about-page">
                <AboutHeroSection/>

                <Overview/>

                <History/>


                <TestimonialSection/>

                <AboutContactSection/>
            </div>
        </React.Fragment>
    )
}
