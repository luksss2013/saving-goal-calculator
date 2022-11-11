import { goals } from "../../../goals";
import EmptyState from "../goal/EmptyState";
import Goal from "../goal/Goal";
import styles from "./GoalsList.module.scss";

export default function GoalsList() {
  function getFromLocalStorage(id: string) {
    const goalData = localStorage.getItem(id);

    if (goalData) {
      return JSON.parse(goalData);
    }
  }

  return (
    <div className={styles.goals}>
      {goals.map((goal) => {
        const goalFromLocalStorage = getFromLocalStorage(goal.id);

        return goalFromLocalStorage ? (
          <Goal
            title={goal.title}
            value={goalFromLocalStorage.amount}
            reachDate={goalFromLocalStorage.reachDate}
            link={"/saving-calculator/" + goal.id}
          />
        ) : (
          <EmptyState link={"/saving-calculator/" + goal.id} title={goal.title} />
        );
      })}
    </div>
  );
}
