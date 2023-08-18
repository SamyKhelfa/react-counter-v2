import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState([0, 0, 0]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleAddCounter = () => {
    setCount([...count, 0]);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleAddCounter}>Add Counter</button>
    </div>
  );
};

export default App;
