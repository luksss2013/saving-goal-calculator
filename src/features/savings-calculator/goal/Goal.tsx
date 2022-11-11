import { Link } from "react-router-dom";
import Button from "../../../components/button/Button";
import styles from "./Goal.module.scss";
import GoalIcon from "./goal.svg";

type GoalProps = {
  value: string;
  reachDate: string;
  title: string;
  link: string;
};

export default function Goal({ value, reachDate, title, link }: GoalProps) {
  return (
    <div className={styles.goal}>
      <div>
        <img alt="icon" src={GoalIcon} />
      </div>
      <span>{title}</span>
      <div className={styles.info}>
        <div className={styles.amount}>
          <span className={styles.label}>Goal amount</span>
          <span className={styles.value}>{value}</span>
        </div>
        <div className={styles.reach}>
          <span className={styles.label}>Reach goal by</span>
          <span className={styles.value}>
            {new Date(reachDate).toLocaleDateString("pt-br", {
              timeZone: "UTC",
            })}
          </span>
        </div>
      </div>
      <div className={styles.button}>
        <Link to={link}>
          <Button onClick={() => {}} link>EDIT GOAL</Button>
        </Link>
        
      </div>
    </div>
  );
}
