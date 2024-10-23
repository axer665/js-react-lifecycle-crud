/* eslint-disable react/prop-types */
import { useRef } from 'react';

const NewNote = (props) => {
  const { onAddNote, onUpdate } = props;
  const noteRef = useRef({});

  const submitHandler = async (event) => {
    event.preventDefault();
    if (noteRef.current.value === '') {
      noteRef.current.placeholder = "What's missing from a suitcase that has everything? 😉";
      setTimeout(()=>{noteRef.current.placeholder="Enter text"}, 1500);
      return;
    }
    const data = {
      id: 0,
      content: noteRef.current.value,
    };
    await onAddNote(data);
    noteRef.current.value = '';
    await onUpdate();
  };

  return (
    <div className="new-note">
      <h2 className="new-note__title">New Note</h2>
      <form className="new-note__form" onSubmit={submitHandler}>
        <textarea
          className="new-note__textarea"
          placeholder="Enter text"
          ref={noteRef}
        ></textarea>
        <button className="button" type="submit">
          ⇛
        </button>
      </form>
    </div>
  );
};

export default NewNote;
