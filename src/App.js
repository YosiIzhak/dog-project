import logo from './logo.svg';
import './App.css';
import Form from './components/form'
import People from './components/index';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/people">
            <People />
          </Route>
          <Route path="/">
          <a href="https://www.google.com/" className="exitLink">exit</a>

          </Route>

        </div>
      </Router>


      {/*  */}
    </div>
  );
}

export default App;
function Home() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Link to={`/Form`} className="App-link">start</Link>

    </header>
  );
}