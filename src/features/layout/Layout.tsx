import styles from "./Layout.module.scss";
import TopMenu from "./top-menu/TopMenu";
import Content from "../../components/content";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SavingsCalculatorPage from "../savings-calculator/SavingCalculatorPage";
import GoalsList from "../savings-calculator/goals-list/GoalsList";

export default function Layout() {
  return (
    <div className={styles.layout}>
      <TopMenu />

      <section className={styles.content}>
        <Content>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<GoalsList />} />
              <Route
                path="/saving-calculator/:goalId"
                element={<SavingsCalculatorPage />}
              ></Route>
            </Routes>
          </BrowserRouter>
        </Content>
      </section>
    </div>
  );
}
