import Decimal from "decimal.js";

Decimal.set({ precision: 28, rounding: Decimal.ROUND_HALF_UP });

export function add(a: string | number, b: string | number): string {
  return new Decimal(a).plus(b).toString();
}

export function subtract(a: string | number, b: string | number): string {
  return new Decimal(a).minus(b).toString();
}

export function multiply(a: string | number, b: string | number): string {
  return new Decimal(a).times(b).toString();
}

export function pnl(
  quantity: string | number,
  avgBuyPrice: string | number,
  currentPrice: string | number
): { value: string; percent: string } {
  const cost = new Decimal(quantity).times(avgBuyPrice);
  const value = new Decimal(quantity).times(currentPrice);
  const delta = value.minus(cost);
  const percent = cost.isZero() ? new Decimal(0) : delta.div(cost).times(100);
  return { value: delta.toFixed(2), percent: percent.toFixed(2) };
}

export function formatUsd(amount: string | number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(Number(amount));
}
