import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import notes from "../notes"

function displayCard(note){
  return <Card 
  key={note.id}
  title={note.title}
  content={note.content}
  />
}


function App() {
  return (
    <div className="App">
    <Header />
    {notes.map(displayCard)}
    <Footer />
    </div>
  );
}

export default App;
