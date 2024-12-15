import React from "react";
import CreateTask from "./CreateTask";
import { useState, useEffect } from "react";
import TaskList from "./TaskList";
export default function Main() {
  const [list, setlist] = useState(() => {
    return JSON.parse(localStorage.getItem("savedList")) ?? [];
  });
  const addTask = (task) => {
    console.log("Мейнова задача");
    const newTask = {
      id: Math.floor(Math.random() * 9000) + 1000,
      text: task,
      isComplete: false,
    };
    setlist([...list, newTask]);
  };
  const deleteTask = (id) => {
    console.log("Delete", id);
    const newList = list.filter((task) => task.id !== id);
    setlist(newList);
  };
  const completeTask = (id) => {
    console.log("Task Complete", id);
    const newList = list.map((task) => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      } else {
        return task;
      }
    });
    setlist(newList);
  };
  useEffect(() => {
    localStorage.setItem("savedList", JSON.stringify(list));
  }, [list]);
  const numberOfElements = list.length;
  return (
    <div className="main">
      <h3 className="title"> Список покупок</h3>
      <CreateTask addTask={addTask} />
      <p>Кількість покупок {numberOfElements}</p>
      <TaskList
        list={list}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
    </div>
  );
}
