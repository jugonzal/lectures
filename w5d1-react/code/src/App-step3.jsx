import React, {Component} from 'react';

class Result extends Component {
   render() {
     return (
       <div className="result view">
         --> {this.props.content}
       </div>
      )
   }
}

class Results extends Component {
   render() {
     return (
       <div className="results view">
         List of Items:
         {
           this.props.results.map(function(result){
              return (
                <Result 
                  content={result}
                  key={result}
                />
              )
           })
         }
       </div>
       )
   }
}

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
      query: "",
      results: []
    };

    this.updateQuery = (newValue) => {
      this.setState({query: newValue, results: newValue.split(",") });
    }

  }

  render() {
    return (
      <div className="app view">
        <h2>Hello React !</h2>
        <Search query={this.state.query} updateQuery={this.updateQuery}/>
        <Results results={this.state.results}/>
      </div>
    );
  }
}

export default App;
