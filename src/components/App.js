import React ,{useState, useRef} from 'react'
import { createPortal } from 'react-dom';
import '../styles/App.css';
import PortalButton from './PortalButton.js';
import PortalTextArea from './PortalTextArea.js';

//complete the function 
const App = () => {
const [input,setInput]=useState("");
const [inputValue,setInputValue]=useState(input);
const inputChange=(e)=>{
setInput(e.target.value);
}
const buttonClick=()=>{
  setInputValue(input)
setInput("")
}


  return (
    
    <div id="main">
      <input id="input" value={input} onChange={inputChange}></input><br/>
      {createPortal(<PortalButton buttonclick={buttonClick} />,document.getElementById("portal-button"))}
      {createPortal( <PortalTextArea value={inputValue}/>,document.getElementById("portal-textarea"))}

      
     
    </div>
  )
}


export default App;
