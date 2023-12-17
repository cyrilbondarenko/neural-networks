import React from 'react';
import s from "./Button.module.scss";

interface IButton {
    text: string
}

const Button = ({text}: IButton) => {
    return (
        <button className={s.button}>
            <span>{text}</span>
        </button>
    );
};

export default Button;