"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ProductTabs from "./ProductTabs";
import ProductInquiryModal from "./ProductInquiryModal";
import EnquiryButton from "../elements/EnquiryButton";
import WhatsappButton from "../elements/WhatsappButton";


// Sample Product Data (Replace this with API fetch or database)
const products = [
    {
        slug: "multi-parameter-monitor",
        category: "Lab Equipment",
        name: "Multi Parameter Monitor",
        model: "MPM-500",
        image: "/assets/img/products/prod-1.png",
        description: "Real-time monitoring of vital signs for accurate diagnosis.",
        features: [
            "Multi-lead ECG monitoring",
            "SpO2 and NIBP measurement",
            "User-friendly touch screen interface",
        ],
        specifications: {
            display: "10.4-inch LCD",
            battery: "4-hour backup",
            weight: "5kg",
        },
    },
    {
        slug: "semi-fowler-bed-ss-panel",
        category: "Hospital Equipment",
        name: "Semi Fowler Bed (SS Panel)",
        model: "SFB-200",
        image: "/assets/img/products/prod-2.jpg",
        description: "Durable stainless steel bed with adjustable backrest for patient comfort.",
        features: [
            "Stainless steel frame",
            "Adjustable backrest",
            "Smooth-rolling caster wheels",
        ],
        specifications: {
            material: "Stainless Steel",
            loadCapacity: "250kg",
            dimensions: "198cm x 90cm",
        },
    },
    {
        slug: "surgical-ot-light",
        category: "Surgical Equipment",
        name: "Surgical OT Light",
        model: "OTL-750",
        image: "/assets/img/products/prod-3.jpg",
        description: "High-intensity shadow-free lighting for surgical procedures.",
        features: [
            "LED technology with adjustable brightness",
            "Shadow-free illumination",
            "Ergonomic and easy-to-adjust arm",
        ],
        specifications: {
            lightIntensity: "130,000 Lux",
            power: "220V / 50Hz",
            lifespan: "50,000 hours",
        },
    },
    {
        slug: "cooker-type-autoclave-single",
        category: "Hospital Equipment",
        name: "Cooker Type Autoclave Single/Double Wall",
        model: "CTA-1000",
        image: "/assets/img/products/prod-4.jpg",
        description: "Reliable steam sterilization for medical and laboratory instruments.",
        features: [
            "Fast and efficient sterilization",
            "Single/Double-wall stainless steel construction",
            "Automatic pressure control",
        ],
        specifications: {
            power: "220V / 50Hz",
            capacity: "50 Liters",
            weight: "30kg",
        },
    }
];


export default function ProductDetailPage() {
    const { slug } = useParams();
    const [product, setProduct] = useState<any | null>(null);
    
    useEffect(() => {
        // Simulating API call
        const foundProduct = products.find((p) => p.slug === slug);
        setProduct(foundProduct || null);
    }, [slug]);

    if (!product) {
        return <div className="container my-5 text-center">Product Not Found</div>;
    }

    return (
        <div className="container my-5">
            <div className="row">
                {/* Product Image */}
                <div className="col-md-6">
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={500}
                        height={400}
                        className="img-fluid rounded shadow-sm zoom-effect"
                        unoptimized
                    />
                </div>

                {/* Product Details */}
                <div className="col-md-6">
                    <h2 className="text-green">{product.name}</h2>
                    <p className="text-muted">Model: <strong>{product.model}</strong></p>
                    <p>{product.description}</p>

                    {/* Enquiry & WhatsApp Buttons */}
                    <div className="mt-4">
                        <EnquiryButton buttonStyle="btn-outline-dark" modalId="inquiryModal"/>
                        <WhatsappButton mobile="919997872017" buttonStyle="btn-success"/>
                    </div>
                </div>

                <div className="col-12">
                    <ProductTabs product={product}/>
                </div>

            </div>
          <ProductInquiryModal product={product} />
        </div>
    );
}
