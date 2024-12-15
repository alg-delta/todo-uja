import React, { useState } from "react";

export default function CreateTask(props) {
  const [task, setTask] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() === "") {
      alert("Задача не може бути порожньою(придурок тупий)");
      return;
    }
    if (task.length > 100) {
      alert("Офігів?");
      return;
    }
    console.log(task);
    props.addTask(task);
    setTask("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(event) => setTask(event.target.value)}
          value={task}
          type="text"
          placeholder="Напишіть задачу"
        />
        <button type="submit" className="btn">
          Додати
        </button>
      </form>
    </div>
  );
}
