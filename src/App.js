import "./App.css";
import CalculatorButton from "./button";
import Screen from "./screen";
import { useState } from "react";

import Calculator from "./calculator";

function App() {
  const [currentNum, setCurrentNum] = useState(0);
  const [accumulator, setAccumulator] = useState(0);
  const [operator, setOperator] = useState(null);

  const buttonPress = (value) => {
    console.log(value);
    if (!isNaN(value)) {
      if (currentNum === 0) {
        console.log("currentNum === 0");
        setCurrentNum(value.toString());
      } else {
        console.log("else");
        setCurrentNum((prevNum) => prevNum.toString() + value.toString());
      }
    } else {
      if (value === "=") {
        if (operator && accumulator !== 0) {
          performOperation();
        }
        setOperator(null);
      } else {
        if (operator && accumulator !== 0) {
          performOperation();
          setCurrentNum(0);
          setOperator(value);
          return;
        }
        setAccumulator(currentNum);
        setCurrentNum(0);
        setOperator(value);
      }
    }
  };

  const performOperation = () => {
    let res;
    switch (operator) {
      case "+":
        res = Number(accumulator) + Number(currentNum);
        break;
      case "-":
        res = Number(accumulator) - Number(currentNum);
        break;
      case "*":
        res = Number(accumulator) * Number(currentNum);
        break;
      case "/":
        res = Number(accumulator) / Number(currentNum);
        break;
      default:
        break;
    }
    setCurrentNum(0);
    setAccumulator(res);
  };

  return (
    <div className="App">
      <Calculator handler={buttonPress} className="glass">{
      currentNum || accumulator}
      </Calculator>
    </div>
  );
}

export default App;
