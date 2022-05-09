import styles from "./ReachDate.module.scss";
import PreviousArrow from "./previous-arrow.svg";
import NextArrow from "./next-arrow.svg";
import InputContainer from "../input-container/InputContainer";
import React from "react";
import { formatLongMonth, getFullYear } from "../../utils/date-utils";

interface ReachDateProps {
  reachDate: Date;
  setReachDate: React.Dispatch<React.SetStateAction<Date>>;
}

export default function ReachDate({ reachDate, setReachDate }: ReachDateProps) {
  function changeMonth(operation: (month: number) => number) {
    const date = new Date();
    const actualDate = new Date(date.getFullYear(), date.getMonth(), 1);

    const dateChanged = new Date(reachDate);
    dateChanged.setMonth(operation(reachDate.getMonth()));

    if (dateChanged > actualDate) {
      setReachDate(dateChanged);
    }
  }

  return (
    <InputContainer
      label="Reach goal by"
      prefix={<img alt="previous-arrow" src={PreviousArrow} />}
      onPrefixClick={() => changeMonth((month: number) => month - 1)}
      suffix={<img alt="next-arrow" src={NextArrow} />}
      onSuffixClick={() => changeMonth((month: number) => month + 1)}
    >
      <div className={styles.content}>
        <span className={styles.month}>{formatLongMonth(reachDate)}</span>
        <span className={styles.year}>{getFullYear(reachDate)}</span>
      </div>
    </InputContainer>
  );
}
