import React from "react";
import {  Container, Form, FormLabel, FormControl, Row, Col } from 'react-bootstrap';

const order = () => {
    return (

      
        <Container>
          <div className='customer-form'>
            <h2>CUSTOMER ORDER PLACEMENT FORM</h2>
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
<p></p>
              
              <button type="submit">Submit</button>
            </Form>
          </div>

          
        </Container>
   
    );
};
 
export default order;