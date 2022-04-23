import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Restaurants.css'

const Restaurants = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.categories))
    }, [])


    return (
        <div className='restaurant-container'>
            <div className='restaurant'>
                <h1>Total Meals: {meals.length} </h1>
                {
                    meals.map(meal => <Meal
                        key={meal.idCategory}
                        meal={meal}
                    ></Meal>)
                }

            </div>
            <div className='order-container'>
                <h1>This is order</h1>
            </div>
        </div>
    );
};

export default Restaurants;