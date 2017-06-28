import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Mexican Food Menu Challenge</h1>
        <ul>
          <li>Build A Display around the data in data.js</li>
          <li>Filter the food that has a spice level of less than 5</li>
          <li>Store the spice level filter in state, and make an input field capable of updating the state</li>
        </ul>
      </div>
    );
  }
}

export default App;
