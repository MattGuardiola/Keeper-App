import { useState } from "react";
import React from "react";


function CardInput(props){
let [note, setNote] = useState({
    title: "",
    content: ""
});

function handleChange(event){
    const {name, value} = event.target
    setNote(prevNote => {
        return {
            ...prevNote,
            [name]: value
        }
    })
}

function saveNote (event){
    props.onAdd(note)
    event.preventDefault()

}





return (
<div>
    <form>
        <input onChange={handleChange} type="text" placeholder="Title" name="title" value={note.title} />
        <textarea onChange={handleChange} type="text" placeholder="Take a Note..." rows="3" name="content" value={note.content} />
        <button onClick={saveNote}>+</button>
    </form>
</div>   
)
}

export default CardInput