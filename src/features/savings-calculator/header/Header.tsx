import BuyAHouse from './buy-a-house.svg';
import styles from './Header.module.scss';
import React from 'react';

export default function SavingsHeader() {
  return (
    <div className={styles.header}>
      <img src={BuyAHouse} alt="buy-a-house" className={styles.icon} />

      <div className={styles.title}>
          <h3>Buy a house</h3>
          <span>Saving goal</span>
      </div>
    </div>
  );
}
