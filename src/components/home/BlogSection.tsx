"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import BlogCard from "../elements/BlogCard";

const BlogSection = () => {
    return (
        <section id="blogSection" className="section">
            <div className="container">
                <h4 className="title">Knowledge Hub</h4>
                <p className="text-declaration text-muted">Latest insights on medical technologies & best practices.</p>

                {/* Blog Slider */}
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    breakpoints={{
                        768: { slidesPerView: 2 }, // Show 2 articles on tablets
                        1024: { slidesPerView: 3 }, // Show 3 articles on desktops
                    }}
                    className="blog-slider"
                >
                    {blogs.map((article) => (
                        <SwiperSlide key={article.id}>
                            <BlogCard article={article} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default BlogSection;

// Blog Data
const blogs = [
    {
        id: 1,
        title: "How to Choose the Right OT Lights?",
        image: "/assets/img/blog/blog-1.jpg",
        description: "A guide to selecting the best OT lights for precision and safety.",
        link: "/blog/how-to-choose-the-right-ot-lights",
    },
    {
        id: 2,
        title: "Benefits of Modern Hospital Beds",
        image: "/assets/img/blog/blog-2.jpg",
        description: "Discover how modern hospital beds enhance patient care and comfort.",
        link: "/blog/benefits-of-modern-hospital-beds",
    },
    {
        id: 3,
        title: "Understanding Autoclave Sterilization",
        image: "/assets/img/blog/blog-3.jpg",
        description: "Everything you need to know about effective sterilization in hospitals.",
        link: "/blog/understanding-autoclave-sterilization",
    },
];
