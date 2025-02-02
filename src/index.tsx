import React from 'react';
import ReactDOM from 'react-dom';

const renderApp = async () => {
  const App = (await import('./App')).default;
  ReactDOM.render(<App />, document.getElementById('root'));
};

renderApp();
