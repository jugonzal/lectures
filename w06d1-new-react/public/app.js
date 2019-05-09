class ExchangeApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ['CAD', 'USD', 'EUR', 'MXN', 'JPY'],
      date: '2019-04-03',
      rates: {
        "CAD": 1.0,
        "USD": 0.751336541,
        "JPY": 83.7342956429,
        "MXN": 14.380847367,
        "EUR": 0.6682705159
      }
    };
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Currency Exchange Rates'
      ),
      React.createElement(
        'h3',
        null,
        'For: ',
        this.state.date
      ),
      React.createElement(CurrencyList, {
        items: this.state.items,
        rates: this.state.rates
      })
    );
  }

}

class CurrencyList extends React.Component {
  render() {
    return React.createElement(
      'ul',
      null,
      this.props.items.map(item => React.createElement(SimpleItem, { currency: item, rate: this.props.rates[item] }))
    );
  }
}

class SimpleItem extends React.Component {
  render() {
    return React.createElement(
      'li',
      null,
      React.createElement(
        'strong',
        null,
        ' ',
        this.props.currency,
        ' '
      ),
      '=> ',
      this.props.rate
    );
  }
}

ReactDOM.render(React.createElement(ExchangeApp, null), document.getElementById('root'));

