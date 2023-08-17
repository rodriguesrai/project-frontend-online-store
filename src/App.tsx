import React from 'react';
import './App.css';
import { getCategories } from './services/api';

function App() {
  console.log(getCategories());
  return (
    <h1>Mercado livre</h1>
  );
}

export default App;
