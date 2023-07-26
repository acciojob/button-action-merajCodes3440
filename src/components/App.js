import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {

  const [showpara, setShowpara] =useState(false);

  function showp(){
      setShowpara(true);
  }

  return (
    <div className="App" id="main">
      <button id="click"  onClick={showp}>show</button>
      
     {showpara && ( <p className="hide show" id="para">
      "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"</p>
)}
    </div>
  );
}

export default App
