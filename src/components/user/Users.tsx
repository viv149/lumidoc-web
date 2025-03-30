"use client"
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';


interface User {
    length: number;
    map(arg0: (data: any, index: any) => React.JSX.Element): React.ReactNode;
    id: number;
    name: string;
    email: string;
    role: string;
}

const Users = () => {

    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        const token =  getCookie('token');
        if (!token) {
            router.push("/admin/login"); // Redirect if no token
            return;
        }

        const fetchUser = async () => {
            try {
                const response = await fetch("/api/users", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });

                if (response.ok) {
                    const userData = await response.json();
                    setUser(userData.data);
                } else {
                    toast.error("User not found"); // Redirect on error
                }
            } catch (error) {
                console.error("Error fetching user:", error);
            }
        };

        fetchUser();
    }, [router, user]);

    return (
        <React.Fragment>
            <div className='container mt-5'>
                <div className="row ">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                {user === null ? (
                                    <p className="text-center text-muted">Loading user data...</p>
                                ) : user.length === 0 ? (
                                    <p className="text-center text-danger">No users found.</p>
                                ) : (
                                    <div className="table-responsive">
                                        <table className="table table-striped">
                                            <thead className="table-dark">
                                                <tr>
                                                    <th>#</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Role</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {user.map((data, index) => (
                                                    <tr key={`users-${index}`}>
                                                        <td>{index + 1}</td>
                                                        <td>{data.name}</td>
                                                        <td>{data.email}</td>
                                                        <td>
                                                            <span className="badge bg-success">{data.role}</span>
                                                        </td>
                                                        <td>
                                                            <button className="btn btn-primary btn-sm">Edit</button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </React.Fragment>
    );
}

export default Users;
