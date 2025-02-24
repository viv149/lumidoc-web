"use client";
import React, { useState } from "react";

const ProductTabs = ({ product }) => {
    const [activeTab, setActiveTab] = useState("description");
    console.log("Product", product);
    return (
        <div className="product-tabs">
            <div className="tabs">
                <button className={activeTab === "description" ? "active" : ""} onClick={() => setActiveTab("description")}>Description</button>
                <button className={activeTab === "features" ? "active" : ""} onClick={() => setActiveTab("features")}>Features</button>
                <button className={activeTab === "specifications" ? "active" : ""} onClick={() => setActiveTab("specifications")}>Specifications</button>
            </div>

            <div className="tab-content">
                {activeTab === "description" && <p>{product.description}</p>}
                {activeTab === "features" && (
                <ul>
                    {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                    ))}
                </ul>
                )}
                {activeTab === "specifications" && (
                <ul>
                    {Object.entries(product.specifications).map(([key, value], index) => (
                    <li key={index}><strong>{key}:</strong> {value}</li>
                    ))}
                </ul>
                )}
            </div>
        </div>
    );
};

export default ProductTabs;