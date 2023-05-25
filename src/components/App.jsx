import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CardInput from "./CardInput"

function displayCard(note){
  return <Note 
  key={note.key}
  title={note.title}
  content={note.content}
  />
}


function App() {
const [notes, setNotes] = useState([])

  function addNote(newNote){
    setNotes(prevNotes => {
     return [...prevNotes, newNote]
    })
  }


  return (
    <div className="App">
    <Header />
    <CardInput onAdd={addNote}/>
    {notes.map((noteItem) => {
      return <Note 
      title={noteItem.title}
      content={noteItem.content}
      />
    })}
    <Footer />
    </div>
  );
}

export default App;


