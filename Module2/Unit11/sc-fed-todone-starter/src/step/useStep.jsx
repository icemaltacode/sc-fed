import { useContext } from "react";
import StepContext from "./context.jsx";

function useStep() {
  return useContext(StepContext);
}

export default useStep;
