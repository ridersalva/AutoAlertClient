import React from 'react'
import { Container, Form, Row, Button, Col ,Image} from 'react-bootstrap'
import './Contact.css'
import lost from './lost.jpg'
import Footer  from "../Footer/Footer"

function ContactElement() {
    return (
        <>
<Footer/>
        <Container>
            <Row>
                <Col md={4} >
                    <Image className="lost" src = { lost } alt = 'lost img'/>
                    </Col>
                <Col md={8}>

                    <Form className='cont'>
                        <h1>Doubts? Plase Contact us¡¡</h1>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Yuor email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Write to Us</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button className="buttonS" type="submit">
                            Send
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default ContactElement