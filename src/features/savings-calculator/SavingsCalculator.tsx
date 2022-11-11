import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  const { goalId } = useParams();

  useEffect(() => {
    getFromLocalStorage();
  }, []);

  function getFromLocalStorage() {
    if(goalId) {
      const calculatorData = localStorage.getItem(goalId);

      if (calculatorData) {
        const { amount, reachDate } = JSON.parse(calculatorData);
  
        setAmount(amount);
        setReachDate(new Date(reachDate));
      }
    }
  }

  function persistInLocalStorage() {
    const persistData = {
      amount,
      reachDate,
    };

    if(goalId) {
      localStorage.setItem(goalId, JSON.stringify(persistData));
    }
  }

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
          <Button onClick={() => persistInLocalStorage()}>Confirm</Button>
        </div>
      </div>
    </Card>
  );
}
