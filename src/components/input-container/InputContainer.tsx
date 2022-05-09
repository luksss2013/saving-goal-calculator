import styles from "./InputContainer.module.scss";
import React from 'react';

interface InputContainerProps {
  children: JSX.Element | JSX.Element[];
  label?: string;
  prefix?: JSX.Element;
  onPrefixClick?: Function;
  suffix?: JSX.Element;
  onSuffixClick?: Function;
}

export default function InputContainer({
  children,
  label,
  prefix,
  onPrefixClick,
  suffix,
  onSuffixClick
}: InputContainerProps) {
  return (
    <div className={styles.container}>
      <span className={styles.label}>
        {label}
      </span>

      <div className={styles.input}>
        {prefix && <div data-testid="prefix" onClick={() => onPrefixClick ? onPrefixClick() : null} className={styles.prefix}>{prefix}</div>}

        <div className={styles.children}>{children}</div>

        {suffix && <div data-testid="suffix" onClick={() => onSuffixClick ? onSuffixClick() : null} className={styles.suffix}>{suffix}</div>}
      </div>
    </div>
  );
}
