import React, {Component} from 'react';
import './Home.css'
import {Container,Jumbotron,Button,Row,Col,Image} from 'react-bootstrap'

class Home extends Component {
    render() {
        return (
            <Container>

                <Jumbotron className='jumbo-home'>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h3 className='textJ'>Bine ati venit la Universitatea Tehnica</h3>

                    <Button bsstyle="primary">Autentificare</Button>


                </Jumbotron>

                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="home-person-wrapper">

                        <Image src={require("../assets/img/rector.jpg")} className="prof-pic"/>

                        <br/>
                        <br/>

                        <h3>Prof. univ. dr. ing. Vasile ŢOPA</h3>

                        <p className="align-T">S-a născut pe 29 iulie 1957 la Cluj-Napoca. A studiat la Facultatea de Electrotehnică, din cadrul Universităţii Tehnice din Cluj-Napoca, unde a obţinut diploma de inginer. În perioada 1991 – 1998 şi-a făcut studiile doctorale, obţinând Diploma de Doctor Inginer</p>


                    </Col >

                    <Col xs={12} sm={4} className="home-person-wrapper">

                        <Image src={require("../assets/img/prorector.jpg")} className="prof-pic"/>

                        <br/>
                        <br/>

                        <h3>Prof. univ. dr. ing. Sergiu NEDEVSCHI</h3>

                        <p>Născut la 9.10.1951 in Cluj-Napoca. Este absolvent al Institutului Politehnic din Cluj-Napoca in 1975, cu doctorat in inginerie electrică din anul 1993 la aceiaşi universitate. In perioada 2000-2004 a fost şeful Catedrei de Calculatoare.</p>

                    </Col >

                    <Col xs={12} sm={4} className="home-person-wrapper">

                        <Image src={require("../assets/img/prorectord.jpg")} className="prof-pic"/>

                        <br/>
                        <br/>

                        <h3>Prof. univ. dr. ing. Daniela Lucia MANEA</h3>

                        <p>S-a născut pe 03.04.1965 la Cluj-Napoca. A studiat la Institutul Politehnic Cluj-Napoca, Facultatea de Construcții, unde a obţinut diploma de inginer constructor. În perioada 1988-1992 a fost inger in cadrul "Intreprinderea Județeană de Gospodarire Alba Iulia".</p>


                    </Col >
                </Row>

            </Container>
        );
    }
}

export default Home;