import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Landing from './components/Landing';
import Catalog from './components/Catalog';

class App extends Component {
  constructor(){
    super()
    this.state = {

    }
  }
  render(){
    return (
      <div className="App">
      <Router>
        <div id="nav">
          <Link to="/">Home </Link>
          <Link to="/catalog">Catalog</Link>
          <span>LOGO</span>
        </div>
        <Route path="/" exact component={Landing} />
        <Route path="/catalog" exact component={Catalog} />
        
        </Router>
      </div>
    );
  }
}

export default App;