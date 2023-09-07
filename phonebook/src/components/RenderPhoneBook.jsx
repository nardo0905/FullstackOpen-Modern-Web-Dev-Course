import RenderPerson from "./RenderPerson";

const RenderPhoneBook = ({ persons, filter }) => {
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
            phone={person.phone}
          ></RenderPerson>
        ))}
      </tbody>
    </table>
  );
};

export default RenderPhoneBook;
