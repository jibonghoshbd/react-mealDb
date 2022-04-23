import React, { useEffect, useState } from 'react';
import './Restaurants.css'

const Restaurants = () => {
    const { meals, setMeals } = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;

    }, [])


    return (
        <div className='restaurant-container'>
            <div className='restaurant'>
                <h1>i am restaurants</h1>
            </div>
            <div className='order-container'>
                <h1>This is order</h1>
            </div>
        </div>
    );
};

export default Restaurants;