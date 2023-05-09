import React, { useState } from 'react';
import { GrView } from 'react-icons/gr';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const navigate = useNavigate();
    const { _id, name, chef, supplier, taste, category, details, photoURL } = coffee;
    const handleNavigate = () => {
        navigate(`updateCoffee/${_id}`);
    }
    // const [coffees, setCoffees] = useState([])
    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount === 1) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(coffee => coffee._id !== _id)
                            setCoffees(remaining)
                        }
                    })
            }
        })

    }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl px-6 py-6">
                <div className="flex justify-center items-center gap-4">
                    <figure><img className='md:w-[250px] h-[200px] rounded' src={photoURL} alt="Movie" /></figure>
                    <div className=''>
                        <p className="">Name:{name}</p>
                        <p className="">Chef:{chef}</p>
                        <p className="">Taste:{taste}</p>
                    </div>
                    <div className="flex flex-col gap-2 flex-end">
                        <button className="btn border-0 hover:bg-[#D2B48C] bg-[#D2B48C]"><GrView style={{ fontSize: '20px' }}></GrView></button>
                        <button onClick={handleNavigate} className="btn border-0 bg-[#3C393B]"><AiOutlineEdit style={{ fontSize: '20px' }}></AiOutlineEdit></button>

                        <button onClick={() => handleDelete(coffee._id)} className="btn  hover:bg-red-600 border-0 bg-[#EA4744]"><AiOutlineDelete style={{ fontSize: '20px' }}></AiOutlineDelete></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;