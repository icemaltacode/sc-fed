import Task from "./Task.jsx";
import TaskAdd from "./TaskAdd.jsx";
import useTask from "./useTask.jsx";

function TaskList() {
  const {
    state: { tasks },
  } = useTask();
  const taskIds = tasks.map(({ id }) => id);

  return (
    <ol className="lane">
      {taskIds.map((taskId) => (
        <Task key={taskId} id={taskId} />
      ))}
      <TaskAdd />
    </ol>
  );
}

export default TaskList;
