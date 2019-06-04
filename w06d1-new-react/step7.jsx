class ExchangeApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      items: [], 
      date: '2019-01-28',
      text: '',
      rates: { } 
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleDateMove = this.handleDateMove.bind(this);
    this.refreshRates = this.refreshRates.bind(this);
  }

  refreshRates () {
    fetch("https://api.exchangeratesapi.io/"+this.state.date)
    .then(response => {  
      console.log(response.status, response.statusCode)
      if (response.ok) {
        return response.json()
      } else {
        throw "No Rates"
      }
    })
    .then(json => {
      console.log("GOT ",json)
      this.setState({rates: json.rates})
    })
    .catch(error => console.log(error))
  }

  componentWillMount() {
    this.setState({
      date: (new Date()).toISOString().split('T')[0] 
    }, this.refreshRates)
  }

  render() {
    return (
      <div>
        <h3>Currency Exchange Rates for 
          <DatePicker 
            currentDate={this.state.date} 
            dateChange={this.handleDateChange}
            dateMove={this.handleDateMove}
          />

        </h3>
        <CurrencyList 
          items={this.state.items} 
          rates={this.state.rates} 
        />
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleDateChange(e) {
    this.setState(
      { date: e.target.value },  
      this.refreshRates
    )
  }

  handleDateMove(e) {
    let newDate = new Date(this.state.date);
    console.log(e.target);
    newDate.setDate( newDate.getDate() + (e.target.name === "prev" ? -1 : 1 ))
    console.log(e.target.name, newDate)
    this.setState(
      { date: newDate.toISOString().split('T')[0]  },  
      this.refreshRates
    )
    e.preventDefault();
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
      rate: this.state.rates[this.state.text]
    };
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }));
  }
}

class DatePicker extends React.Component {
  render() {
    return (
      <div>
        <button name="prev" onClick={this.props.dateMove}>
          Previous
        </button>
        <input
          value={this.props.currentDate}
          onChange={this.props.dateChange}
        /> 
        <button name="next" onClick={this.props.dateMove}>
          Next
        </button>
      </div>
    );
  }
}

function CurrencyList(props) {
  return (
    <ul>
      {props.items.map(item => (
        <Item key={item.id} text={item.text} rate={props.rates[item.text]} />
      ))}
    </ul>
  );
}

function Item(props) {
  return (
    <li><strong>{props.text}</strong> -> {props.rate}</li>
  )
}

ReactDOM.render(<ExchangeApp />, document.getElementById('root'));
