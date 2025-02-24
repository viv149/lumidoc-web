import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ article }: { article: { title: string; image: string; description: string; link: string } }) => {
    return (
        <div className="blog-card">
            <div className="blog-image">
                <Image src={article.image} alt={article.title} width={300} height={200} className="blog-img" unoptimized />
            </div>
            <div className="blog-content">
                <h5 className="blog-title">{article.title}</h5>
                <p className="blog-description">{article.description}</p>
                <Link href={article.link} className="lm-btn lm-btn-green">Read More</Link>
            </div>
        </div>
    );
};

export default BlogCard;
