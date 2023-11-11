import React, { useState } from 'react';
import { addNote } from '../service/NoteService';

export default function AddNote({ updateNotes }) {
  const [note, setNote] = useState('');
  const [important, setImportant] = useState(false);

  const handleAddNote = () => {
    const newNote = {
      content: note,
      important: important,
    };

    addNote(newNote)
      .then((res) => {
        updateNotes(res.data);
      });
  };

  return (
    <>
      <h1>Add Note: </h1>
      <label htmlFor="noteInput">Task Name: </label>
      <input
        type="text"
        id="noteInput"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder='Enter your Task Name: '
      />

      <br />
      
      <label htmlFor="importantSelect">Important: </label>
      <select
        id="importantSelect"
        name="important"
        value={important.toString()} // Convert boolean to string
        onChange={(e) => setImportant(e.target.value === 'true')}
      >
        <option value="true">true</option>
        <option value="false">false</option>
      </select>
      <br />

      <button
        style={{ backgroundColor: "green", padding: "5px" }}
        onClick={handleAddNote}
      >
        Add Note
      </button>
    </>
  );
}
