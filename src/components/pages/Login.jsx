import React, {Component} from 'react'

import {login, resetPassword} from '../helpers/Auth'
import './login-register.css'
import 'pure-css/lib/forms.css'
import 'pure-css/lib/buttons.css'

export default class Login extends Component{
    constructor(...props){
        super(...props)
        this.state={
            loginMessage:null
        }
        
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
        this.resetPassword = this.resetPassword.bind(this)
        this.setErrorMessage = this.setErrorMessage.bind(this)
        
    }

    resetPassword(){
        resetPassword(this.email.value)//prom de firebase
            .then(() =>this.setState(this.setErrorMessage(`email sent to ${this.email.value}`)))
            .catch(err => this.setState(this.setErrorMessage("email not found")))
        }   

    handleOnSubmit(e){
        e.preventDefault()
        login(this.email.value, this.password.value)
            .catch(error => this.setState(this.setErrorMessage('User or Password incorrect')))
    }

    setErrorMessage(err){
        return{loginMessage:err }
    }
    render(){
        return(
            <article className="Main-container">
                <h4>LOGIN </h4>
                <form className="pure-form AuthForm" onSubmit={this.handleOnSubmit}>
                    <input type="email" placeholder="Email" ref={ email => this.email = email}/>
                    <input type="password" placeholder="Password" ref={ password => this.password = password}/>
                    {
                        this.state.loginMessage && //cuando el estado sea diferente de null recarga lo despues de &
                        <div className='u-error'>
                            <p>
                                Error : {this.loginMessage}
                                <a href="#" onClick={this.resetPassword} className="alert-link">Forget your password</a>
                            </p>
                        </div>
                    }
                <input className="pure-button pure-button-primary" type="submit" value="Login" />
                </form>
                
            </article>
        )
    }
}