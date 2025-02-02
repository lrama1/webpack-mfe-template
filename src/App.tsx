import React, { useState } from 'react';
import addTwoNumbers from './Utils';

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Hello, Microfrontend!</h1>
      <div>{addTwoNumbers(4, 2)}</div>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <p>Count: {count}</p>
      </div>
    </div>
  );
};

export default App;
