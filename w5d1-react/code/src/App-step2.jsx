import React, {Component} from 'react';

class Search extends Component {
   render() {
     return (
       <div className="search view">
         Change your query: <input
           value={this.props.query}
           onChange={(ev) => {
             this.props.updateQuery(ev.target.value);
           }}
           />
       </div>
       )
   }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ""
    };

    this.updateQuery = (newValue) => {
      this.setState({query: newValue });
    }

  }

  render() {
    return (
      <div className="app view">
        <h2>Hello React !</h2>
        Query: {this.state.query}
        <Search query={this.state.query} updateQuery={this.updateQuery}/>
      </div>
    );
  }
}

export default App;
