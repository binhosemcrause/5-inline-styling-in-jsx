//Import React
import React from 'react';
import ReactDOM from 'react-dom/client';

//You first create  the root
const root = ReactDOM.createRoot(document.getElementById('root'));

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
};

// Create a element
const element = (
  <h1 style={customStyle}>Hello World!</h1>
);

//Render the HTML element on the root
root.render(element);