const binarySearch = <A extends number | string>(arr: A[], target: A): number | null => {
  const helper = (low: number, high: number) => {
    const mid = Math.floor((low + high) / 2);
    if (low > high) return null;
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) return helper(mid + 1, high);
    else return helper(low, mid - 1);
  };
  return helper(0, arr.length - 1);
};

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(lista, 10));
