import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dictionary from "./Dictionary";
import logo from "./logo.png";
import illustration from "./illustration.svg";

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" className="logo" width="350" />
      <Dictionary />
      <img src={illustration} alt="look-up-illustration" className="img-fluid women-searchup" width="1000"/>
    </div>
  );
}

export default App;