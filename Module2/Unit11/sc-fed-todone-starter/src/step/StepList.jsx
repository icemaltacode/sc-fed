import { Fragment } from "react";

import useStep from "./useStep.jsx";
import Step from "./Step.jsx";
import StepAdd from "./StepAdd.jsx";
import StepDroppable from "./StepDroppable.jsx";

function StepList() {
  const {
    state: { dragging, steps },
  } = useStep();
  const stepNames = steps.map(({ step }) => step);
  const isDragging = dragging !== null;

  return (
    <section className="progress">
      <ol className="progress-steps">
        {isDragging && <StepDroppable position={0} />}
        {stepNames.map((step, index) => (
          <Fragment key={step}>
            <Step index={index} />
            {isDragging && <StepDroppable position={index + 1} />}
          </Fragment>
        ))}
        <StepAdd />
      </ol>
    </section>
  );
}

export default StepList;
