class SimpleWidget extends React.Component {
  render() {
    return (
      <div className="simple-widget">
        <h3>Currency Exchange Rates</h3>
        <ul>
          <SimpleItem currency="CAD" rate="1.45" />
          <SimpleItem currency="USD" rate="1.01" />
          <SimpleItem currency="JPY" rate="9.99" />
        </ul>
      </div>
    )
  }
}

// notice the use of properties to pass data
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
ReactDOM.render(<SimpleWidget />, document.getElementById('root'));
