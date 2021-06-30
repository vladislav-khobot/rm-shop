class FormatUtils {

  static getFormattedNumber(number, width, formatChar) {
    formatChar = formatChar || '0';
    const formattedNumber = String(number);

    return formattedNumber.length >= width
      ? formattedNumber
      : new Array(width - formattedNumber.length + 1).join(formatChar) + formattedNumber;
  }

  static splitPrice(value) {
    let intPartValue = 0;
    let doublePartValue = 0;

    if (!Number.isNaN(Number.parseFloat(value))) {
      intPartValue = Math.trunc(value);
      doublePartValue = (value - intPartValue).toFixed(2) * 100;
    }

    const formattedIntPart = this.getFormattedNumber(intPartValue, 1);
    const formattedDoublePart = this.getFormattedNumber(doublePartValue, 2);

    return [formattedIntPart, formattedDoublePart];
  }

  static sortSizes(sizes = []) {
    const orderSizes = {
      'S': 0,
      'M': 1,
      'L': 2,
      'XL': 3,
      'XXL': 4,
      'XXXL': 5,
    };

    return sizes.sort((a, b) => {
      return orderSizes[a] - orderSizes[b];
    });
  }
}

export { FormatUtils };
