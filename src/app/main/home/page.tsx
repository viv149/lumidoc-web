import React from 'react';
import HeroSection from '../../../components/home/HeroSection';
import Category from '../../../components/home/Category';
import AboutSection from '../../../components/home/AboutSection';
import FeaturedProducts from '../../../components/home/FeatureProducts';
import WhyChoose from '../../../components/home/WhyChoose';
import TestimonialSection from '../../../components/home/TestimonialSection';
import OfferSection from '../../../components/home/OfferSection';
import BlogSection from '../../../components/home/BlogSection';
import ContactSection from '../../../components/home/ContactSection';

const Page = () => {
    return (
        <React.Fragment>
            <HeroSection/>
            <Category/>
            <AboutSection/>
            <FeaturedProducts/>
            <WhyChoose/>
            <TestimonialSection/>
            <OfferSection/>
            <BlogSection/>
            <ContactSection/>
        </React.Fragment>
    );
}

export default Page;
