import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
let count=1;
let refresh =() => {ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)}
refresh()();
count++;
refresh()();