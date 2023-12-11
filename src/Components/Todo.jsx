import { useEffect, useRef, useState } from "react";
import "./CSS/Todo.css";
import TodoItems from "./TodoItems";

let count = 0;
const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  const handleAddItems = () => {
    setTodos([
      ...todos,
      { no: count++, text: inputRef.current.value, display: "" },
    ]);
    inputRef.current.value = "";

    localStorage.setItem("todos_count", count);
  };

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
    count = localStorage.getItem("todos_count");
  }, []);
  useEffect(() => {
    setTimeout(() => {
      console.log(todos);
      localStorage.setItem("todos", JSON.stringify(todos));
    }, 100);
  }, [todos]);
  return (
    <div className="conatiner">
      <div className="todo">
        <div className="todo-header">TO-DO List</div>
        <div className="todo-add">
          <input
            ref={inputRef}
            type="text"
            className="todo-input"
            placeholder="Add Your Tasks"
          />
          <div onClick={handleAddItems} className="todo-add-btn">
            ADD
          </div>
        </div>
        <div className="todo-list">
          {todos.map((item, index) => {
            return (
              <TodoItems
                setTodos={setTodos}
                text={item.text}
                key={index}
                display={item.display}
                no={item.no}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Todo;
