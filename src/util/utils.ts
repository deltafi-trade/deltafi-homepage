import BigNumber from "bignumber.js";

export function scheduleWithInterval(func: () => void, delay: number) {
  func();
  const interval = setInterval(func, delay);
  return () => clearInterval(interval);
}

export function valueToDisplayFormat(value: BigNumber) {
  const billion = 100_000_000;
  const million = 100_000;
  const thousand = 1000;

  // different display based on the amount of pool reserves
  if (value.isGreaterThan(billion)) {
    return "$" + value.dividedBy(billion).toFixed(2) + "B";
  } else if (value.isGreaterThan(million)) {
    return "$" + value.dividedBy(million).toFixed(2) + "M";
  } else if (value.isGreaterThan(thousand)) {
    return "$" + value.dividedBy(thousand).toFixed(2) + "K";
  }

  return "$" + value.toFixed(2);
}
