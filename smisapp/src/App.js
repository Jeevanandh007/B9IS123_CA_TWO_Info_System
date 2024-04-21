import React from 'react';
import './App.css';

import { Nav, Container, Form, FormLabel, FormControl, Button, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">

    <div className="header_title">
        
        <Nav href="#" className="Project">
            Sales Management Information System
          </Nav>

          <Nav className='mr-auto'>
            <Form className="d-flex ms-auto">
              <FormControl type="search" placeholder="Enter PO Number" className="me-2" aria-label="Search" />
              <Button variant="primary">Search</Button>
            </Form>
            </Nav>

      </div>
      
      

      <body className="App-header">
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
              <button type="submit">Submit</button>
            </Form>
          </div>

          
        </Container>
      </body>
    </div>
  );
}

export default App;
