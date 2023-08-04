function Start({ length, dispatch }) {
  return (
    <article id="start">
      <h2>مرحبًا بك في اختبار معرفتك الدينية مع ريآكت!</h2>
      <h4>ستجيب على {length} سؤالًا لتقيس مدى علمك.</h4>
      <button onClick={() => dispatch({ type: "start" })}>حسنٌ، فلنبدأ</button>
    </article>
  );
}

export default Start;
