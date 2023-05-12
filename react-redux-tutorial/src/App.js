import './App.css';
import CounterContainer from "./components/CounterContainer";
import TodosContainer from "./components/TodosContainer";
import React from "react";

function App() {
  return (
    <div>
      <CounterContainer/>
      <hr/>
      <TodosContainer/>
    </div>
  );
}

export default App;
