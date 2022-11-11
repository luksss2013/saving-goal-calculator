import { Link } from "react-router-dom";
import Button from "../../../components/button/Button";
import styles from "./EmptyState.module.scss";
import GoalIcon from "./goal.svg";

type EmptyStateProps = {
  link: string;
  title: string;
}

export default function EmptyState({ link, title }: EmptyStateProps) {
  return (
    <div className={styles.goal}>
      <div className={styles.title}>
        <img alt="icon" src={GoalIcon} />
        <span>{title}</span>
      </div>

      <Link to={link}>
        <Button onClick={() => {}}>Setup goal</Button>
      </Link>
    </div>
  );
}
