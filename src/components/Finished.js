function Finished({ highestScore, points, maxPoints, dispatch }) {
  const percentage = (points * 100) / maxPoints;
  let emoji;
  switch (true) {
    case percentage === 0:
      emoji = "😞";
      break;
    case percentage > 0 && percentage <= 50:
      emoji = "👍";
      break;
    case percentage > 50 && percentage <= 70:
      emoji = "👌";
      break;
    case percentage > 70 && percentage <= 90:
      emoji = "😎";
      break;
    case percentage > 90 && percentage < 100:
      emoji = "🤩";
      break;
    case percentage === 100:
      emoji = "🤯🤯🤯";
      break;
    default:
      emoji = "🤔";
  }
  return (
    <section id="finished">
      <p>
        أحرزت {points} نقطة من إجمالي {maxPoints} نقطة ({Math.floor(percentage)}%) {emoji}
        {percentage === 100 && <span> أحسنت حقًا! بارك الله فيك!!!</span>}
        {percentage > 90 && percentage < 100 && <span>مذهل! زادك الله علمًا!</span>}
      </p>

      <p>⭐ أعلى درجة وصلت إليها: {highestScore} ⭐</p>
      <button id="reset" onClick={() => dispatch({ type: "reset" })}>
        إعادة الاختبار
      </button>
    </section>
  );
}

export default Finished;
