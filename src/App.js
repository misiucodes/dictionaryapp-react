import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dictionary from "./Dictionary";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" className="img-fluid" width="350" />
      <Dictionary />
    </div>
  );
}

export default App;
