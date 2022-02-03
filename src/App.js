import React from 'react';
import './App.css'

const App = () => {
  return <>
    <div className="container">
      <h1>Incrememnt/Decrement counter</h1>
      <h4>Using React an Redux</h4>

      <div className="quantity">
        <a href="#" className="quantity_minus" title="Decrement"><span>-</span></a>
        <input type="text" name='quantity' value="0" className="quantity_input" />
        <a href="#" className="quantity_plus" title="Increment"><span>+</span></a>
      </div>

    </div>
  </>;
};

export default App;
