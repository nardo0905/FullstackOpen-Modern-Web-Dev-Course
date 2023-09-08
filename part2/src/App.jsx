import Note from "./components/Note";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("a new note...");
  const [showAll, setShowAll] = useState(true);

  const hook = () => {
    console.log("effect");
    axios.get("http://localhost:3001/notes").then((response) => {
      console.log("promise fulfilled");
      setNotes(response.data);
    });
  };

  useEffect(hook, []); // empty array means
  // effect is only run with the first render

  console.log("render", notes.length, "notes");

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  const addNote = (event) => {
    event.preventDefault();
    const newNoteObj = {
      content: newNote,
      important: Math.random() < 0.5,
      id: notes.length + 1,
    };

    setNotes(notes.concat(newNoteObj));
    setNewNote("");
  };

  const handleNoteChange = (event) => {
    setNewNote(event.target.value);
  };

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
