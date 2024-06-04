import { useState} from 'react'
import axios from "axios"
import { Form, Row, Col, Button, Container } from 'react-bootstrap'
import { createStore } from "redux"
import Actions from '../Actions/Actions';
import FactsList from '../FactsLists/FactsLists';
import fav from '../components/fav.png';
import { useNavigate} from "react-router-dom";
import chucknorris from '../components/chucknorris.png'

const store = createStore(Actions)

function FormComponent () {

    const navigate = useNavigate()

    const [query, setQuery] = useState('Franciso')
    const [factsData, setFactsData] = useState([])


    const addFavorites = (fact) => {
        store.dispatch({ type: 'ADD', fact })
        alert(`Fact agregada a favoritos`)
    }

    const Shear = () => {
        const fetchData = async () => {
            const result = await axios.get(`https://api.chucknorris.io/jokes/search?query=${query}`)
            if (result.data) {
                setFactsData(result.data.result)
            }      
        }
        setFactsData([])
        fetchData()
    }


    return (
        <div style={{marginTop:10,textAlign:'center'}}>
            <Form>
                <img src={chucknorris} alt="" style={{width:280,height:180}}></img>
                <h1>Facts Chuck Norris</h1>
                    <Container>
                        <Row style={{marginTop:50, marginLeft:300, textAlign:'left', maxWidth:'80%'}}>
                            <Col>
                                <Form.Group>
                                    <label>Busqueda:</label>
                                    <br />
                                    <img src={fav} alt="" className="fav" onClick={()=>navigate('/favorites')}></img>
                                    <Form.Control id="query" type="query" onChange={(component) => setQuery(component.target.value)}/>
                                </Form.Group>
                            </Col>
                                <Col>
                                    <Button variant="danger" size="lg" 
                                        style={{ backgroundColor:"blue", borderColor:"black", 
                                        marginTop:10, width: 120, height: 50}}
                                        onClick={Shear}>Buscar
                                    </Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <FactsList facts={factsData} onAdd={addFavorites}/>
                            </Col>
                        </Row>
                    </Container>
            </Form>
        </div>

    )
}

export {FormComponent, store}