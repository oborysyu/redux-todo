import React from "react";
import { useSelector } from "react-redux";
import { FILTER_MAP } from "../config";

function TodoCounter() {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <div className="row counter">
      Completed tasks: {todos.filter(FILTER_MAP["Completed"]).length}
      <span> </span>
      Uncompleted tasks: {todos.filter(FILTER_MAP["Active"]).length}
    </div>
  );
}

export default TodoCounter;
