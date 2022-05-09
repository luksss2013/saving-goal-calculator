import HorizontalMenu from "../../../components/horizontal-menu";
import styles from "./TopMenu.module.scss";
import Logo from './origin-logo.svg';
import React from 'react';

export default function TopMenu() {
  return (
    <HorizontalMenu>
      <img src={Logo} alt="origin-logo" className={styles.logo} />
    </HorizontalMenu>
  );
}
