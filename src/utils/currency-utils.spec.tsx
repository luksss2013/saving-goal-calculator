import { normalizedStringToCurrency } from "./currency-utils";

describe("Test Currency utils", () => {
  test("Should convert correctly without cents", () => {
    const currency = normalizedStringToCurrency('10023123')

    expect(currency).toEqual('10,023,123');
  });

  test("Should convert correctly with special chars", () => {
    const currency = normalizedStringToCurrency('$10023123')

    expect(currency).toEqual('10,023,123');
  });

  test("Should convert correctly with cents", () => {
    const currency = normalizedStringToCurrency('10023123.25')

    expect(currency).toEqual('10,023,123.25');
  });
});

export {};
