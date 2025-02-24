"use client";
import React from "react";
import ProductCard from "../elements/ProductCard";


const FeaturedProducts = () => {
  return (
    <section id="featuredProducts" className="section">
        <div className="container">
            <h4 className="title">Featured Products</h4>
            <p className="text-declaration text-muted">
                Discover our best-selling medical & lab equipment.
            </p>
            
            
            <div className="products-grid">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
            </div>
        </div>
    </section>
  );
};

export default FeaturedProducts;

const products = [
    {
        id: 1,
        name: "Multi Parameter Monitor",
        image: "/assets/img/products/prod-1.png",
        description: "Real-time monitoring of vital signs for accurate diagnosis.",
        link: "/main/product/multi-parameter-monitor",
    },
    {
        id: 2,
        name: "Semi Fowler Bed (SS Panel)",
        image: "/assets/img/products/prod-2.jpg",
        description: "Durable stainless steel bed with adjustable backrest for patient comfort.",
        link: "/main/product/semi-fowler-bed-ss-panel",
    },
    {
        id: 3,
        name: "Surgical OT Light",
        image: "/assets/img/products/prod-3.jpg",
        description: "High-intensity shadow-free lighting for surgical procedures.",
        link: "/main/product/surgical-ot-light",
    },
    {
        id: 4,
        name: "Cooker Type Autoclave Single/Double Wall",
        image: "/assets/img/products/prod-4.jpg",
        description: "Reliable steam sterilization for medical and laboratory instruments.",
        link: "/main/product/cooker-type-autoclave-single",
    },
];

