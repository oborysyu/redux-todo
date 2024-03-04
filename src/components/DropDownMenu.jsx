import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentFilter } from "../store/todoSlice";
import { FILTER_NAMES } from "../config";

const DropDownMenu = () => {
  const selectedFilter = useSelector((state) => state.todos.selectedFilter);
  const dispatch = useDispatch();
  const options = FILTER_NAMES;
  const [selectedValue, setSelectedValue] = useState(selectedFilter);

  const handleFilterInput = (event) => {
    let value = event.target.value;
    setSelectedValue(value);
    dispatch(setCurrentFilter(value));
  };

  return (
    <div>
      <select
        className="select-add"
        onChange={handleFilterInput}
        value={selectedValue}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDownMenu;
