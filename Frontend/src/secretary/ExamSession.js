import React from 'react'
import Calendar from 'react-calendar'
import Label from '../reusable_components/Label'
import TextField from '../reusable_components/TextField'
import Button from '../reusable_components/Button'
import './ExamSession.css'

export default class ExamSession extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: '',
            materie: '',
            sala: '',
            ora: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onClickDay = this.onClickDay.bind(this)
        this.onClick = this.onClick.bind(this)
    }

    onChange(e) {
        this.setState({
			[e.target.name]: e.target.value
		});
    }

    onClickDay(e) {
        this.setState({
            data: e.toString().split('00:')[0]
        })
    }

    onClick() {
        console.log(this.state.data)
        console.log(this.state.materie)
        console.log(this.state.ora)
        console.log(this.state.sala)
    }

    render() {
        return(
            <div className = 'SessionPage'>
                <div className = 'CalendarDiv'>
                    <Calendar
                        onClickDay = {this.onClickDay}
                    />
                </div>
                <form className = 'ExamSessionForm'>
                    <Label 
                        className = 'ExamSessionLabel'
                        text = 'Materie'
                    /> 
                    <TextField
                        className = 'ExamSessionInput'
                        placeholder = 'Type your text here'
                        type = 'text'
                        name = 'materie'
                        value = {this.state.materie}
                        onChange = {this.onChange}
                    />
                    <br/>
                    <Label 
                        className = 'ExamSessionLabel'
                        text = 'Sala'
                    /> 
                    <TextField
                        className = 'ExamSessionInput'
                        placeholder = 'Type your text here'
                        type = 'text'
                        name = 'sala'
                        value = {this.state.sala}
                        onChange = {this.onChange}
                    />
                    <br/>
                    <Label 
                        className = 'ExamSessionLabel'
                        text = 'Ora'
                    /> 
                    <TextField
                        className = 'ExamSessionInput'
                        placeholder = 'Type your text here'
                        type = 'text'
                        name = 'ora'
                        value = {this.state.ora}
                        onChange = {this.onChange}
                    />
                </form>

                <Button 
                    className = 'AddExamButton'
                    text = 'Adauga'
                    onClick = {this.onClick}
                />
            </div>
        )
    }
}