import { useDispatch } from "react-redux";
import { toggleComplete } from "../store/todoSlice";

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <input type="checkbox" checked={completed} onChange={e => {}}/>
      <span onClick={() => dispatch(toggleComplete({ id }))}>{text}</span>
    </li>
  );
};

export default TodoItem;
