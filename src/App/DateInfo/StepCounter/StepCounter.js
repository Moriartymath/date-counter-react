import "./StepCounter.css";
function StepCounter({ setStepLen, stepLen }) {
  return (
    <div className="step--counter">
      <input
        type="range"
        max={10}
        min={0}
        value={stepLen}
        onChange={(ev) => {
          setStepLen(+ev.target.value);
        }}
      ></input>
      <span>{stepLen}</span>
    </div>
  );
}

export default StepCounter;
