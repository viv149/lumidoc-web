import ProductCard from "../elements/ProductCard";



const NewArrivals = () => {
  return (
    <section className="section">
        <div className="container">
            <h4 className="title">New Arrivals</h4>
            <p className="text-declaration text-muted">
                Check out our latest medical products.
            </p>

            <div className="products-grid">
            {newArrivals.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
            </div>
        </div>
    </section>
  );
};

export default NewArrivals;

const newArrivals = [
    {
        id: 5,
        name: "Ultrasound Scanner",
        image: "/assets/img/products/prod-5.png",
        description: "Portable and high-resolution ultrasound scanner.",
        link: "/products/ultrasound-scanner",
    },
    {
        id: 6,
        name: "Defibrillator Machine",
        image: "/assets/img/products/prod-6.png",
        description: "Life-saving device for cardiac emergencies.",
        link: "/products/defibrillator-machine",
    },
];
