import { useState } from "react";

const NewTodoForm = ({ addTask }) => {
  const INITIAL_STATE = { task: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ ...formData });
    setFormData(INITIAL_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">Task</label>
      <input
        id="task"
        type="text"
        name="task"
        placeholder="Task"
        value={formData.task}
        onChange={handleChange}
      />

      <button>Add Task</button>
    </form>
  );
};

export default NewTodoForm;
