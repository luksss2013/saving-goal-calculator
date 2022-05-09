export function numberToCurrency(value: number): string {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });

  return formatter.format(value);
}

export function normalizeStringToCurrency(value: string): string {
  return value.replaceAll(/[^0-9a-zA-Z.]/g, "");
}

export function normalizedStringToCurrency(value: string): string {
  return numberToCurrency(Number(normalizeStringToCurrency(value))).replaceAll(
    "$",
    ""
  );
}


