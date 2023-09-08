import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import RenderPhoneBook from "./components/RenderPhoneBook";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");

  const dbHook = () => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  };
  useEffect(dbHook, []);

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
