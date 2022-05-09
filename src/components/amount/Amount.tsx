import React, { useEffect, useRef } from "react";
import { normalizedStringToCurrency } from "../../utils/currency-utils";
import InputContainer from "../input-container/InputContainer";
import styles from "./Amount.module.scss";
import DollarSign from "./dollar-sign.svg";

interface AmountProps {
  amount: string
  setAmount: React.Dispatch<React.SetStateAction<string>>
}

export default function Amount({ amount, setAmount }: AmountProps) {
  const amountRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const currentAmount = amountRef.current;

    if (currentAmount !== null) {
      currentAmount.selectionStart = currentAmount.value.length;
      currentAmount.selectionEnd = currentAmount.value.length;
    }
  }, [amount]);

  function validateAmountField(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    if (!event.target.validity.patternMismatch) {

      if (value.charAt(value.length - 1) === ".") {
        setAmount(value);
      } else {
        setAmount(
          normalizedStringToCurrency(value)
        );
      }
    }
  }

  return (
    <InputContainer label="Total amount" prefix={<img alt='dollar-sign' src={DollarSign} />}>
      <input
        aria-label="amount"
        ref={amountRef}
        value={amount}
        onChange={validateAmountField}
        pattern="^[0-9,]*[.]{0,1}[0-9,]*$"
        className={styles.input}
      />
    </InputContainer>
  );
}
