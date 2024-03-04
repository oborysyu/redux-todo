export const MAXIMUM_TODO_LENGTH = 13;
export const FILTER_MAP = {
  All: () => true,
  Active: (todo) => !todo.completed,
  Completed: (todo) => todo.completed,
};
export const FILTER_NAMES = Object.keys(FILTER_MAP);
