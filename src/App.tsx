import { useState } from "react";
import QRCode from "qrcode.react";
import logo from "./assets/qr-white.png";
import "./App.css";

function App() {
  const [targetVal, setTargetVal] = useState("");
  const [input, setInput] = useState("");

  return (
    <div className='main-container'>
      <h1 style={{ textAlign: "center" }}>
        <img
          className='logo'
          src={logo}
          style={{ height: "auto", width: "60px" }}
        />
        QanYouRemember?
      </h1>
      <div className='instructions'>
        <h3>How to play?</h3>
        <p>Choose 3 words and input them</p>
        <p>You get to look at them for only 30 seconds</p>
        <p>Try to guess correctly based on what you Qan Remember</p>
      </div>
      <div className='form'>
        <label>Please enter your text</label>
        <input
          placeholder='NICE'
          id='reqtext'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => setTargetVal(input)}>Submit</button>
      </div>
      <div className='QR' id='qrcanvas'>
        {targetVal && <QRCode value={targetVal} size={250} />}
      </div>
    </div>
  );
}

export default App;
