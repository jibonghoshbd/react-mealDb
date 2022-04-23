import React from 'react';

const Meal = (props) => {
    const { strCategory, strCategoryDescription, strCategoryThumb } = props.meal;
    return (
        <div>
            <img src={strCategoryThumb} alt="" />
            <p>StrDescription: {strCategoryDescription}</p>
        </div>
    );
};

export default Meal;