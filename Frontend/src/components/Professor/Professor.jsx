import React, {Component} from 'react';
import {Container,Jumbotron,Button,Row,Col,Image} from 'react-bootstrap'
import './Professor.css'
import Request from "superagent";
import TableProfessor from './TableProfessor'
import {Form,Label,Input} from 'reactstrap';

class Professor extends Component {
<<<<<<< HEAD
=======

    constructor(props) {
        super(props);

        this.state = {
            profGrades: [],
            hasError: false
        }
    }


    componentWillMount() {

        this.getProfessorGrades();
    }

    getProfessorGrades(){

        Request.get('http://192.168.43.113:8080/student/studentsBySubject?prof=prof')
            .then((response)=>{

                console.log(response.body)

                this.setState({
                    profGrades: response.body
                })

            })
            .catch(err => {
                this.setState({
                    hasError: true
                })
            })

    }

    handlePostGrade(){
        Request.get('http://192.168.43.113:8080/profesor/addGrade?profesor=prof&'+'grade='+document.getElementById("nota").value+
            '&student='+document.getElementById("email").value)
            .then((response)=>{

                console.log(response.body)

               

            })
            .catch(err => {
                this.setState({
                    hasError: true
                })
            })
    }


>>>>>>> 4c93d3555db493899837dd0c3d0d285deb9843ff
    render() {

        const { profGrades } = this.state;
        return (
            <Container>

                <Jumbotron className='jumboProf'>


                </Jumbotron>
                <TableProfessor data={profGrades.length > 0  ? profGrades : ''}/>

                <br/>
                <Form className="doctorF">

                    <Label>Nota</Label>
                    <Input id="nota" type="text" placeholder="Nota"/>

                    <Label>Email</Label>
                    <Input id="email" type="text" placeholder="Email"/>




                </Form>
                <br/>

                <Button variant="primary" className="postB" onClick={()=>this.handlePostGrade()}>Adauga Nota</Button>

            </Container>
        );
    }
}

export default Professor;