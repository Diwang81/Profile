import React, { Component }  from 'react';
import ReactDOM from 'react-dom'
import { Link } from "react-router-dom";
import { Button, Row, Col, Navbar } from 'react-bootstrap';

let modalRoot = document.getElementById('modal-root')

class Modal extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <div
        style={{
          position: 'absolute',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          backgroundColor: 'rgba(0,0,0,0.3)',
        }}
        onClick={this.props.onClose}
      >
        <div
          style={{
            background: '#fff',
            display: 'inline-block',
            minHeight: '200px',
            position: 'sticky',
            minWidth: '300px',
            boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
            justifySelf: 'center',
          }}
        >
          {this.props.children}
        </div>
      </div>,
      modalRoot,
    )
  }
}

class Home extends Component {
    state = {showModal: false}
    handleOpenModal  = () => this.setState({showModal: true})
    handleCloseModal = () => this.setState({showModal: false})

    render() {
      return (
        <div className="container">
            <Navbar fixed="top" variant="dark" >
              <Navbar.Brand>
                <h2>Home Page</h2>
              </Navbar.Brand>
            </Navbar>
            <Row>
              <Col><h2 className="w-responsive text-center mx-auto p-3 mt-2">Welcome, Diwang Putranda Wikastara</h2></Col>
            </Row>
            <Row>
            <Col className="w-responsive text-center mx-auto p-3 mt-2">
              <Link to="/Profile">
                <Button variant="primary" size="lg" >Profile</Button>
              </Link>
            </Col>
              <Col className="w-responsive text-center mx-auto p-3 mt-2">
                <Button variant="primary" onClick={this.handleOpenModal} size="lg" >
                  Do
                </Button>
              </Col>
            </Row>
            {this.state.showModal ? (
            <Modal 
              isOpen={this.state.showModal}
              onRequestClose={this.handleCloseModal}
              shouldCloseOnOverlayClick={false}
            >
              <Button variant="danger"  onClick={this.handleCloseModal}  >X</Button>
                <h2 style={{ color: 'rgba(48, 129, 235)', padding: '0.5em', }}>ERROR</h2>
                <h3 style={{ color: 'rgba(48, 129, 235)' }}>Can't do anything</h3>
              <Button variant="secondary" onClick={this.handleCloseModal} >OK</Button>
            </Modal>
            ) : null}
        </div>

        );
    }
}
 
export default Home;