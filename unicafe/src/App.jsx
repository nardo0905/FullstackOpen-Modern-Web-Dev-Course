import { useState } from "react";

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{parseFloat(value.toFixed(2))}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad, total, score }) => {
  if (total === 0)
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text={"good"} value={good}></StatisticLine>
          <StatisticLine text={"neutral"} value={neutral}></StatisticLine>
          <StatisticLine text={"bad"} value={bad}></StatisticLine>
          <StatisticLine text={"all"} value={total}></StatisticLine>
          <StatisticLine text={"average"} value={score / total}></StatisticLine>
          <StatisticLine
            text={"positive"}
            value={(good / total) * 100}
          ></StatisticLine>
        </tbody>
      </table>
    </div>
  );
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [otherStats, setOtherStats] = useState({
    total: 0,
    score: 0,
  });

  const handleGoodClicks = () => {
    const newGood = good + 1;
    const newScore = otherStats.score + 1;
    setGood(newGood);
    const newStats = {
      total: newGood + neutral + bad,
      score: newScore,
    };
    setOtherStats(newStats);
  };
  const handleNeutralClicks = () => {
    const newNeutral = neutral + 1;
    const newScore = otherStats.score + 0;
    setNeutral(newNeutral);
    const newStats = {
      total: good + newNeutral + bad,
      score: newScore,
    };
    setOtherStats(newStats);
  };
  const handleBadClicks = () => {
    const newBad = bad + 1;
    const newTotal = good + neutral + newBad;
    const newScore = otherStats.score - 1;
    setBad(newBad);
    const newStats = {
      total: newTotal,
      score: newScore,
    };
    setOtherStats(newStats);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClicks} text={"good"}></Button>
      <Button onClick={handleNeutralClicks} text={"neutral"}></Button>
      <Button onClick={handleBadClicks} text={"bad"}></Button>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={otherStats.total}
        score={otherStats.score}
      ></Statistics>
    </div>
  );
};

export default App;
