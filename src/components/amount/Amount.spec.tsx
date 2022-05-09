/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Amount from "./Amount";

let { amount, setAmount } = {
  amount: "0",
  setAmount: jest.fn(),
};

describe("Test Amount input", () => {
  test("Should render Amount", () => {
    const { getByText } = render(
      <Amount amount={amount} setAmount={setAmount} />
    );

    expect(getByText("Total amount")).toBeTruthy();
  });

  test("Should call setAmount when input changes", async () => {
    const { getByLabelText } = render(
      <Amount amount={amount} setAmount={setAmount} />
    );

    const amountInput = getByLabelText("amount") as HTMLInputElement;

    userEvent.type(amountInput, "1000");
    expect(setAmount).toHaveBeenCalled();
  });
});

export {};
