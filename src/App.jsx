import { useState, useEffect } from 'react';

import Header from './components/Header';
import NewNote from './components/NewNote';
import NoteList from './components/NoteList';

function App() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7070/notes')
            .then((response) => response.json())
            .then((data) => setNotes(data));
    }, []);

    async function fetchNoteHandler() {
        const response = await fetch('http://localhost:7070/notes');
        const data = await response.json();
        setNotes(data);
    }

    async function addNoteHandler(data) {
        await fetch('http://localhost:7070/notes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charser=utf-8',
            },
            body: JSON.stringify(data),
        });
    }

    return (
        <div className="App">
            <Header onUpdate={fetchNoteHandler} />
            <NoteList notes={notes} onUpdate={fetchNoteHandler} />
            <NewNote onAddNote={addNoteHandler} onUpdate={fetchNoteHandler}/>
        </div>
    );
}

export default App;