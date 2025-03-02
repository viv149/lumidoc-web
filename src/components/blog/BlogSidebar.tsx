"use client";
import React from "react";
import Image from "next/image";

const recentBlogs = [
    {
        slug: "medical-equipment-guide",
        title: "Guide to Medical Equipment",
        image: "/assets/img/blog/blog-1.jpg",
    },
    {
        slug: "healthcare-tips",
        title: "Top Healthcare Tips",
        image: "/assets/img/blog/blog-2.jpg",
    },
    {
        slug: "latest-research-updates",
        title: "Latest Research Updates",
        image: "/assets/img/blog/blog-3.jpg",
    },
];

const BlogSidebar = () => {
    return (
        <div className="blog-sidebar">
        <h5>Search Blog</h5>
        <input type="text" className="form-control mb-4" placeholder="Search..." />
        <h5>Recent Blogs</h5>
        {recentBlogs.map((blog, index) => (
            <div className="recent-blog d-flex mb-3" key={index}>
            <Image src={blog.image} alt={blog.title} width={80} height={60} className="me-3 rounded" />
            <p className="mb-0">{blog.title}</p>
            </div>
        ))}
        </div>
    );
};

export default BlogSidebar;