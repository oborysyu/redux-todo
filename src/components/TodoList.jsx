import { useSelector } from "react-redux";
import { FILTER_MAP } from "../config";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, currentFilter] = useSelector((state) => {
    return [state.todos.todos, state.todos.currentFilter];
  });

  return (
    <ul>
      {todos.filter(FILTER_MAP[currentFilter]).map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
