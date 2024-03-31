export function calculatePercentageChange(initial, final) {
  const absoluteInitial = Math.abs(initial);
  const change = final - initial;

  if (change > 0) {
    const percentIncrease = (change / absoluteInitial) * 100;
    return `+${percentIncrease.toFixed(2)}%`;
  } else if (change < 0) {
    const percentDecrease = (Math.abs(change) / absoluteInitial) * 100;
    return `-${percentDecrease.toFixed(2)}%`;
  } else {
    return "0%";
  }
}
