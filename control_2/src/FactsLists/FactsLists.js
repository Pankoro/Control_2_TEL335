import { Container, Row, Col, Button } from "react-bootstrap"

function FactsList (props) {

    return (
        <section>
            <Container>
                <Row>
                <div className="col-12 text-center">
                <ul className="arrow-styled">
                            {
                                props.facts.map((fact, index) => (
                                    <div key={index} className='row' style={{marginLeft:150, marginTop:20}}>
                                    <Row>
                                        <Col>
                                            <Row>
                                                <Col><h2>{fact.value}</h2></Col>
                                            </Row>
                                            <Row>
                                                <Col><h2>{fact.created_at}</h2></Col>
                                            </Row>
                                            <Row>
                                                <Col><h2>{fact.categories}</h2></Col>
                                                <br/>
                                                <br/>
                                                <br/>
                                            </Row>
                                        </Col>
                                        <Col>
                                            <Button style={{ backgroundColor:"red", borderColor:"black", 
                                            marginTop:50, width: 50, height: 50}} onClick={() => props.onAdd(fact.value)}>Fav.</Button>
                                        </Col>
                                    </Row>
                                        
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                </Row>
            </Container>
        </section>
    )
    
}

export default FactsList