import React from 'react';

function Calculator({handler, children}) {

  const buttons = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "0", ".", "=", "/"];

  return (
    <div className="container glass">
      <div className="row justify-content-center">
        <div className="col-6">
          <h1 className="text-center my-4">Calculator</h1>
          <div className="jumbotron py-3">
            <div id="screen" className="text-right mb-3 glass">{children}</div>
            <div className="button-container">
            {buttons.map((button, index) => (
              <button key={index} className="btn btn-secondary col- glass" onClick={() => handler(button)}>
                {button}
              </button>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
