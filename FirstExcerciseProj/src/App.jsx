const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part
        part={props.content[0].part}
        exercises={props.content[0].exercises}
      />
      <Part
        part={props.content[1].part}
        exercises={props.content[1].exercises}
      />
      <Part
        part={props.content[2].part}
        exercises={props.content[2].exercises}
      />
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises{" "}
        {props.content[0].exercises +
          props.content[1].exercises +
          props.content[2].exercises}
      </p>
    </div>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    content: [
      {
        part: "Fundamentals of React",
        exercises: 10,
      },
      {
        part: "Using props to pass data",
        exercises: 7,
      },
      {
        part: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content content={course.content} />
      <Total content={course.content} />
    </div>
  );
};

export default App;
