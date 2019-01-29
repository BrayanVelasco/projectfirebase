import React, { Component } from 'react';
import {
    Route,
    BrowserRouter as Router,
    Link,
    Redirect,
    Switch
} from 'react-router-dom'
import 'purecss'
import './index.css' 
import {firebaseAuth} from '../data/config'
import logo from './media/logo.png'

import Home from './pages/'
import About from './pages/About'
import Register from './pages/Register'
import Login from './pages/Login'
import Error404 from './pages/Error404'
import Protect from './pages/protected/'

export default class App extends Component {
    constructor(...props){
        super(...props)
        this.state={
            authed:false, //if is authed
            loading:true //renderizar un componente u otro
        }

        this.handleOnClick = this.handleOnClick.bind(this)
    }

    handleOnClick (e) {
        //alert("click")
        document.getElementById('tuckedMenu').classList.toggle('custom-menu-tucked');
        document.getElementById('toggle').classList.toggle('x');
    }

    render() {
    return this.state.loading === false 
    ? <h1>Loading</h1>
    :<Router>
        <div>
            <header className="custom-menu-wrapper">
            <div className="pure-menu custom-menu custom-menu-top">
                <a href="#" className="pure-menu-heading custom-menu-brand">
                   <img src={logo} alt="logo" />
                </a>
                <a href="#" className="custom-menu-toggle" id="toggle" onClick={this.handleOnClick}><s className="bar"></s><s className="bar"></s></a>
            </div>
            <div className="pure-menu pure-menu-horizontal pure-menu-scrollable custom-menu custom-menu-bottom custom-menu-tucked" id="tuckedMenu">
                <div className="custom-menu-screen"></div>
                <ul className="pure-menu-list">
                    <li className="pure-menu-item">
                        <Link to="/" className="pure-menu-link" onClick={this.handleOnClick}>Home</Link>
                    </li>
                    <li className="pure-menu-item">
                        <Link to="/about" className="pure-menu-link" onClick={this.handleOnClick}>About</Link>
                    </li>
                    <li className="pure-menu-item">
                        <Link to="/login" className="pure-menu-link" onClick={this.handleOnClick}>Login</Link>
                    </li>
                    <li className="pure-menu-item">
                        <Link to="/register" className="pure-menu-link" onClick={this.handleOnClick}>Register</Link>
                    </li>
                       
                </ul>
            </div>
            </header>
            <main className="Main">
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/about'  component={About}/>
                    <Route path='/register'  component={Register}/>
                    <Route path='/login' exact component={Login}/>
                    <Route component={Error404}/>
                </Switch>
            </main>
        </div>
    </Router>
        
    
  }
}