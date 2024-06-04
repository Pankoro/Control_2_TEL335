import { Form, Row, Col} from 'react-bootstrap'
import Arrow from '../components/backArrow.png'
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

function Favorites() {

    const navigate = useNavigate()
    const favFacts = useSelector((state)=>state)

    return (
        <div style={{marginTop:10,textAlign:'center'}}>
            <Form>
            <img src={Arrow} alt="" className="Arrow" onClick={()=>navigate('/')}></img>
                <h1 className='title'>Favorites</h1>
                    <div className="col-12 text-center">
                            <ul className="arrow-styled">
                                {
                                    favFacts.map((fact, index) => (
                                        <div key={index} className='row' style={{marginTop:20}}>
                                            <Row>
                                                <Col><h2>{fact}</h2></Col>
                                                <br/>
                                                <br/>
                                            </Row>
                                        </div>
                                    ))
                                }
                            </ul>
                    </div>
            </Form>
        </div>
    )
}

export default Favorites