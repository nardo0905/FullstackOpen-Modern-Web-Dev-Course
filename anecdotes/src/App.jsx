import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [anecdoteVotes, setAnecdoteVotes] = useState([0, 0, 0, 0, 0, 0, 0, 0]);

  const handleRandomButtonClick = () => {
    const randomNumber = Math.floor(Math.random() * 8);
    setSelected(randomNumber);
  };

  const handleVoteClick = () => {
    const newVotes = [...anecdoteVotes];
    const newNumOfVotes = newVotes[selected] + 1;
    newVotes[selected] = newNumOfVotes;
    setAnecdoteVotes(newVotes);
  };

  const getAnecdoteWithMostVotes = () => {
    let currMost = -1;
    let currMostIndex = 0;
    for (let index = 0; index < anecdoteVotes.length; index++) {
      if (anecdoteVotes[index] > currMost) {
        currMost = anecdoteVotes[index];
        currMostIndex = index;
      }
    }
    return currMostIndex;
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {anecdoteVotes[selected]} votes</p>
      <button onClick={handleVoteClick}>vote</button>
      <button onClick={handleRandomButtonClick}>get random anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[getAnecdoteWithMostVotes()]}</p>
    </div>
  );
};

export default App;
