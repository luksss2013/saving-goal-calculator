/* eslint-disable testing-library/prefer-screen-queries */
import { getByLabelText, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ReachDate from "./ReachDate";

const date = new Date();
const nextMonthDate = new Date(date.getFullYear(), date.getMonth() + 1);

const mock = {
  reachDate: nextMonthDate,
  setReachDate: jest.fn(),
};

describe("Test Reach Date input", () => {
  test("Should render Reach Date input", () => {
    const { getByText } = render(
      <ReachDate reachDate={mock.reachDate} setReachDate={mock.setReachDate} />
    );

    expect(getByText("Reach goal by")).toBeTruthy();
  });

  test("Should render reachDate month", () => {
    const month = nextMonthDate.toLocaleString("en-us", { month: "long" });

    const { getByText } = render(
      <ReachDate reachDate={mock.reachDate} setReachDate={mock.setReachDate} />
    );

    expect(getByText(month)).toBeTruthy();
  });

  test("Should render reachDate year", () => {
    const { getByText } = render(
      <ReachDate reachDate={mock.reachDate} setReachDate={mock.setReachDate} />
    );

    expect(getByText(nextMonthDate.getFullYear())).toBeTruthy();
  });

  test("Should not call setReachDate when actual month", () => {
    const { getByTestId } = render(
      <ReachDate reachDate={mock.reachDate} setReachDate={mock.setReachDate} />
    );
    
    const leftArrow = getByTestId('prefix')
    
    userEvent.click(leftArrow);
    expect(mock.setReachDate).not.toHaveBeenCalled();
  });

  test("Should call setReachDate when click on arrows", () => {
    const { getByTestId } = render(
      <ReachDate reachDate={mock.reachDate} setReachDate={mock.setReachDate} />
    );
    
    const leftArrow = getByTestId('prefix')
    const rightArrow = getByTestId('suffix')
    
    userEvent.click(rightArrow);
    expect(mock.setReachDate).toHaveBeenCalled();

    userEvent.click(leftArrow);
    expect(mock.setReachDate).toHaveBeenCalled();
  });
});

export {};
