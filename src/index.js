import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// const todos = [
//   {id: 1, title: "learn react", completed: true, active: false},
//   {id: 2, title: "learn js", completed: false, active: true},
//   {id: 3, title: "learn cs", completed: true, active: false},
//   {id: 4, title: "learn node", completed: false, active: true}
// ]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


