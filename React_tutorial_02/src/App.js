import React from 'react';
import './App.css';
import Counter from './Counter';

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <h1>Count App</h1>
        <Counter />
      </div>
    )
  }
}
export default App;
