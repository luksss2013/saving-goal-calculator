import styles from "./Layout.module.scss";
import TopMenu from "./top-menu/TopMenu";
import Content from "../../components/content";
import SavingsCalculator from "../savings-calculator/SavingsCalculator";
import React from 'react';

export default function Layout() {
  return (
    <div className={styles.layout}>
      <TopMenu />

      <section className={styles.content}>
        <Content>
          <h2 className={styles.header}>Let's plan your <b>saving goal.</b></h2>
          
          <SavingsCalculator />
        </Content>
      </section>
    </div>
  );
}
