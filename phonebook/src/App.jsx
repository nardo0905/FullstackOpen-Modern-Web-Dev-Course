import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import RenderPhoneBook from "./components/RenderPhoneBook";
import personServiceObj from "./services/persons";
import NewPersonAddedMessage from "./components/NewPersonAddedMessage";
import ErrorMessage from "./components/ErrorMessage";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [filter, setFilter] = useState("");
  const [newPersonAddedMessage, setNewPersonAddedMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const dbHook = () => {
    personServiceObj
      .getAll()
      .then((initialPersons) => setPersons(initialPersons));
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
      number: newPhone,
    };

    if (newPerson.number === "") {
      alert("Phone cannot be empty!");
      return;
    }

    for (let index = 0; index < persons.length; index++) {
      if (persons[index].name === newPerson.name) {
        if (
          window.confirm(
            `${persons[index].name} is already added to the phonebook. Replace the old number with a new one?`
          )
        ) {
          personServiceObj
            .update(persons[index].id, newPerson)
            .then((newNumb) => {
              setPersons(
                persons.map((person) =>
                  person.id === persons[index].id ? newNumb : person
                )
              );
            })
            .catch((error) => {
              setErrorMessage(
                `Information of ${newPerson.name} has already been removed from server`
              );
              setTimeout(() => {
                setErrorMessage(null);
              }, 5000);
            });
          setNewName("");
          setNewPhone("");
        }
        return;
      }
    }

    personServiceObj.create(newPerson).then((newPersonData) => {
      const newPersonArr = persons.concat(newPersonData);
      setPersons(newPersonArr);
      setNewName("");
      setNewPhone("");
      setNewPersonAddedMessage(`Added ${newPersonData.name}`);
      setTimeout(() => {
        setNewPersonAddedMessage(null);
      }, 5000);
    });
  };

  const handleDeletePerson = (id) => {
    if (
      window.confirm(
        `Delete ${persons.find((person) => person.id === id).name}?`
      )
    ) {
      personServiceObj
        .deleteObj(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((error) => {
          alert("Person not found!");
        });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <NewPersonAddedMessage
        message={newPersonAddedMessage}
      ></NewPersonAddedMessage>
      <ErrorMessage message={errorMessage}></ErrorMessage>
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
      <RenderPhoneBook
        persons={persons}
        filter={filter}
        deleteFunc={handleDeletePerson}
      ></RenderPhoneBook>
    </div>
  );
};

export default App;
