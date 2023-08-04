import { useEffect } from "react";

function Footer({ index, length, dispatch, answerExists, time, status }) {
  useEffect(() => {
    const id = setInterval(() => {
      if (time === 0) dispatch({ type: "finished" });
      if (time > 0) dispatch({ type: "setTime" });
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, [status, dispatch, time]);

  const mins = Math.floor(time / 60);
  const seconds = time % 60;
  return (
    <div id="footer">
      <p id="timer">
        {mins < 10 && "0"}
        {mins}:{seconds < 10 && "0"}
        {seconds}
      </p>
      <div id="next">
        {answerExists && index < length - 1 && (
          <button onClick={() => dispatch({ type: "nextQuestion" })}>التالي</button>
        )}
        {answerExists && index === length - 1 && <button onClick={() => dispatch({ type: "finished" })}>إنهاء</button>}
      </div>
    </div>
  );
}

export default Footer;
