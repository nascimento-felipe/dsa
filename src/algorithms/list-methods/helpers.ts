export const empty = <T>(list: T[]) => list.length === 0; //O(1)
export const head = <T>(
  list: T[], //O(1)
) =>
  empty(list)
    ? (() => {
        throw new Error('Error: List is empty');
      })()
    : list[0];
export const tail = <T>(list: T[]) =>
  empty(list)
    ? (() => {
        throw new Error('Error: List is empty');
      })()
    : list.slice(1);
