import styles from './Content.module.scss';
import React from 'react';

interface ContentProps {
    children: JSX.Element | JSX.Element[],
}

export default function Content({ children }: ContentProps) {

    return (
        <div className={styles.content}>
            {children}
        </div>
    )
}