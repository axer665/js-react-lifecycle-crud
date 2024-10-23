/* eslint-disable react/prop-types */
import NoteListItem from './NoteListItem';

const NoteList = (props) => {
  const { notes, onUpdate } = props;

  const elements = notes.map((element) => {
    return <NoteListItem key={element.id} id={element.id} content={element.content} onUpdate={onUpdate}/>;
  });

  return <div className="note-list">{elements}</div>;
};

export default NoteList;
