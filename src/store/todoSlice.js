import { createSlice } from "@reduxjs/toolkit";
import { FILTER_NAMES } from "../config";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    currentFilter: FILTER_NAMES[0],
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    toggleComplete(state, action) {
      const toggledTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      toggledTodo.completed = !toggledTodo.completed;
    },
    setCurrentFilter(state, action) {
      state.currentFilter = action.payload;
    },
  },
});

export const { addTodo, toggleComplete, setCurrentFilter, currentFilter } =
  todoSlice.actions;

export default todoSlice.reducer;
