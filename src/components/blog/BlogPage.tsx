// BlogPage.tsx
"use client";
import React from "react";
import BlogCard from "../elements/BlogCard";
import BlogSidebar from "./BlogSidebar";


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


const BlogPage = () => {
  return (
    <div className="container my-5">
      <h2 className="text-green text-center mb-4">Knowledge Hub</h2>
      <div className="row">
        <div className="col-sm-12 col-md-8 col-lg-10">
            <div className="row">
                {blogs.map((blog, index) => (
                <div className="col-md-4 mb-4" key={index}>
                    <BlogCard article={blog} />
                </div>
                ))}

            </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-2">
            <BlogSidebar/>
        </div>
      </div>
     
    </div>
  );
};

export default BlogPage;
