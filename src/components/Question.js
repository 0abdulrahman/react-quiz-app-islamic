import Options from "./Options";
import Progress from "./Progress";
import Footer from "./Footer";

function Question({ question, dispatch, answer, points, index, length, maxPoints, time, status }) {
  const answerExists = answer !== null;
  return (
    <section id="question">
      <h4>{question.question}</h4>
      <Progress index={index} points={points} length={length} maxPoints={maxPoints} answer={answer} />
      <Options question={question} dispatch={dispatch} answer={answer} answerExists={answerExists} />
      <Footer
        index={index}
        length={length}
        dispatch={dispatch}
        answerExists={answerExists}
        time={time}
        status={status}
      />
    </section>
  );
}

export default Question;
