export function monthDiff(dateFrom: Date, dateTo: Date): number {
  const monthsUntilDateTo =
    dateTo.getMonth() -
    dateFrom.getMonth() +
    12 * (dateTo.getFullYear() - dateFrom.getFullYear());

  return monthsUntilDateTo;
}

export function formatLongMonth(date: Date) {
  return date.toLocaleString("en-us", {
    month: "long",
  });
}

export function getFullYear(date: Date): number {
  return date.getFullYear();
}
