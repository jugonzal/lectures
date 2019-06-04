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
      <input
        value={this.props.currentDate}
        onChange={this.props.dateChange}
      />      
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
