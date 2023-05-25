import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import CardInput from "./CardInput"

function displayCard(note){
  return <Card 
  key={note.key}
  title={note.title}
  content={note.content}
  />
}


function App() {
cont [notes, setNotes] = useState.([])

  function addNote(note){
    setNote(prevNotes => {
     return [...prevNotes, newNote]
    })
  }


  return (
    <div className="App">
    <Header />
    <CardInput onAdd={addNote}/>
    notes.map((noteItem) => {
      return <Note 
      title={noteItem.title}
      />
    })
    <Footer />
    </div>
  );
}

export default App;


