import React from 'react';
import './AddCoffee.css'
import swal from 'sweetalert';

const AddCoffee = () => {
    const handleAddCoffee = (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoURL = form.PhotoURL.value;
        const newCoffee = { name, chef, supplier, taste, category, details, photoURL }
        console.log(newCoffee);
        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data. insertedId){
                    swal({
                        title: "Success!",
                        text: "User Added successfully",
                        icon: "success",
                        dangerMode: true,
                      })
                }
                // form.reset();
            })
    }
    return (
        <div className='bg-[#F4F3F0] px-4 md:px-28 py-16'>
            <h2 className='coffee-title text-center'>Add a Coffee</h2>
            <p className='coffee-des'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            <form onSubmit={handleAddCoffee}>
                {/* Name */}
                <div className="md:flex gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <input type="text" placeholder="Name" name='name' className="input input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Chef</span>
                        </label>
                        <input type="text" placeholder="Chef" name='chef' className="input input-bordered w-full" />
                    </div>

                </div>
                {/* supplier */}
                <div className="md:flex gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <input type="text" placeholder="Supplier" name='supplier' className="input input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <input type="text" placeholder="Taste" name='taste' className="input input-bordered w-full" />
                    </div>
                </div>
                {/* category */}
                <div className="md:flex gap-6">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <input type="text" placeholder="Category" name='category' className="input input-bordered w-full" />
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <input type="text" placeholder="Details" name='details' className="input input-bordered w-full" />
                    </div>
                </div>
                {/* photo url */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">PhotoURL</span>
                    </label>
                    <input type="text" placeholder="PhotoURL" name='PhotoURL' className="input input-bordered w-full" />
                </div>
                <input type="submit" value="AddCoffee" className='btn btn-block bg-[#D2B48C] text-white text-capitalize mt-6' />
            </form>
        </div>
    );
};

export default AddCoffee;