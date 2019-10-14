import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import 'antd/dist/antd.css'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Router>
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/' component={Admin}></Route>
        </Switch>
      </Router>
     );
  }

}
 
export default App;