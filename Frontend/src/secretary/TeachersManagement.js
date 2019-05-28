import React from 'react'
import TextField from '../reusable_components/TextField'
import Label from '../reusable_components/Label'
import './TeachersManagement.css'
import { Button } from '@material-ui/core';

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
        // this.test = this.test.bind(this)
    }

    // test() {
    //     console.log(this.state.nume)
    //     console.log(this.state.prenume)
    //     console.log(this.state.parola)
    //     console.log(this.state.materie)
    // }

    onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
    }

    render() {
        return(
            <div className = 'TeachersPage'>
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

                {/* <Button onClick = {this.test}>test</Button> */}
            </div>
        )
    }
}