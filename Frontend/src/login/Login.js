import React from 'react'

import Button from '../reusable_components/Button'
import Label from '../reusable_components/Label'
import TextField from '../reusable_components/TextField'
import * as Constants from '../constants/Constants'
import * as Actions from '../actions/Actions'

import './Login.css'
import { Container, Jumbotron } from 'react-bootstrap';

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            email: '',
            password: ''
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

    async login(e) {
        e.preventDefault();

        // regex.test return true if a valid pattern was found else false
        let emailValidation = Constants.emailRegex.test(this.state.email)

        if(emailValidation) {
            
            let user = {
                email: this.state.email,
                password: this.state.password
            }

            await Actions.login(user).then(user => {
                if(user !== null) {
                    window.localStorage.setItem('user', user.email)

                    let type = Actions.getType(user.email)

                    if(type === 'student')  window.location.href = '/profile'
                    if(type === 'secretariat') window.location.href = '/secretariat'
                    if(type === 'profesor') window.location.href = '/professor'
                }
            })
        } else {
            alert('invalid username')
        }        
    }

    async register(e) {
        e.preventDefault();

        // regex.test return true if a valid pattern was found else false
        let passwordValidation = Constants.passwordRegex.test(this.state.password)
        // regex.test return true if a valid pattern was found else false
        let emailValidation = Constants.emailRegex.test(this.state.email)

        if(passwordValidation && emailValidation) {
            let user = {
                email: this.state.email,
                password: this.state.password
            }

            await Actions.register(user).then(user => {
                if(user !== null)
                    alert("Successffully registered!")
            })

        } else {
            alert('Invalid password')
        }
    }

    render() {
        return(
            <Container>

                <Jumbotron className = 'LoginPage'>
                        <form className = 'LoginForm'>
                            <Label 
                                className = 'LoginLabel'
                                text = 'Username'
                            /> 
                            <TextField  // username text field
                                className = 'LoginInput'
                                placeholder = {'Type your username...'}
                                type = {Constants.userTextType}
                                name = 'email'
                                value = {this.state.email}
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
                                name = 'password'
                                value = {this.state.password}
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
                </Jumbotron>

            </Container>
        )
    }
}


