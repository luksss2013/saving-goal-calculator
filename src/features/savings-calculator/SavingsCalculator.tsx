import React, { useState } from "react";
import Amount from "../../components/amount/Amount";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";
import ReachDate from "../../components/reach-date/ReachDate";
import Calculator from "./calculator/Calculator";
import SavingsHeader from "./header/Header";
import styles from "./SavingsCalculator.module.scss";

const date = new Date();
const nextMonthDate = new Date(date.getFullYear(), date.getMonth() + 1);

export default function SavingsCalculator() {
  const [amount, setAmount] = useState("0");
  const [reachDate, setReachDate] = useState(nextMonthDate);

  return (
    <Card>
      <div className={styles.savings}>
        <SavingsHeader />

        <div className={styles.simulation}>
          <div className={styles.amount}>
            <Amount amount={amount} setAmount={setAmount} />
          </div>

          <div className={styles.reach}>
            <ReachDate reachDate={reachDate} setReachDate={setReachDate} />
          </div>
        </div>

        <Calculator amount={amount} reachDate={reachDate} />

        <div className={styles.cta}>
          <Button>Confirm</Button>
        </div>
      </div>
    </Card>
  );
}
