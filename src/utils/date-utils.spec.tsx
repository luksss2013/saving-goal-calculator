import { monthDiff } from "./date-utils";

describe("Test Date utils", () => {
  test("Should show the correctly difference between months", () => {
    const actualDate = new Date();
    const nextTenMonthsDate = new Date(actualDate.getFullYear(), actualDate.getMonth() + 10);

    expect(monthDiff(actualDate, nextTenMonthsDate)).toEqual(10);
    expect(monthDiff(actualDate, actualDate)).toEqual(0);
    expect(monthDiff(nextTenMonthsDate, nextTenMonthsDate)).toEqual(0);
  });
});

export {};
