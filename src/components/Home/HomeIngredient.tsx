import React from 'react';
import style from "@/styles/HomeIngredient/homeIngredient.module.scss"
const HomeIngredient = () => {
    return (
        <div className={`${style.ingredient}`}>
            <div className='row'>
                <div className='col-1-of-2'></div>
                <div className={`col-1-of-2 ${style.ingredientBody}`}>
                    <h1 className={`${style.ingredientTitle}`}>Fine ingredients</h1>
                </div>
            </div>
        </div>
    );
};

export default HomeIngredient;