import React, {Component} from 'react'

import {auth} from '../helpers/Auth'
import 'pure-css/lib/forms.css'
import 'pure-css/lib/buttons.css'
import './login-register.css'

export default class Register extends Component{
    constructor(...props){
        super(...props)
        this.state={
            loginMessage:null
        }
        
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
        
        this.setErrorMessage = this.setErrorMessage.bind(this)
        
    }

    

    handleOnSubmit(e){
        e.preventDefault()
        auth(this.email.value, this.password.value)
            .catch(error => this.setState(this.setErrorMessage(error.message)))
    }

    setErrorMessage(err){
        return{loginMessage:err }
    }
    render(){
        return(
            <article className="Main-container">
                <h4>Register </h4>
                <form className="pure-form AuthForm" onSubmit={this.handleOnSubmit}>
                    <input type="email" placeholder="Email" ref={ email => this.email = email}/>
                    <input type="password" placeholder="Password" ref={ password => this.password = password}/>
                    {
                        this.state.loginMessage && //cuando el estado sea diferente de null recarga lo despues de &
                        <div className='u-error'>
                            <p>
                                Error : {this.state.loginMessage}
                                <a href="#" onClick={this.resetPassword} className="alert-link">Olvidaste tu contraseña</a>
                            </p>
                        </div>
                    }
                <input className="pure-button pure-button-primary" type="submit" value="Register"/>
                </form>
                
            </article>
        )
    }
}