import "./CSS/TodoItems.css";

const TodoItems = ({ no, display, text, setTodos }) => {
  const handleDelete = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));

    data = data.filter((todo) => todo.no !== no);
    setTodos(data);
  };
  const toggle = (no) => {
    let data = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < data.length; i++) {
      if (data[i].no === no) {
        if (data[i].display === "") {
          data[i].display = "line-through";
        } else {
          data[i].display = "";
        }
        break;
      }
    }

    setTodos(data);
  };
  return (
    <div className="todoitems">
      <div
        className={`todoitems-container`}
        onClick={() => {
          toggle(no);
        }}
      >
        {display === "" ? (
          <i class="fa fa-stop-circle" aria-hidden="true"></i>
        ) : (
          <i class="fa fa-check" aria-hidden="true"></i>
        )}

        <div className={`todoitems-text ${display}`}>{text}</div>
      </div>
      <i
        class="fa fa-times todoitems-cross-icon"
        aria-hidden="true"
        onClick={() => {
          handleDelete(no);
        }}
      />
    </div>
  );
};

export default TodoItems;
