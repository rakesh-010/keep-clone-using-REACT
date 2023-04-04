import React,{useState} from 'react'
import './App.css'
import Header from './keep-clone-components/Header'
import Footer from './keep-clone-components/Footer'
import Note from './keep-clone-components/Note.jsx'
// import noteArrays from '../keep-clone-components/noteList'
import CreateArea from './keep-clone-components/CreateArea'


function App() {

    const [noteArray,manageNoteToArray]=useState([]);
    function addNote(note){
        manageNoteToArray([
            ...noteArray,//spread operator
            note
            //OR(if the above method shows problems)
            // {
            //     title:note.title,
            //     content:note.content
            // }adding the note to the array for storing all the notes.
        ]);
        // console.log(noteArray);
    }

    function onDelete(id){
        manageNoteToArray(
            noteArray.filter((element,index)=>{
                return index!==id
            })
        )
    }

  return (
    <div>
        <Header />
        
        <CreateArea onClick={addNote}/>
        
        {noteArray.map((note,index)=>{
            return <Note
            key={index}
            id={index}
            heading={note.title}
            content={note.content} 
            onClick={onDelete}/>
        })} 

        <Footer />
    </div>
  )
}

export default App