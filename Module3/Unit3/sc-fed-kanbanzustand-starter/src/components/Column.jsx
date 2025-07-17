import { useState } from "react";
import classNames from "classnames";
import Task from "./Task";
import { useStore } from "../store";
import "./Column.css";

export default function Column({ state }) {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  // const tasks = useStore(
  //   (store) => store.tasks.filter((task) => task.state === state),
  //   shallow
  // );
  const allTasks = useStore(store => store.tasks);
  const tasks = allTasks.filter((task) => task.state === state);

  const setDraggedTask = useStore(store => store.setDraggedTask);
  const moveTask = useStore(store => store.moveTask);
  const draggedTask = useStore(store => store.draggedTask);
  const addTask = useStore((store) => store.addTask);

  return (
    <div
      className={classNames("column", {drop: drop})}
      onDragOver={e => {
        setDrop(true);
        e.preventDefault();
      }}
      onDragLeave={e => {
        setDrop(false);
        e.preventDefault();
      }}
      onDrop={() => {
        setDrop(false);
        moveTask(draggedTask, state)
        setDraggedTask(null);
      }}
    >
      <div className="titleWrapper">
        <p>{state}</p>
        <button onClick={() => setOpen(true)}>Add</button>
      </div>
      {tasks.map((task, i) => (
        <Task title={task.title} key={i} />
      ))}
      {open && (
        <div className="Modal">
          <div className="modalContent">
            <input onChange={(e) => setText(e.target.value)} value={text} />
            <button
              onClick={() => {
                addTask(text, state);
                setText("");
                setOpen(false);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
