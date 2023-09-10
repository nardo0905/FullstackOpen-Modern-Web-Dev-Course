import RenderPerson from "./RenderPerson";

const RenderPhoneBook = ({ persons, filter, deleteFunc }) => {
  const filterPeople = () => {
    return persons.filter((person) =>
      person.name.toLowerCase().includes(filter)
    );
  };

  return (
    <table>
      <tbody>
        {filterPeople().map((person) => (
          <RenderPerson
            key={person.id}
            name={person.name}
            phone={person.number}
            id={person.id}
            handleDelete={deleteFunc}
          ></RenderPerson>
        ))}
      </tbody>
    </table>
  );
};

export default RenderPhoneBook;
