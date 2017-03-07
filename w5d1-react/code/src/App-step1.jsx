import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: "What should we do today?"
    };

  }

  render() {
    return (
      <div className="app view">
        <h2>Hello React! </h2>
        Query: {this.state.query}
      </div>
    );
  }
}

export default App;
