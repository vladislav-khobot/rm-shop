class SortUtils {

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

export { SortUtils };
