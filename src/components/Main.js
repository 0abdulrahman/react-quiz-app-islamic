import { useEffect, useReducer } from "react";
import Start from "./Start";
import Question from "./Question";
import Finished from "./Finished";

const TIME_PER_QUESTION = 20;
const intitialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highestScore: 0,
  time: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payloud, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active", time: state.questions.length * TIME_PER_QUESTION };
    case "setAnswer":
      const currentQuestion = state.questions[state.index];
      return {
        ...state,
        answer: action.payloud,
        points:
          action.payloud === currentQuestion.correctOption ? state.points + currentQuestion.points : state.points + 0,
      };
    case "nextQuestion":
      return {
        ...state,
        answer: null,
        index: state.index < state.questions.length - 1 ? state.index + 1 : state.index,
      };
    case "finished":
      return {
        ...state,
        status: "finished",
        highestScore: state.points > state.highestScore ? state.points : state.highestScore,
      };
    case "reset":
      return {
        ...intitialState,
        questions: state.questions,
        highestScore: state.highestScore,
        status: state.questions.length > 0 ? "ready" : "loading",
      };
    case "setTime":
      return { ...state, time: state.time - 1 };
    default:
      throw new Error("Unknown action!");
  }
}

function Main() {
  const [state, dispatch] = useReducer(reducer, intitialState);
  const { questions, status, index, answer, points, highestScore, time } = state;
  const maxPoints = questions?.reduce((acc, curr) => (acc += curr.points), 0);

  useEffect(() => {
    (async function () {
      try {
        const data = await fetch("./data/questions.json");
        if (!data.ok) throw new Error("Failed to reach the server");
        const jsonData = await data.json();
        dispatch({ type: "dataReceived", payloud: jsonData.questions });
      } catch (err) {
        console.error(err);
        dispatch({ type: "dataFailed" });
      }
    })();
  }, []);
  return (
    <main>
      {status === "loading" && <p id="loading">جارٍ التحميل...</p>}
      {status === "error" && <p id="error">حدث خطأ أثناء سحب البيانات :(</p>}
      {status === "ready" && <Start length={questions?.length} dispatch={dispatch} />}
      {status === "active" && (
        <Question
          question={state.questions[index]}
          index={index}
          dispatch={dispatch}
          answer={answer}
          points={points}
          length={questions?.length}
          maxPoints={maxPoints}
          time={time}
          status={status}
        />
      )}
      {status === "finished" && (
        <Finished highestScore={highestScore} points={points} maxPoints={maxPoints} dispatch={dispatch} />
      )}
    </main>
  );
}

export default Main;
