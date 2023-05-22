import { useState } from "react";
import React from "react";

function CardInput(){
let [title, setTitle] = useState("");
let [content, setContent] = useState("");  

function saveNote(){
    console.log(title)
    console.log(content)
}

function handleTitleChange(event){
    setTitle(event.target.value)
}

function handleContentChange(event){
    setContent(event.target.value)
}



return (
<div>
    <form>
        <input onChange={handleTitleChange} type="text" placeholder="Title" value={title} />
        <input onChange={handleContentChange} type="text" placeholder="Take a Note..." rows="3" value={content} />
        <button onClick={saveNote}>+</button>
    </form>
</div>   
)
}

export default CardInput