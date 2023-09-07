const RenderPerson = ({ name, phone }) => {
  return (
    <tr key={name}>
      <td key={name}>
        {name} {phone}
      </td>
    </tr>
  );
};

export default RenderPerson;
