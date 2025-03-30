"use Client"
import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import Card from './card';



const Dashboard = () => {

    // Sample data (Replace with API fetch)
    const stats = [
        { title: 'Users', count: 120, link: '/admin/users' },
        { title: 'Products', count: 45, link: '/admin/products' },
        { title: 'Product Inquiries', count: 78, link: '/admin/inquiries' },
        { title: 'Contact Messages', count: 32, link: '/admin/messages' },
    ];

    const enquiryData = [
        { name: "Product A", enquiries: 30 },
        { name: "Product B", enquiries: 20 },
        { name: "Product C", enquiries: 15 },
        { name: "Product D", enquiries: 10 },
    ];
    return (
        <div>
             {/* Stats Overview */}
            <div className="row mb-4">
                {stats.map((stat, index) => (
                <div key={index} className="col-md-3">
                   <Card title={stat.title} count={stat.count} link={stat.link} icon=""/>
                </div>
                ))}
            </div>
            {/* Graph Section */}
            <div className="card shadow-sm p-4">
                <h5 className="mb-3">Product Enquiries</h5>
                {/* <ResponsiveContainer width="100%" height={300}>
                <BarChart data={enquiryData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="enquiries" fill="#00BF63" />
                </BarChart>
                </ResponsiveContainer> */}
            </div>
        </div>
    );
}

export default Dashboard;
