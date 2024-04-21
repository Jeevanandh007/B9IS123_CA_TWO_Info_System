import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, Container, Form, FormLabel, FormControl, Button, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg" className="Navbar">
        <Container>
          <Navbar.Brand href="#" className="Navbar-brand">
            <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-top" />
            Sales Management System
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="">Login</Nav.Link>
              <Nav.Link href="">SignUp</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
              <Button variant="primary">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <header className="App-header">
        <Container>
          <div className='customer-form'>
            <h2>Customer Order Placement Form</h2>
            <Form>
              <Row className="mb-3">
                <FormLabel column sm={2}>Customer Name:</FormLabel>
                <Col sm={10}>
                  <FormControl type='text' placeholder='Enter Name' />
                </Col>
              </Row>

              <Row className="mb-3">
                <FormLabel column sm={2}>Email:</FormLabel>
                <Col sm={10}>
                  <FormControl type='email' placeholder='Enter Email' />
                </Col>
              </Row>

              <Row className="mb-3">
                <FormLabel column sm={2}>Phone Number:</FormLabel>
                <Col sm={10}>
                  <FormControl type='tel' placeholder='Enter Phone Number' />
                </Col>
              </Row>

              <Row className="mb-3">
                <FormLabel column sm={2}>Product:</FormLabel>
                <Col sm={10}>
                  <FormControl type='text' placeholder='Enter Product' />
                </Col>
              </Row>

              <Row className="mb-3">
                <FormLabel column sm={2}>Dosage:</FormLabel>
                <Col sm={10}>
                  <FormControl type='text' placeholder='Enter Dosage' />
                </Col>
              </Row>

              <Row className="mb-3">
                <FormLabel column sm={2}>Address:</FormLabel>
                <Col sm={10}>
                  <FormControl type='text' placeholder='Enter Address' />
                </Col>
              </Row>

              <Row className="mb-3">
                <FormLabel column sm={2}>Pincode:</FormLabel>
                <Col sm={10}>
                  <FormControl type='text' placeholder='Enter Pincode' />
                </Col>
              </Row>

              <Row className="mb-3">
                <FormLabel column sm={2}>Country:</FormLabel>
                <Col sm={10}>
                  <FormControl type='text' placeholder='Enter Country' />
                </Col>
              </Row>

              <Row className="mb-3">
                <FormLabel column sm={2}>Order Status:</FormLabel>
                <Col sm={10}>
                  <FormControl type='text' placeholder='Enter Order Status' />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button variant='primary' type='submit'>Submit</Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Container>
      </header>
    </div>
  );
}

export default App;
