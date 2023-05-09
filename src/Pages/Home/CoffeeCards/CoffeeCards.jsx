import React, { useState } from 'react';
import CoffeeCard from '../CoffeeCard/CoffeeCard';
import { Link, useLoaderData } from 'react-router-dom';

const CoffeeCards = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees)
    // console.log(coffees);
    return (
        <div>
            <div>
                <h3 className='coffee-card-title'>Our Popular Products</h3>
                <div>
                    <Link to='/addCoffee'><button className='btn bg-[#E3B577]'>Add Coffee</button></Link>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    coffees.map(coffee => <CoffeeCard
                        key={coffee._id}
                        coffee={coffee}
                        coffees = {coffees}
                        setCoffees = {setCoffees}
                    ></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default CoffeeCards;