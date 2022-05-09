import styles from "./HorizontalMenu.module.scss";
import React from 'react';

interface IHorizontalMenu {
  children?: JSX.Element
}

export default function HorizontalMenu({ children }: IHorizontalMenu) {

  return (
    <nav className={styles.nav}>
      {children}
    </nav>
  );
}
