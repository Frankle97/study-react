import './App.css';
import {useState} from "react";

function App() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h3
          data-testid="counter"
        >
          {count}
        </h3>
        <button
          data-testid="minus-button"
          disabled={disabled}
          onClick={() => setCount(prev => prev - 1)}
        >-</button>
        <button
          data-testid="plus-button"
          disabled={disabled}
          onClick={() => setCount(prev => prev + 1)}
        >+</button>
      </header>
      <button
        data-testid="on/off-button"
        style={{backgroundColor: "blue"}}
        onClick={() => setDisabled(prev => !prev)}
      >
       on/off
      </button>
    </div>
  );
}

export default App;
