import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import Order from '../Order/Order';
import './Restaurants.css'

const Restaurants = () => {
    const [meals, setMeals] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.categories))
    }, [])

    const handelAddMeal = (meal) => {
        const newOrder = [...orders, meal]
        setOrders(newOrder)
    }

    return (
        <div className='restaurant-container'>
            <div className='restaurant'>
                {
                    meals.map(meal => <Meal
                        key={meal.idCategory}
                        meal={meal}
                        handelAddMeal={handelAddMeal}
                    ></Meal>)
                }

            </div>
            <div className='order-container'>
                <Order
                    orders={orders}
                ></Order>
            </div>
        </div>
    );
};

export default Restaurants;