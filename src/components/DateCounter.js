import { useReducer, useState } from "react";

function reducer(state, action) {
  if (action.type === "increase") return ++state;
  if (action.type === "decrease") return --state;
  if (action.type === "manualEdit") return action.payload;
  if (action.type === "reset") return 0;
}

function DateCounter() {
  // const [count, setCount] = useState(1);
  const [count, dispatch] = useReducer(reducer, 0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    dispatch({ type: "reset" });
    setStep(1);
  }
  return (
    <div>
      <div>
        <input type="range" value={step} min={1} max={10} onChange={(e) => setStep(+e.target.value)} />
        <span>{step}</span>
      </div>
      <div>
        <button onClick={() => dispatch({ type: "decrease" })}>-</button>
        <input type="text" value={count} onChange={(e) => dispatch({ type: "manualEdit", payload: +e.target.value })} />
        <button onClick={() => dispatch({ type: "increase" })}>+</button>
      </div>
      <p>{new Date(date).toDateString()}</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default DateCounter;
