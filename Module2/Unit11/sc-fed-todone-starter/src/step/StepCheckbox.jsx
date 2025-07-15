import useStep from "./useStep.jsx";

function StepCheckbox({ index }) {
  const {
    state: { steps },
    actions: { check },
  } = useStep();
  const { step, completed } = steps[index];

  return (
    <label className="step-label">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => check(index)}
      />
      {completed ? <s>{step}</s> : step}
    </label>
  );
}

export default StepCheckbox;
