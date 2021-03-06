import React from 'react';
import './Meal.css';

const Meal = (props) => {
    const { strCategory, strCategoryDescription, strCategoryThumb } = props.meal;

    const { handelAddMeal } = props;

    return (
        <div className='meal'>
            <img src={strCategoryThumb} alt="" />
            <h3 className='category'>strCategory: {strCategory}</h3>
            <p>StrDescription: {strCategoryDescription.slice(0, 100)}</p>
            <div className='btn'>
                <button
                    onClick={() => handelAddMeal(props.meal)}
                    className='regural-btn'>Add Meal</button>
            </div>
        </div>
    );
};

export default Meal;