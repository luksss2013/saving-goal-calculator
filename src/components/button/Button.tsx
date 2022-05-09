import styles from './Button.module.scss';
import React from 'react';

interface ButtonProps {
    children: JSX.Element | string
}

export default function Button({ children }: ButtonProps) {

    return (
        <button className={styles.button}>{children}</button>
    )
}