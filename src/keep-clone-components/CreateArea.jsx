import React, { useState } from "react";

// -------------------------------------------MATERIAL UI IMPORT -------------------------------------------
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

// ----------------------------------------- REST OF THE CODE -----------------------------------------------

function CreateArea(props) {
  const [note, manageNote] = useState({
    title: "",
    content: "",
  });

  const [isExpanded, setExpanded] = useState(false); //used to make the note thing pop out

  function handleOnChange(event) {
    const { name, value } = event.target;
    //for event.target.value and event.target.name
    if (name === "title") {
      manageNote({
        title: value,
        conten: note.content,
      });
    } else if (name === "content") {
      manageNote({
        title: note.title,
        content: value,
      });
    }
  }

  function handleClick(event) {
    event.preventDefault();//submit karte hi reload nhi hone dega
    props.onClick(note);
    // console.log(note);
    manageNote({
      title: "",
      content: "",
    });
    setExpanded(false);
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {/* condiiton is there cause initially we will only show the textarea part and when user clicks on 
        it then we  will show the title and same for button*/}
        {(isExpanded) && (
          <input
            name="title"
            value={note.title}
            onChange={handleOnChange}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          value={note.content}
          onChange={handleOnChange}
          placeholder="Take a note..."
          rows={isExpanded ?"3":"1"}//jab expanded nahi rahega tab 1 row show hoga aur jaise hi expand hoga 
            //tab 3 rows show hoga
        />
        {(isExpanded) && (
        <Zoom in="true">
          <Fab onClick={handleClick}>
            <AddIcon />
            {/* added using material ui */}
          </Fab>
        </Zoom>)}
        {/* material ui mai use karke ye floating button liya gaya hai... ye floating button tab ayega jab
        input achanak se pop out hoga */}
      </form>
    </div>
  );
}

export default CreateArea;
