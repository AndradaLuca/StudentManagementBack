import React, {Component} from 'react';
import {Container,Jumbotron,Button,Row,Col,Image} from 'react-bootstrap'
import './Professor.css'
class Professor extends Component {


    componentWillMount()
    {
        window.localStorage.setItem("user","Radu");
    }


    render() {
        return (
            <Container>

                <Jumbotron className='jumboProf'>


                </Jumbotron>


            </Container>
        );
    }
}

export default Professor;