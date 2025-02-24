import Link from "next/link";
import React from "react";


export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="d-flex vh-100">
            {/* Sidebar */}
            <aside className="bg-dark text-light p-4" style={{ width: "250px" }}>
                <h2 className="fs-4 fw-bold mb-4">Admin Panel</h2>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link href="/admin/dashboard" className="nav-link text-light">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/admin/users" className="nav-link text-light">Users</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/admin/settings" className="nav-link text-light">Settings</Link>
                    </li>
                </ul>
            </aside>

            {/* Main Content */}
            <div className="flex-grow-1 p-4 bg-light">
                <header className="d-flex justify-content-between align-items-center bg-white shadow-sm p-3 mb-4">
                <h1 className="fs-5 m-0">Admin Dashboard</h1>
                <button className="btn btn-danger">Logout</button>
                </header>
                {children}
            </div>
        </div>
    );
  }
  
