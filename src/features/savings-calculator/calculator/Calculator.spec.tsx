/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import Calculator from "./Calculator";

const date = new Date();
const nextMonthDate = new Date(date.getFullYear(), date.getMonth() + 1);
const nextSevenMonthsDate = new Date(date.getFullYear(), date.getMonth() + 7);

const mock = {
  reachDate: nextMonthDate,
  amount: "0",
};

describe("Test Calculator", () => {
  test("Should render calculator", () => {
    const { getByTestId } = render(
      <Calculator reachDate={mock.reachDate} amount={mock.amount} />
    );

    expect(getByTestId("calculator")).toBeTruthy();
  });

  test("Should show monthly savings correctly", () => {
    const { getByText } = render(
      <Calculator reachDate={nextSevenMonthsDate} amount="10,522.25" />
    );

    expect(getByText("$1,503.18")).toBeTruthy()
  });

  test("Should show monthly savings correctly when amount = 0", () => {
    const { getAllByText } = render(
      <Calculator reachDate={nextSevenMonthsDate} amount="0" />
    );

    expect(getAllByText("$0")).toBeTruthy()
  });

  test("Should show monthly deposits correctly", () => {
    const { getByText } = render(
      <Calculator reachDate={nextSevenMonthsDate} amount="10,522.25" />
    );

    expect(getByText("7 monthly deposits")).toBeTruthy()
  });

  test("Should show monthly deposits correctly when null amount = 0", () => {
    const { getByText } = render(
      <Calculator reachDate={nextSevenMonthsDate} amount="0" />
    );

    expect(getByText("0 monthly deposits")).toBeTruthy()
  });

  test("Should show extended month correctly", () => {
    const { getByText } = render(
      <Calculator reachDate={nextSevenMonthsDate} amount="10,000" />
    );

    expect(getByText("December 2022")).toBeTruthy()
  });
});

export {};
