"use client"

import React from 'react';
import { useForm } from 'react-hook-form';



interface ProductFormValues {
    categoryId: string;
    productName: string;
    model: string;
    smallDesc: string;
    description: string;
    features: string;
    specifications: string;
    seoTitle: string;
    seoDescription: string;
}

const AddProducts = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ProductFormValues>();

    const onSubmit = (data: ProductFormValues) => {
        console.log("Product Data:", data);
        reset(); // Reset form after submission
    };

    return (
        <div className='container mt-4'>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* Category ID */}
                                <div className="mb-3">
                                    <label htmlFor='categoryId' className="form-label">Category ID</label>
                                    <select
                                        id='categoryId'
                                        className="form-control"
                                        {...register("categoryId", { required: "Category ID is required" })}
                                    >
                                        <option value="">Choose...</option>
                                    </select>
                                    {errors.categoryId && <small className="text-danger">{errors.categoryId.message}</small>}
                                </div>

                                {/* Product Name */}
                                <div className="mb-3">
                                    <label className="form-label">Product Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        {...register("productName", { required: "Product Name is required" })}
                                    />
                                    {errors.productName && <small className="text-danger">{errors.productName.message}</small>}
                                </div>

                                {/* Model */}
                                <div className="mb-3">
                                    <label className="form-label">Model</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        {...register("model", { required: "Model is required" })}
                                    />
                                    {errors.model && <small className="text-danger">{errors.model.message}</small>}
                                </div>

                                {/* Small Description */}
                                <div className="mb-3">
                                    <label className="form-label">Small Description</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        {...register("smallDesc", { required: "Small Description is required" })}
                                    />
                                    {errors.smallDesc && <small className="text-danger">{errors.smallDesc.message}</small>}
                                </div>

                                {/* Description */}
                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <textarea
                                        className="form-control"
                                        rows={3}
                                        {...register("description", { required: "Description is required" })}
                                    ></textarea>
                                    {errors.description && <small className="text-danger">{errors.description.message}</small>}
                                </div>

                                {/* Features */}
                                <div className="mb-3">
                                    <label className="form-label">Features</label>
                                    <textarea
                                        className="form-control"
                                        rows={3}
                                        {...register("features", { required: "Features are required" })}
                                    ></textarea>
                                    {errors.features && <small className="text-danger">{errors.features.message}</small>}
                                </div>

                                {/* Specifications */}
                                <div className="mb-3">
                                    <label className="form-label">Specifications</label>
                                    <textarea
                                        className="form-control"
                                        rows={3}
                                        {...register("specifications", { required: "Specifications are required" })}
                                    ></textarea>
                                    {errors.specifications && <small className="text-danger">{errors.specifications.message}</small>}
                                </div>

                                {/* SEO Title */}
                                <div className="mb-3">
                                    <label className="form-label">SEO Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        {...register("seoTitle", { required: "SEO Title is required" })}
                                    />
                                    {errors.seoTitle && <small className="text-danger">{errors.seoTitle.message}</small>}
                                </div>

                                {/* SEO Description */}
                                <div className="mb-3">
                                    <label className="form-label">SEO Description</label>
                                    <textarea
                                        className="form-control"
                                        rows={2}
                                        {...register("seoDescription", { required: "SEO Description is required" })}
                                    ></textarea>
                                    {errors.seoDescription && <small className="text-danger">{errors.seoDescription.message}</small>}
                                </div>

                                {/* Submit Button */}
                                <button type="submit" className="btn btn-primary w-100">Add Product</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProducts;
