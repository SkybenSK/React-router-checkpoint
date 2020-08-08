import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import Category from './components/Category';
import Products from './components/Products';
import {fakeAuth, Login} from './components/Login' 
import './App.css';
import Admin from './components/Admin';
import Home from './components/Home'
import Navbar from './components/Navbar'



class App extends Component {
  render() {

    return (
    <div>
      <Navbar/>   
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Category" component={Category}/>
        <Route path="/Products" component={Products}/>
        <Route path="/Login" component={Login}/>
        <Admin authed={fakeAuth.isAuthenticated} path='/Admin' component = {Admin} />
      </Switch>
    </div>
    );
  }
}

export default App