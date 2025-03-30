"use client";
import Link from "next/link";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "react-toastify";
import Breadcrumb from "../../ui/Breadcrumb";
import "../admin.css"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const isLoginPage = pathname === "/admin/login";

    if (isLoginPage) {
        return <div>{children}</div>;
    }

    const handleLogout = async () => {
        try {
            const res = await fetch("/api/auth/logout", { method: "GET" });
            const data = await res.json();

            if (res.ok) {
                toast.success(data.message);
                router.push("/admin/login");
            } else {
                toast.error(data.error);
            }
        } catch (error) {
            toast.error("Logout failed!");
        }
    };


     // Function to generate dynamic breadcrumb title
     const getBreadcrumbTitle = () => {
        const pathSegments = pathname.split("/").filter(segment => segment); // Remove empty segments

        if (pathSegments.length > 1) {
            const lastSegment = pathSegments[pathSegments.length - 1];

            // Custom mappings for specific paths
            const pageTitles: Record<string, string> = {
                "dashboard": "Admin Dashboard",
                "users": "Users Management",
                "category": "Category",
                "products": "Products",
                "add-product": "Add Product",
                "view-product": "View Products",
                "contact-messages": "Contact Messages",
                "product-enquiries": "Product Enquiries",
            };

            return pageTitles[lastSegment] || lastSegment.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
        }

        return "Admin Panel";
    };

    return (
        <div className="d-flex">
            {/* Fixed Sidebar */}
            <aside className="sidebar">
                <Link href="/admin/dashboard" className="navbar-brand fw-bold">
                    <Image
                        src="/assets/img/logo.png"
                        width={200}
                        height={40}
                        className="navbar-img"
                        alt="LumiDoc Solutions"
                        unoptimized
                    />
                </Link>
                <h2 className="fs-5 fw-bold my-4 text-center">Admin Panel</h2>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link href="/admin/dashboard" className={`nav-link ${pathname === "/admin/dashboard" ? "active" : ""}`}>Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/admin/users" className={`nav-link ${pathname === "/admin/users" ? "active" : ""}`}>Users</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/admin/category" className={`nav-link ${pathname === "/admin/category" ? "active" : ""}`}>Category</Link>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Products</a>
                        <ul className="dropdown-menu">
                            <li><Link href="/admin/products/add-product" className="dropdown-item">Add Product</Link></li>
                            <li><Link href="/admin/products/view-product" className="dropdown-item">View Products</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <Link href="/admin/contact-messages" className={`nav-link ${pathname === "/admin/contact-messages" ? "active" : ""}`}>Contact Messages</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/admin/product-enquiries" className={`nav-link ${pathname === "/admin/product-enquiries" ? "active" : ""}`}>Product Enquiries</Link>
                    </li>
                </ul>
            </aside>

            {/* Main Content Area */}
            <div className="main-content">
                <header className="d-flex justify-content-between align-items-center bg-white shadow-sm p-3">
                    <Breadcrumb title={getBreadcrumbTitle()} />
                    <button onClick={handleLogout} className="btn btn-danger">Logout</button>
                </header>

                {/* Scrollable Content */}
                <main className="content-container">
                    {children}
                </main>

                {/* Footer */}
                <footer className="footer">
                    &copy; {new Date().getFullYear()} LumiDoc Solutions. All rights reserved.
                </footer>
            </div>
        </div>
    );
}
