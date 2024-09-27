import "./ToDo.css";

const Todo = ({ id, task, removeTask }) => {
  return (
    <div>
      <div className="Todo-div">{task}</div>
      <button className="Todo-btn" onClick={() => removeTask(id)}>
        X
      </button>
    </div>
  );
};

export default Todo;
