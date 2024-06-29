import "./DateCounter.css";

function DateCounter({ setCount, stepLen, count }) {
  const handler = function (amount) {
    setCount((currCount) => currCount + amount * stepLen);
  };
  return (
    <div className="date--counter">
      <button onClick={() => handler(-1)}>-</button>
      <p>Count: {count}</p>
      <button onClick={() => handler(1)}>+</button>
    </div>
  );
}

export default DateCounter;
