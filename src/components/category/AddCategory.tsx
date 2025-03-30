"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

interface CategoryFormValues {
    name: string;
}

const AddCategory = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<CategoryFormValues>();

    const onSubmit = async (data: CategoryFormValues) => {
        console.log("Category Data:", data);
        try{
            const response = await fetch("/api/categories", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success(result.message);
                reset(); // Reset form after successful submission
            } else {
                console.error("Error:", result.error);
            }
            reset(); // Reset form after submission
        }catch(error){
            console.error("Failed to add category", error);
        }
    };


    return (
        <div className="card">
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)} className="">
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register("name", { required: "Name is required" })}
                        />
                        {errors.name && <small className="text-danger">{errors.name.message}</small>}
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Add Category</button>
                </form>
            </div>
        </div>
    );
}

export default AddCategory;
