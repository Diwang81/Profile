import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Profile from './Componets/Profile'
import Home from './Componets/Home'

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
        <Route exact path="/" component={Home}></Route>
        <Route path="/profile" component={Profile}></Route>
        </Router>
      </div>
    )
  }
}

export default App;