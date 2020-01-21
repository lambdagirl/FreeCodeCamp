import React from 'react';
import ReactDOM from 'react-dom';
import Quotes from './quotes';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Quotes />, root);
});
