import React from 'react';
import AddCategory from '../../../components/category/AddCategory';
import ViewCategory from '../../../components/category/ViewCategory';

const Page = () => {
    return (
        <div className='container mt-4'>
            <div className="row">
                <div className="col-sm-12 col-md-4">
                    <AddCategory/>
                </div>
                <div className="col-sm-12 col-md-8">
                    <ViewCategory/>
                </div>
            </div>
        </div>
    );
}

export default Page;
