import React from 'react';
import './App.css';
import DigitComponent from "./component/DigitComponent";
import TotalComponent from "./component/TotalComponent";
import {create, useStore} from "zustand";

interface CalculatorStore {
  total: number;
  totalString: string;
}

const useCalculatorStore = create<CalculatorStore>()((set) => ({
  total: 0,
  totalString: "0",
}));

function App() {
  const {total, totalString} = useCalculatorStore((state) => state);

  return (
    <div className="App">
      <div className="calculator">
        <h1 id="total">{totalString}</h1>
        <div className="digits flex">
          <DigitComponent total={totalString} number={9}></DigitComponent>
          <DigitComponent total={totalString} number={8}></DigitComponent>
          <DigitComponent total={totalString} number={7}></DigitComponent>
          <DigitComponent total={totalString} number={6}></DigitComponent>
          <DigitComponent total={totalString} number={5}></DigitComponent>
          <DigitComponent total={totalString} number={4}></DigitComponent>
          <DigitComponent total={totalString} number={3}></DigitComponent>
          <DigitComponent total={totalString} number={2}></DigitComponent>
          <DigitComponent total={totalString} number={1}></DigitComponent>
          <DigitComponent total={totalString} number={0}></DigitComponent>
        </div>
        <div className="modifiers subgrid">
          <button className="modifier">AC</button>
        </div>
        <div className="operations subgrid">
          <button className="operation">/</button>
          <button className="operation">X</button>
          <button className="operation">-</button>
          <button className="operation">+</button>
          <button className="operation">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
