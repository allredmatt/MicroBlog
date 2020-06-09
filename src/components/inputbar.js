import React, {useState} from 'react';

const InputBar = ({placeholder, returnedVal}) => {

  const [inputText, setInputText] = useState("");

  const buttonSubmit = (event) => {
    event.preventDefault();
    returnedVal(inputText);
    setInputText("");
  };
  
  return (
    <div className = 'input-bar'>
        <form onSubmit={buttonSubmit}>
            <input type='text' value={inputText} autoFocus placeholder={placeholder} onChange={(event)=>setInputText(event.target.value)}/>
        </form>
    </div>
  );
}

export default InputBar;