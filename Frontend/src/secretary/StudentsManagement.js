import React from 'react'
import Label from '../reusable_components/Label'
import TextField from '../reusable_components/TextField'
import './StudentsManagement.css'
import Button from '../reusable_components/Button';
import { Container, Jumbotron } from 'react-bootstrap';

export default class StudentsManagement extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            id: '',
            nume: '',
            prenume: '',
            cnp: '',
            telefon: '',
            grupa: '',
            an: ''
        }

        this.onChange = this.onChange.bind(this)
    }

    onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
    }
    
    render() {
        return(
            <Container>
                <Jumbotron className = 'StudentsPage'>
                <form className = 'StudentsForm'>
                    <Label 
                        className = 'StudentsManagementLabel'
                        text = 'Id'
                    /> 
                    <TextField
                        className = 'StudentsManagementInput'
                        placeholder = 'Type your text here'
                        type = 'text'
                        name = 'id'
                        value = {this.state.id}
                        onChange = {this.onChange}
                    />
                    <Label 
                        className = 'StudentsManagementLabel'
                        text = 'Nume'
                    /> 
                    <TextField
                        className = 'StudentsManagementInput'
                        placeholder = 'Type your text here'
                        type = 'text'
                        name = 'nume'
                        value = {this.state.nume}
                        onChange = {this.onChange}
                    />
                    <br/>
                    <Label 
                        className = 'StudentsManagementLabel'
                        text = 'Prenume'
                    /> 
                    <TextField
                        className = 'StudentsManagementInput'
                        placeholder = 'Type your text here'
                        type = 'text'
                        name = 'prenume'
                        value = {this.state.prenume}
                        onChange = {this.onChange}
                    />
                    <br/>
                    <Label 
                        className = 'StudentsManagementLabel'
                        text = 'CNP'
                    /> 
                    <TextField
                        className = 'StudentsManagementInput'
                        placeholder = 'Type your text here'
                        type = 'text'
                        name = 'cnp'
                        value = {this.state.cnp}
                        onChange = {this.onChange}
                    />
                    <br/>
                    <Label 
                        className = 'StudentsManagementLabel'
                        text = 'Telefon'
                    /> 
                    <TextField
                        className = 'StudentsManagementInput'
                        placeholder = 'Type your text here'
                        type = 'text'
                        name = 'telefon'
                        value = {this.state.telefon}
                        onChange = {this.onChange}
                    />
                    <br/>
                    <Label 
                        className = 'StudentsManagementLabel'
                        text = 'Id grupa'
                    /> 
                    <TextField
                        className = 'StudentsManagementInput'
                        placeholder = 'Type your text here'
                        type = 'text'
                        name = 'grupa'
                        value = {this.state.grupa}
                        onChange = {this.onChange}
                    />
                    <br/>
                    <Label 
                        className = 'StudentsManagementLabel'
                        text = 'An studiu'
                    /> 
                    <TextField
                        className = 'StudentsManagementInput'
                        placeholder = 'Type your text here'
                        type = 'text'
                        name = 'an'
                        value = {this.state.an}
                        onChange = {this.onChange}
                    />
                    <br/>
                </form>
                    <Button
                        className = 'SMB'
                        onClick = {this.test}
                        text = 'Adauga student'
                    />

                    <Button
                        className = 'SMB'
                        onClick = {this.test}
                        text = 'Modifica informatii student'
                    />
                </Jumbotron>
            </Container>
        )
    }
}