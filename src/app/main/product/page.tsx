import React from 'react';
import ProductListing from '../../../components/product/ProductListing';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Product Page | Lumidoc Solutions',
    description: 'Explore our products with detailed specifications and features.',
    openGraph: {
        title: 'Product Page | Lumidoc Solutions',
        description: 'Explore our products with detailed specifications and features.',
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/main/product`,
        type: 'website',
        images: [
            {
                url: `${process.env.NEXT_PUBLIC_BASE_URL}/assets/img/logo.png`,
                width: 1200,
                height: 630,
                alt: 'Product Page | Lumidoc',
            },
        ],
    },
    twitter: {
        title: 'Product Page | Lumidoc',
        description: 'Explore our products with detailed specifications and features.',
        images: [`${process.env.NEXT_PUBLIC_BASE_URL}/assets/img/logo.png`],
    },
};

const Page = () => {
    return (
        <React.Fragment>
            <ProductListing/>
        </React.Fragment>
    );
}

export default Page;
