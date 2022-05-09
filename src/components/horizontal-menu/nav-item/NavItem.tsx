import { Link } from "react-router-dom";
import { INavItem } from "../HorizontalMenu.model";
import styles from "./NavItem.module.scss";
import React from 'react';

export default function NavItem({ text, link }: INavItem) {
  return (
    <Link to={link} className={styles.item}>
      {text}
    </Link>
  );
}
