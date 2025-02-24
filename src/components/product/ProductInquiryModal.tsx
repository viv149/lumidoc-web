"use client";
import React from "react";

const ProductInquiryModal = ({ product }) => {

    return (
        <div className="modal fade" id="inquiryModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4>Inquire About {product.name}</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-start">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" id="name" name="name" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" id="email" name="email" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="mobile" className="form-label">Contact Number</label>
                                <input type="text" id="mobile" name="mobile" className="form-control" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea id="message" className="form-control" rows={5} required></textarea>
                            </div>
                            <button type="submit" className="btn btn-success">Submit Inquiry</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      
    );
};

export default ProductInquiryModal;