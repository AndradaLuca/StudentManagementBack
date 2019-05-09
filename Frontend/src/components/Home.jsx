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
                    <h5 className='textJ'>Universitatea Tehnică din Cluj-Napoca se prezintă astăzi<br/> ca o instituție de învațământ superior modernă,
                        în plină<br/> evoluție, confirmând autentice disponibilități de creație<br/> științifică și culturală,
                        fiind o “Universitate de Cercetare<br/> Avansată și Educație”, între primele douăsprezece<br/> universități din țară,
                        conform Ordinului Ministerului<br/> Educației Naționale nr. 5262 din 5 septembrie 2011 privind<br/> clasificarea universitaților
                        acreditate din sistemul național<br/>de învațământ.</h5>

                    <Button bsstyle="primary">Autentificare</Button>


                </Jumbotron>



            </Container>
        );
    }
}

export default Home;