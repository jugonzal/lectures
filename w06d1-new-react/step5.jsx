
class SimpleWidget extends React.Component {
  render() {
    return (
      <div className="simple-widget">
        <h3>Currency Exchange Rates</h3>
        <ul>
          <li>CAD -> 1.45</li>
          <li>USD -> 1.01</li>
          <SimpleItem currency="JPY -> ???" />
        </ul>
      </div>
    )
  }
}

class SimpleItem extends React.Component {
  render() {
    return (
      <li>
        {this.props.currency}
      </li>
    )
  }
}

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
    .then(response => {  //// 
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

  componentDidMount() {
    this.refreshRates()
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


class CurrencyList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <Item key={item.id} text={item.text} rate={this.props.rates[item.text]} />
        ))}
      </ul>
    );
  }
}

function Item(props) {
  return (
    <li><strong>{props.text}</strong> -> {props.rate}</li>
  )
}

ReactDOM.render(<ExchangeApp />, document.getElementById('root'));
