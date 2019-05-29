import React, {Component} from 'react';
import TableGrade from './TableGrade'
import "./StudentGrade.css"
import {Container, Jumbotron} from "react-bootstrap";
class StudentGrade extends Component {
    render() {
        var studGrade=[{"subject":"DISI","grade":8,"credits":5}]

        return (

            <Container>

                <Jumbotron className='jumboStud'>


                </Jumbotron>
                <br/>
                <br/>
                <div className="table-G">

                    <TableGrade data={studGrade} />

                </div>

            </Container>
        );
    }
}

export default StudentGrade;