import './App.css';

const Mensaje = (props) => {
  return <h1>{props.props}</h1>
}


const App = () => {
  return (
    <div className="App">
        <Mensaje color="red" props='hola de nuevop' />
    </div>
  )
}

export default App;
