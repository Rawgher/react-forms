import { useState } from "react";
import { v4 as uuid } from "uuid";
import Todo from "./ToDo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

const TodoList = () => {
  const INITIAL_STATE = [
    { id: uuid(), task: "Wake up" },
    { id: uuid(), task: "Finish this project" },
  ];
  const [tasks, setTasks] = useState(INITIAL_STATE);

  const addTask = (newTask) => {
    setTasks((tasks) => [...tasks, { ...newTask, id: uuid() }]);
  };

  const removeTask = (id) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <NewTodoForm addTask={addTask} />
      <div className="TodoList-row">
        {tasks.map(({ id, task }) => (
          <Todo key={id} id={id} task={task} removeTask={removeTask} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
