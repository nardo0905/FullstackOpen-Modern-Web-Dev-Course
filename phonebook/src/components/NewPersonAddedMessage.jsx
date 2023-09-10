const NewPersonAddedMessage = ({ message }) => {
  if (message === null) {
    return null;
  }

  return <div className="newPersonAddedMessage">{message}</div>;
};

export default NewPersonAddedMessage;
