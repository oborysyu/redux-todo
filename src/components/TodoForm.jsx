import { MAXIMUM_TODO_LENGTH } from "../config";

const TodoForm = ({ value, updateText, handleAction }) => {
  return (
    <label>
      <input
        className="input-add"
        maxLength={MAXIMUM_TODO_LENGTH}
        placeholder="add new todo"
        value={value}
        onChange={(e) => updateText(e.target.value)}
      />
      <button className="button-add" onClick={handleAction}>Add todo</button>
    </label>
  );
};

export default TodoForm;
