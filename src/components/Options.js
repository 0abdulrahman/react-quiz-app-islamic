function Options({ question, dispatch, answer, answerExists }) {
  return (
    <ul id="options">
      {question.options.map((option, i) => (
        <li key={i}>
          <button
            onClick={() => dispatch({ type: "setAnswer", payloud: i })}
            className={`${answerExists ? (answer === i ? "answer" : "") : ""} ${
              answerExists ? (question.correctOption === i ? "correct" : "") : ""
            }`}
            disabled={answer !== null}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Options;
