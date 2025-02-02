import React from 'react';
import { createRoot } from 'react-dom/client';

const renderApp = async () => {
  const App = (await import('./App')).default;
  const container = document.getElementById('root');
  if (container) {
    const root = createRoot(container);
    root.render(<App />);
  }
};

renderApp();
