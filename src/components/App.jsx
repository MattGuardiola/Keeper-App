import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import notes from "../notes"
import CardInput from "./CardInput"

function displayCard(note){
  return <Card 
  key={note.key}
  title={note.title}
  content={note.content}
  />
}


function App() {
  return (
    <div className="App">
    <Header />
    <CardInput />
    {notes.map(displayCard)}
    <Footer />
    </div>
  );
}

export default App;
