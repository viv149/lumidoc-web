import React from 'react';
import ProductDetailPage from '../../../../components/product/ProductDetail';
import type { Metadata } from 'next';

const products = [
    {
        slug: "multi-parameter-monitor",
        image: "/assets/img/products/prod-1.png"
    },
    {
        slug: "semi-fowler-bed-ss-panel",
        image: "/assets/img/products/prod-2.jpg"
    },
    {
        slug: "surgical-ot-light",
        image: "/assets/img/products/prod-3.jpg"
    },
    {
        slug: "cooker-type-autoclave-single",
        image: "/assets/img/products/prod-4.jpg"
    }
];

export async function generateMetadata({ params }): Promise<Metadata> {
    const productSlug = params.slug;
    const product = products.find(p => p.slug === productSlug);
    const imageUrl = product ? `${process.env.NEXT_PUBLIC_BASE_URL}${product.image}` : `${process.env.NEXT_PUBLIC_BASE_URL}/assets/img/logo.png`;

    return {
        title: `Product Detail | ${productSlug} | Lumidoc Solutions`,
        description: `Explore detailed information about ${productSlug} at Lumidoc Solutions.`,
        openGraph: {
            title: `Product Detail | ${productSlug} | Lumidoc Solutions`,
            description: `Explore detailed information about ${productSlug} at Lumidoc Solutions.`,
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/main/product/${productSlug}`,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: `Product Detail | ${productSlug} | Lumidoc Solutions`,
                },
            ],
        },
        twitter: {
            title: `Product Detail | ${productSlug} | Lumidoc`,
            description: `Explore detailed information about ${productSlug} at Lumidoc Solutions.`,
            images: [imageUrl],
        },
    };
}

const Page = () => {
    return (
        <React.Fragment>
            <ProductDetailPage/>
        </React.Fragment>
    );
}

export default Page;
