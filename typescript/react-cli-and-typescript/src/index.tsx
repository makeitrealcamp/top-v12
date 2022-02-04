import React from 'react';
import ReactDOM from 'react-dom';
import { CounterContextProvider } from './hooks/useCounter';
import App from './pages/App';

ReactDOM.render(
  <React.StrictMode>
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
