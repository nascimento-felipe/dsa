export const insertionSort = <T>(collection: T[]): T[] => {
  for (let i = 1; i < collection.length; i++) {
    let j = i;
    while (j > 0 && collection[j] < collection[j - 1]) {
      [collection[j], collection[j - 1]] = [collection[j - 1], collection[j]];
      j--;
    }
  }
  return collection;
};
