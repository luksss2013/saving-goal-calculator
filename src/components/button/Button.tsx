import styles from './Button.module.scss';
import React from 'react';

interface ButtonProps {
    children: JSX.Element | string
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    link?: boolean;
}

export default function Button({ children, onClick, link }: ButtonProps) {

    return (
        <button onClick={onClick} className={link ? styles.buttonLink : styles.button}>{children}</button>
    )
}