import './App.css';
import CalculatorButton from './button';
import Screen from './screen';
import {useState} from 'react';

function App() {
  
  const [currentNum, setCurrentNum] = useState(0);

  return (
    <div className="App">

    <Screen>{currentNum}</Screen>
    <CalculatorButton value="1" buttonPress={()=>buttonPress(1, setCurrentNum, currentNum)} /> 
    <CalculatorButton value="2" buttonPress={()=>buttonPress(2, setCurrentNum, currentNum)} /> 
    <CalculatorButton value="3" buttonPress={()=>buttonPress(3, setCurrentNum, currentNum)} /> 
    <CalculatorButton value="4" buttonPress={()=>buttonPress(4, setCurrentNum, currentNum)} /> 
    <CalculatorButton value="5" buttonPress={()=>buttonPress(5, setCurrentNum, currentNum)} /> 
    <CalculatorButton value="6" buttonPress={()=>buttonPress(6, setCurrentNum, currentNum)} /> 
    <CalculatorButton value="7" buttonPress={()=>buttonPress(7, setCurrentNum, currentNum)} /> 
    <CalculatorButton value="8" buttonPress={()=>buttonPress(8, setCurrentNum, currentNum)} /> 
    <CalculatorButton value="9" buttonPress={()=>buttonPress(9, setCurrentNum, currentNum)} /> 
    <CalculatorButton value="0" buttonPress={()=>buttonPress(0, setCurrentNum, currentNum)} /> 
   
    </div>


  );
}

function buttonPress(value, setCurrentNum, currentNum) {

  

  setCurrentNum(currentNum.toString() + value.toString());

  console.log(value);
}

export default App;
