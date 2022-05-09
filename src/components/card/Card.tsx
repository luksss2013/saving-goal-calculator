import styles from "./Card.module.scss";
import React from 'react';

interface CardProps {
  children?: JSX.Element | string;
}

export default function Card({ children }: CardProps) {
  return <div className={styles.card}>{children}</div>;
}
