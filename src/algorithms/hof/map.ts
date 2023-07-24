import { empty, head, tail } from '../list-methods/helpers';
const R = require('ramda');
// O(n)
export const mapConcat = <T>(fn: (element: T) => T, list: T[]): T[] => {
  // naive implementation, using multiple stack frames concat
  const helper = (newList: T[]) => {
    if (empty(newList)) return newList;
    return [fn(head(newList))].concat(helper(tail(newList)));
  };

  return helper(list);
};

export const mapIterative = <T>(fn: (element: T) => T, list: T[]): T[] => {
  const newList: T[] = new Array(list.length);
  for (let i = 0; i < list.length; i++) {
    newList[i] = fn(list[i]);
  }
  return newList;
};

export const tailMap = <T>(fn: (element: T) => T, list: T[]): T[] => {
  // improve using tail recursion
  const newList: T[] = new Array(list.length);
  const helper = (newList: T[], index: number) => {
    if (index === list.length) return newList;
    newList[index] = fn(list[index]);
    return helper(newList, index + 1);
  };
  return helper(newList, 0);
};

export const imutableMap = <T>(fn: (element: T) => T, list: T[]): T[] => {
  // deep copy elements
  const clone = R.clone(list);
  return clone.map(fn);
};
