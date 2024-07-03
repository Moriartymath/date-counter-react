function ResetButton({ setSettingsChanged, setStepLen, setCount }) {
  return (
    <button
      onClick={() => {
        setCount(0);
        setStepLen(1);
        setSettingsChanged(false);
      }}
    >
      Reset
    </button>
  );
}

export default ResetButton;
