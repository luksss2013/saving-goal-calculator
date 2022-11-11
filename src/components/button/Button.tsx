import styles from './Button.module.scss';
import React from 'react';

interface ButtonProps {
    children: JSX.Element | string
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ children, onClick }: ButtonProps) {

    return (
        <button onClick={onClick} className={styles.button}>{children}</button>
    )
}