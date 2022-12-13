import React from 'react';
import {createRoot} from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Course from './jsx/Course';
import Time from './element/Time';
import MovieList from './movies/MovieList';
import TestComp from './lifecycle/TestComp';
import CalculateComp from './hook/CalculateComp';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Course /> */}
    {/* <MovieList /> */}
    {/* <TestComp /> */}
    <CalculateComp />
  </React.StrictMode>
);

// setInterval(() => {
//   // ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17
//   // ReactDom render 는 18버전부터는 지원하지 않아서 17 이하 버전에서 사용해야함.
//   ReactDOM.render( 
//     <React.StrictMode>
//       <Time />
//     </React.StrictMode>,
//     document.getElementById('root')
//   )
// }, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
