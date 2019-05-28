import React from 'react'

import Button from '../reusable_components/Button'
import Label from '../reusable_components/Label'
import TextField from '../reusable_components/TextField'
import * as Constants from '../constants/Constants'

import './Login.css'

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            userTextValue: '',
            passTextValue: ''
        }

        this.onChange = this.onChange.bind(this)
        this.login = this.login.bind(this)
        this.register = this.register.bind(this)
    }

    onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

    login(e) {
        e.preventDefault();

        // regex.test return true if a valid pattern was found else false
        let emailValidation = Constants.emailRegex.test(this.state.userTextValue)

        if(emailValidation) {
            console.log('valid username')
            this.props.history.push('/secretary')
        } else {
            console.log('invalid username')
        }        

        // TODO backend call for login
    }

    register(e) {
        e.preventDefault();

        // regex.test return true if a valid pattern was found else false
        let passwordValidation = Constants.passwordRegex.test(this.state.passTextValue)

        if(passwordValidation) {
            console.log('valid password')
        } else {
            console.log('invalid password')
        }

        // TODO backend call for register
    }

    render() {
        return(
            <div className = 'LoginBackground'>
            <div className = 'LoginPage'>
                <form className = 'LoginForm'>
                    <Label 
                        className = 'LoginLabel'
                        text = 'Username'
                    /> 
                    <TextField  // username text field
                        className = 'LoginInput'
                        placeholder = {'Type your username...'}
                        type = {Constants.userTextType}
                        name = 'userTextValue'
                        value = {this.state.userTextValue}
                        onChange = {this.onChange}
                    /> <br />

                    <Label
                        className = 'LoginLabel'
                        text = 'Password'
                    /> 
                    <TextField  // password text field
                        className = 'LoginInput'
                        placeholder = {'Type your password...'}
                        type = {Constants.passTextType}
                        name = 'passTextValue'
                        value = {this.state.passTextValue}
                        onChange = {this.onChange}
                    /> <br />

                    <Button
                        className = 'LoginButton'
                        text = {Constants.login}
                        onClick = {this.login}
                    />

                    <Button
                        className = 'LoginButton'
                        text = {Constants.register}
                        onClick = {this.register}
                    />
                </form>
            </div>
            </div>
        )
    }
}