export function getFormattedNumber(number, width, formatChar) {
  formatChar = formatChar || '0';
  const formattedNumber = String(number);

  return formattedNumber.length >= width
    ? formattedNumber
    : new Array(width - formattedNumber.length + 1).join(formatChar) + formattedNumber;
}

export function getFormattedIntAndFloadPartsOfValue(value) {
  let intPartValue = 0;
  let doublePartValue = 0;

  if (!Number.isNaN(Number.parseFloat(value))) {
    intPartValue = Math.trunc(value);
    doublePartValue = (value - intPartValue).toFixed(2) * 100;
  }

  const formattedIntPart = getFormattedNumber(intPartValue, 2);
  const formattedDoublePart = getFormattedNumber(doublePartValue, 2);

  return { formattedIntPart, formattedDoublePart };
}
