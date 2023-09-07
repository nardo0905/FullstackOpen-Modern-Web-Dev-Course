const Total = ({ course }) => {
  const total = course.parts.reduce((sum, curr) => sum + curr.exercises, 0);

  return (
    <div>
      <p>
        <b>Number of exercises {total}</b>
      </p>
    </div>
  );
};

export default Total;
