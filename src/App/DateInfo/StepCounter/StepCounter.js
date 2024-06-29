import "./StepCounter.css";
function StepCounter({ setStepLen, stepLen }) {
  const handler = function (amount) {
    setStepLen((stepLen) => stepLen + amount);
  };
  return (
    <div>
      <button onClick={() => handler(-1)}>-</button>
      <p>Step: {stepLen}</p>
      <button onClick={() => handler(1)}>+</button>
    </div>
  );
}

export default StepCounter;
