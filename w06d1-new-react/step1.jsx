function List(props) {
  return (
    <div>
      <Item currency="CAD" rate="1.47" />
      <Item currency="USD" rate="1.55" />
      <Item currency="MXN" rate="20" />
    </div>
  )
}

function Item(props) {
  return (
    <p><strong>{props.currency}</strong> -> {props.rate}</p>
  )
}


ReactDOM.render(<List />, document.getElementById('root'));
