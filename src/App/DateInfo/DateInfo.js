import "./DateInfo.css";
import StepCounter from "./StepCounter/StepCounter";
import DateCounter from "./DateCounter/DateCounter";
import { useEffect, useState, useRef } from "react";
import ResetButton from "./ResetButton/ResetButton";

const now = new Date();

function DateInfo() {
  const [date, setDate] = useState(new Date());
  const [stepLen, setStepLen] = useState(1);
  const [count, setCount] = useState(0);
  const [settingsChanged, setSettingsChanged] = useState(false);
  const isInitialRender = useRef({ first: true, second: true });

  useEffect(() => {
    if (!isInitialRender.current.first) {
      if (stepLen === 1 && count === 0) setSettingsChanged(false);
      else setSettingsChanged(true);
    }
    isInitialRender.current.first = false;
  }, [stepLen, count]);

  useEffect(() => {
    setDate(new Date(now - -count * 24 * 60 * 60 * 1000));
  }, [count]);

  return (
    <>
      <StepCounter setStepLen={setStepLen} stepLen={stepLen} />
      <DateCounter stepLen={stepLen} count={count} setCount={setCount} />
      <p>{`${
        count === 0
          ? "Today is"
          : count > 0
          ? `${count} days from today is`
          : `${Math.abs(count)} days ago was`
      } ${date.toDateString()}`}</p>
      {settingsChanged ? (
        <ResetButton
          setSettingsChanged={setSettingsChanged}
          setStepLen={setStepLen}
          setCount={setCount}
        />
      ) : null}
    </>
  );
}

export default DateInfo;
