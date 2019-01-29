import React, {Component} from 'react'

import {login} from '../helpers/Auth'

export default class Login extends Component{
    constructor(...props){
        super(...props)
        this.state={
            loginMessage:null
        }
        
        this.handleOnSubmit = this.handleOnSubmit.bind(this)

        
    }

    handleOnSubmit(e){
        alert("Sending Data")
        e.preventDefault()
        login(this.email.value, this.password.value)
            .catch(error => this.setState(this.setErrorMessage('User or Password incorrect')))
    }

    setErrorMessage(err){
        return{loginMessage:err }
    }
    render(){
        return(
            <article>
                <h4>LOGIN Section</h4>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="email" placeholder="Email" ref={ email => this.email = email}/>
                    <input type="password" placeholder="Password" ref={ password => this.password = password}/>
                    {
                        this.state.loginMessage && //cuando el estado sea diferente de null recarga lo despues de &
                        <p>
                            Error : {this.loginMessage}
                        </p>
                    }
                <button type="submit" >Login</button>
                </form>
                
            </article>
        )
    }
}