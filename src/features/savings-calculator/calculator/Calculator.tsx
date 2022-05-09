import React, { useEffect, useState } from "react";
import { normalizeStringToCurrency } from "../../../utils/currency-utils";
import { formatLongMonth, getFullYear, monthDiff } from "../../../utils/date-utils";
import styles from "./Calculator.module.scss";

interface CalculatorProps {
  amount: string;
  reachDate: Date;
}

export default function Calculator({ amount, reachDate }: CalculatorProps) {
  const [monthUntil, setMonthUntil] = useState(0);

  useEffect(() => {
    setMonthUntil(monthDiff(new Date(), reachDate));
  }, [reachDate]);

  function amountPerMonth(amount: string, months: number) {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
      minimumFractionDigits: 0
    });

    return formatter.format(Number(normalizeStringToCurrency(amount)) / months);
  }

  return (
    <div className={styles.calculator} data-testid="calculator">
      <div className={styles.header}>
        <h4 className={styles.label}>Monthly amount</h4>

        <h3 className={styles.result}>{amountPerMonth(amount, monthUntil)}</h3>
      </div>

      <p className={styles.info}>
        You’re planning <b>{amount !== '0' ? monthUntil : 0} monthly deposits</b> to reach your{" "}
        <b>${amount}</b> goal by
        <b>{` ${formatLongMonth(reachDate)} ${getFullYear(reachDate)}`}</b>.
      </p>
    </div>
  );
}
