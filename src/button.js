function CalculatorButton({ value, buttonPress }) {
    
  return (
      <div className="CalculatorButton">
        <button onClick={buttonPress}>{value}</button>
      </div>
    );
  }

export default CalculatorButton;