const RenderPerson = ({ name, phone, id, handleDelete }) => {
  return (
    <tr key={name}>
      <td key={name}>
        {name} {phone} <button onClick={() => handleDelete(id)}>delete</button>
      </td>
    </tr>
  );
};

export default RenderPerson;
