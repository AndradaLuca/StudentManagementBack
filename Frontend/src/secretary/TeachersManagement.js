import React from 'react'
import TextField from '../reusable_components/TextField'
import Label from '../reusable_components/Label'
import './TeachersManagement.css'
import Button from '../reusable_components/Button';
import { Container, Jumbotron } from 'react-bootstrap';
import * as Actions from '../actions/Actions'

export default class TeachersManagement extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            nume: '',
            prenume: '',
            parola: '',
            materie: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
    }

    async onSubmit() {
        let user = {
            email: this.state.nume + '.' + this.state.prenume + '@professor.utcluj.ro',
            password: this.state.parola
        }

        let professor = {
            user: user,
            subject: this.state.materie
        }
        
        await Actions.addProfessor(professor).then(result => {
            if(result !== null) 
                alert('A professor was successfully added!')
        })
    }

    render() {
        return(
            <Container>
                <Jumbotron className = 'TeachersPage'>
                <form className = 'TeachersForm'>
                    <Label 
                        className = 'TeachersManagementLabel'
                        text = 'Nume'
                    /> 
                    <TextField
                        className = 'TeachersManagementInput'
                        placeholder = 'Type your text here'
                        type = 'text'
                        name = 'nume'
                        value = {this.state.nume}
                        onChange = {this.onChange}
                    />
                    <Label 
                        className = 'TeachersManagementLabel'
                        text = 'Prenume'
                    /> 
                    <TextField
                        className = 'TeachersManagementInput'
                        placeholder = 'Type your text here'
                        type = 'text'
                        name = 'prenume'
                        value = {this.state.prenume}
                        onChange = {this.onChange}
                    />
                    <Label 
                        className = 'TeachersManagementLabel'
                        text = 'Parola'
                    /> 
                    <TextField
                        className = 'TeachersManagementInput'
                        placeholder = 'Type your text here'
                        type = 'password'
                        name = 'parola'
                        value = {this.state.parola}
                        onChange = {this.onChange}
                    />
                    <Label 
                        className = 'TeachersManagementLabel'
                        text = 'Materie'
                    /> 
                    <TextField
                        className = 'TeachersManagementInput'
                        placeholder = 'Type your text here'
                        type = 'text'
                        name = 'materie'
                        value = {this.state.materie}
                        onChange = {this.onChange}
                    />
                </form>

                <Button 
                    className = 'TMB'
                    text = 'Adauga profesor'
                    onClick = {this.onSubmit}
                />
                </Jumbotron>
            </Container>

        )
    }
}