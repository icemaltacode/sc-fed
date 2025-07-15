import { useContext } from "react";
import TaskContext from "./context.jsx";

function useTask() {
  return useContext(TaskContext);
}

export default useTask;
