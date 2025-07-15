import TaskContext from "./context.jsx";
import useTaskReducer from "./useTaskReducer.jsx";

function TaskProvider({ children }) {
  const value = useTaskReducer();
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

export default TaskProvider;
