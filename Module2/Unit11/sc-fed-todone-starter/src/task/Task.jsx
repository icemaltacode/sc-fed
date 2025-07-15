import { useState, useMemo } from "react";

import { StepProvider, StepList } from "../step";
import useTask from "./useTask.jsx";
import TaskHeader from "./TaskHeader.jsx";
import TaskControls from "./TaskControls.jsx";
import TaskProgress from "./TaskProgress.jsx";

function Task({ id }) {
  const {
    state: { expandedId },
  } = useTask();
  const isExpanded = expandedId === id;

  const [isEditable, setEditable] = useState(false);

  const cardId = useMemo(() => `card-${Math.random()}`, []);
  const titleId = useMemo(() => `title-${Math.random()}`, []);

  return (
    <li className="card" id={cardId} aria-labelledby={titleId}>
      <TaskHeader
        id={id}
        isEditable={isEditable}
        setEditable={setEditable}
        cardId={cardId}
        titleId={titleId}
      />
      {isExpanded && (
        <>
          <TaskControls
            id={id}
            isEditable={isEditable}
            setEditable={setEditable}
          />
          <StepProvider taskId={id}>
            <StepList />
          </StepProvider>
        </>
      )}
      <TaskProgress id={id} />
    </li>
  );
}

export default Task;
