import React, { Component }  from 'react';
import { Link, } from "react-router-dom";
import { Button, Row, Col, Navbar, Form } from 'react-bootstrap';

class Profil extends Component {

    render() { 
        return ( 
          <div> 
            <Navbar fixed="top" variant="dark">
              <Navbar.Brand>
                <h2>Profile</h2>
              </Navbar.Brand>
            </Navbar>
            <Row>
              <Col  className="text-center mx-auto" ><h3>My Profile</h3></Col>
            </Row>
            <Form>
            <Form.Group as={Row} className="w-responsive text-center">
              <Form.Label >
                <h4>Name  :</h4> 
              </Form.Label>
              <Col>
                <Form.Control placeholder="<Your Name>" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="w-responsive text-center">
              <Form.Label>
                <h4>DOB  :</h4> 
              </Form.Label>
              <Col>
                <Form.Control type="date" placeholder="MM/DD/YY" />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="w-responsive text-center">
              <Form.Label>
                <h4>ADDRES  :</h4> 
              </Form.Label>
              <Col>
                <Form.Control type="addres" as="textarea" placeholder="Addres" />
              </Col>
            </Form.Group>
            </Form>
            <Col className="w-responsive text-center mx-auto p-3" >
            <Link to="/"><Button variant="primary" size="lg">Back</Button></Link>
            </Col>
            
          </div>
        );
    }
}
 
export default Profil;