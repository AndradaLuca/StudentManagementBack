import React, {Component} from 'react';
import TableGrade from './TableGrade'
import "./StudentGrade.css"
import {Container, Jumbotron} from "react-bootstrap";

import Request from "superagent";

class StudentGrade extends Component {

    constructor(props) {
        super(props);

        this.state = {
            studentGrades: [],
            hasError: false
        }
    }


    componentWillMount() {

        this.getStudentGrades();
    }

    getStudentGrades(){

        Request.post('http://192.168.43.113:8080/student/grades/')
            .set('Content-Type', 'text/plain')
            .send("andrada.luca@student.utcluj.ro")
            .then((response)=>{
                this.setState({
                    studentGrades: response.body
                })
                console.log(response.body)
            })
            .catch(err => {
                this.setState({
                    hasError: true
                })
            })

    }



    render() {
        const { studentGrades } = this.state;

        return (

            <Container>

                <Jumbotron className='jumboStud'>


                </Jumbotron>
                <br/>
                <br/>
                <div className="table-G">

                    <TableGrade data={studentGrades.length > 0  ? studentGrades : ''}/>


                </div>

            </Container>
        );
    }
}

export default StudentGrade;