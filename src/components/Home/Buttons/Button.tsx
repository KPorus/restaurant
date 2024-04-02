import React from 'react';
import style from "@/styles/button/button.module.scss"
const Button = ({title}:{title:String}) => {
    return (
        <div className={style.button} >
            <h4 className={style.title}>{title}</h4>
        </div>
    );
};

export default Button;