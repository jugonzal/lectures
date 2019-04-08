class ExchangeApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      items: ['CAD','USD','EUR','MXN','JPY'], 
      date: '2019-04-03',
      rates: {
        "CAD":1.0,
        "USD":0.751336541,
        "JPY":83.7342956429,
        "MXN":14.380847367,
        "EUR":0.6682705159
      }
    };
  }

  render() {
    return (
      <div>
        <h1>Currency Exchange Rates</h1>
        <h3>For: {this.state.date}</h3>
        <CurrencyList 
          items={this.state.items} 
          rates={this.state.rates}
        />
      </div>
    );
  }

}

class CurrencyList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <SimpleItem currency={item} rate={this.props.rates[item]} />
        ))}
      </ul>
    );
  }
}

class SimpleItem extends React.Component {
  render() {
    return (
      <li>
        <strong> {this.props.currency} </strong>
        => {this.props.rate}
      </li>
    )
  }
}


ReactDOM.render(<ExchangeApp />, document.getElementById('root'));
