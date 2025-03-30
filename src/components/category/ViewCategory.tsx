"use client"

import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface Category {
    length: number;
    map(arg0: (data: any, index: any) => React.JSX.Element): React.ReactNode;
    id: number;
    name: string;
   
}

const ViewCategory = () => {
    const [category, setCategory] = useState<Category | null>(null);
    const router = useRouter();

    useEffect(() => {
        const token =  getCookie('token');
        if (!token) {
            router.push("/admin/login"); // Redirect if no token
            return;
        }
        const fetchData = async () => {
            try{
                const response = await fetch("/api/categories", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                if (response.ok) {
                    const categoryData = await response.json();
                    setCategory(categoryData.data);
                } else {
                    toast.error("User not found"); // Redirect on error
                }
            } catch(error){
                console.error("Error fetching category:", error);
            }
        }
        fetchData();
    },[])

    return (
        <div className='card'>
            <div className="card-body">
            {category === null ? (
                <p className="text-center text-muted">Loading user data...</p>
            ) : category.length === 0 ? (
                <p className="text-center text-danger">No users found.</p>
            ) : (
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {category.map((data, index) => (
                                <tr key={`category-${index}`}>
                                    <td>{index + 1}</td>
                                    <td>{data.name}</td>
                                    <td>
                                        <button className="btn btn-primary btn-sm me-3">Edit</button>
                                        <button className="btn btn-danger btn-sm ">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
                
            </div>
        </div>
    );
}

export default ViewCategory;
