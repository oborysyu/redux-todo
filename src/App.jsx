import { useState } from "react";
import { useDispatch } from "react-redux";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { MAXIMUM_TODO_LENGTH } from "./config";
import { addTodo } from "./store/todoSlice";
import DropDownMenu from "./components/DropDownMenu";
import TodoCounter from "./components/TodoCounter";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAction = () => {
    //we need to check entered todo is not empty && its length is within acceptable limits
    if (text.trim().length && text.trim().length <= MAXIMUM_TODO_LENGTH) {
      dispatch(addTodo({ text }));
      setText("");
    }
  };

  return (
    <div className="App">
      <div className="row">
        <TodoForm
          value={text}
          updateText={setText}
          handleAction={handleAction}
        />
        <DropDownMenu />
      </div>
      <TodoCounter/>
      <TodoList />
    </div>
  );
}

export default App;
