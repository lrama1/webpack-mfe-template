import React from 'react';
import addTwoNumbers from './Utils';

const App = () => (
  <div>
    <h1>Hello, Microfrontend!</h1>
    <div>{addTwoNumbers(4,2)}</div>
  </div>
);

export default App;
