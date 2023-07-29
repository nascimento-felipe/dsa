export const reduce = <T>(fn: (acc: T, element: T) => T, initialValue: T, list: T[]) => {
  let acc = initialValue;
  for (const element of list) {
    acc = fn(acc, element);
  }
  return acc;
};
