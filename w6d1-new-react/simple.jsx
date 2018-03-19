class SimpleWidget extends React.Component {
  render() {
    return (
      <div className="simple-widget">
        <h3>Currency Exchange Rates</h3>
        <ul>
          <li>CAD -> 1.55</li>
          <li>USD -> 1.01</li>
          <li>JPY -> 9.99</li>
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<SimpleWidget />, document.getElementById('root'));
