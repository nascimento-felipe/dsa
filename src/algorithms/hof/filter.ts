import { empty, head, tail } from '../list-methods/helpers';

export const filter = <T>(fn: (element: T) => boolean, list: T[]): T[] => {
  const helper = (newList: T[]) => {
    if (empty(newList)) return newList;
    return fn(head(newList))
      ? [head(newList)].concat(helper(tail(newList)))
      : helper(tail(newList));
  };
  return helper(list);
};

export const tailFilter = <T>(fn: (element: T) => boolean, list: T[]): T[] => {
  const helper = (index: number, newList: T[]): T[] => {
    if (index === list.length) return newList;
    const currentElement = list[index];
    return fn(currentElement)
      ? helper(index + 1, [...newList, currentElement])
      : helper(index + 1, newList);
  };
  return helper(0, []);
};

export const iterativeFilter = <T>(fn: (element: T) => boolean, list: T[]): T[] => {
  const newList: T[] = [];
  for (let i = 0; i < list.length; i++) {
    if (fn(list[i])) newList.push(list[i]);
  }
  return newList;
};
