import React from 'react'
import HeaderLinks from '../components/Header/HeaderLinks'
import { Container, Jumbotron, Button } from 'react-bootstrap';

import './SecretaryHeader.css'

export default class SecretaryHeader extends React.Component {
    render(){ 
        return(
            <Container>
                <Jumbotron className = 'jumboProf'>
                    <Button 
                        className = 'jumboBut'
                        href='/secretariat/profesori' 
                        onClick={this.managementProfesori}
                    > 
                        Profesori 
                    </Button>
                    <Button 
                        className = 'jumboBut'
                        href='/secretariat/studenti' 
                        onClick={this.managementStudenti}
                    > 
                        Studenti 
                    </Button>
                    <Button 
                        className = 'jumboBut'
                        href='/secretariat/sesiune' 
                        onClick={this.planificareSesiune}
                    > 
                        Sesiune 
                    </Button>
                </Jumbotron>
            </Container>
        )
    }
}