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
