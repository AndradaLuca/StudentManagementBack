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
        console.log(this.state.userTextValue)
    }

    register(e) {
        e.preventDefault();
        console.log(this.state.passTextValue)
    }

    render() {
        return(
            <div>
                <form className = 'LoginForm'>
                    <Label 
                        className = 'LoginLabel'
                        text = 'Username'
                    /> 
                    <TextField  // username text field
                        className = 'LoginInput'
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
        )
    }
}