import React from 'react'
import Label from '../reusable_components/Label'
import TextField from '../reusable_components/TextField'
import './StudentsManagement.css'
import { Button } from 'react-bootstrap';

export default class StudentsManagement extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            nume: '',
            prenume: '',
            cnp: '',
            telefon: '',
            grupa: '',
            an: ''
        }

        this.onChange = this.onChange.bind(this)
        // this.test = this.test.bind(this)
    }

    // test() {
    //     console.log(this.state.nume)
    //     console.log(this.state.prenume)
    //     console.log(this.state.cnp)
    //     console.log(this.state.telefon)
    //     console.log(this.state.grupa)
    //     console.log(this.state.an)
    // }

    onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
    }
    
    render() {
        return(
            <div className = 'StudentsPage'>
                <form className = 'StudentsForm'>
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
                {/* <Button onClick = {this.test}>test</Button> */}
            </div>
        )
    }
}