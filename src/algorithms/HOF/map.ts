import { empty, head, tail } from '../list-methods/helpers';
// O(n)
export const map = <T>(fn: (element: T) => T, list: T[]): T[] => {
  const helper = (newList: T[]) => {
    if (empty(newList)) return newList;
    return [fn(head(newList))].concat(helper(tail(newList)));
  };
  return helper(list);
};
