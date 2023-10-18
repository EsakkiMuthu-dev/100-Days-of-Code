import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App  />
    
  </React.StrictMode>)

// const refresh=()=>ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App count= {counter} />
    
//   </React.StrictMode>,
// )
// counter++;
// refresh();

// // for(let i=0;i<=10;i++)
// // {
// //   setTimeout(()=>{
// //     counter++;
// //     refresh();
// //   },3000);
// // }
// setInterval(()=>{
//   counter++;
//   refresh();
// },2000);
