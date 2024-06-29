import "./DateInfo.css";
import StepCounter from "./StepCounter/StepCounter";
import DateCounter from "./DateCounter/DateCounter";
import { useEffect, useState } from "react";

const now = new Date();

function DateInfo() {
  const [date, setDate] = useState(new Date());
  const [text, setText] = useState(`Today is ${date.toDateString()}`);
  const [stepLen, setStepLen] = useState(1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setDate(new Date(now - -count * 24 * 60 * 60 * 1000));
  }, [count]);

  useEffect(() => {
    const newText = `${
      count === 0
        ? "Today is"
        : count > 0
        ? `${count} days from today is`
        : `${Math.abs(count)} days ago was`
    } ${date.toDateString()}`;
    setText(newText);
  }, [date]);

  return (
    <>
      <StepCounter setStepLen={setStepLen} stepLen={stepLen} />
      <DateCounter stepLen={stepLen} count={count} setCount={setCount} />
      <p>{text}</p>
    </>
  );
}

export default DateInfo;
