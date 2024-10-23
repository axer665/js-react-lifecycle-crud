/* eslint-disable react/prop-types */
const NoteListItem = (props) => {
  const { content, id, onUpdate } = props;

  async function deleteHandler() {
    await fetch(`http://localhost:7070/notes/${id}`, { method: 'DELETE' });
    onUpdate();
  }

  return (
    <div className="note">
      <p>{content}</p>
      <button className="button" onClick={deleteHandler}>
        ❌
      </button>
    </div>
  );
};

export default NoteListItem;
