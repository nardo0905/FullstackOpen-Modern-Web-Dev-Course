import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import RenderPhoneBook from "./components/RenderPhoneBook";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040-123456", id: 1 },
    { name: "Ada Lovelace", phone: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", phone: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", phone: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");

  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewPhone = (event) => {
    setNewPhone(event.target.value);
  };

  const handleNewFilter = (event) => {
    setFilter(event.target.value);
  };

  const handleSumbitPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      phone: newPhone,
      id: persons.length + 1,
    };

    if (newPerson.phone === "") {
      alert("Phone cannot be empty!");
      return;
    }

    for (let index = 0; index < persons.length; index++) {
      if (persons[index].name === newPerson.name) {
        alert(`${newName} is already added to phonebook`);
        return;
      }
    }

    const newPersonArr = persons.concat(newPerson);
    setPersons(newPersonArr);
    setNewName("");
    setNewPhone("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleNewFilter={handleNewFilter}></Filter>
      <h2>Add New Person</h2>
      <PersonForm
        onSubmit={handleSumbitPerson}
        newName={newName}
        newPhone={newPhone}
        onChangeName={handleNewName}
        onChangePhone={handleNewPhone}
      ></PersonForm>
      <h2>Numbers</h2>
      <RenderPhoneBook persons={persons} filter={filter}></RenderPhoneBook>
    </div>
  );
};

export default App;
