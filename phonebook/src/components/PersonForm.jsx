const PersonForm = ({
  onSubmit,
  newName,
  newPhone,
  onChangeName,
  onChangePhone,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input value={newName} onChange={onChangeName} />
      </div>
      <div>
        phone: <input value={newPhone} onChange={onChangePhone} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
