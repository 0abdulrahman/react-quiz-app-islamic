function Progress({ index, points, length, answer, maxPoints }) {
  return (
    <div id="progress">
      <progress max={length} value={index + +Number.isInteger(answer)} id="bar" />
      <div id="details">
        <p>
          السؤال: (<span>{index + 1}</span> / {length})
        </p>
        <p>
          النقاط: (<span>{points}</span> / {maxPoints})
        </p>
      </div>
    </div>
  );
}

export default Progress;
