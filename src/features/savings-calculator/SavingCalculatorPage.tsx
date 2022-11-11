import SavingsCalculator from "./SavingsCalculator";
import styles from "./SavingsCalculator.module.scss";

export default function SavingsCalculatorPage() {
  return (
    <>
      <h2 className={styles.header}>
        Let's plan your <b>saving goal.</b>
      </h2>

      <SavingsCalculator />
    </>
  );
}
