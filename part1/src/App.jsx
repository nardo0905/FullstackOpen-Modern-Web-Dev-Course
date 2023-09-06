import { useState } from "react";

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return <div>button press history: {allClicks.join(" ")}</div>;
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });
  const [allClicks, setAllClicks] = useState([]);
  const [totalClicks, setTotalClicks] = useState(0);

  const handleLeftClicks = () => {
    setAllClicks(allClicks.concat("L"));
    const updatedLeft = clicks.left + 1;
    setClicks({ ...clicks, left: updatedLeft });
    setTotalClicks(updatedLeft + clicks.right);
  };
  const handleRightClicks = () => {
    setAllClicks(allClicks.concat("R"));
    const updatedRight = clicks.right + 1;
    setClicks({ ...clicks, right: updatedRight });
    setTotalClicks(clicks.left + updatedRight);
  };

  return (
    <div>
      {clicks.left}
      <Button handleClick={handleLeftClicks} text={"left"} />
      <Button handleClick={handleRightClicks} text={"right"} />
      {clicks.right}
      <History allClicks={allClicks} />
    </div>
  );
};

export default App;
