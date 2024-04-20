import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, Container, Form,FormGroup, FormLabel,Button, FormControl, FormText } from 'react-bootstrap'; 

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-top"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href=""> Login </Nav.Link>
                <Nav.Link href=""> SignUp </Nav.Link>
              </Nav>
              <Nav className="d-flex align-items-center">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <header className="App-header">
        {/*customer form*/}

        <div className='customer-form'>
          <Form>
            <FormGroup className='mb-3' controlId='formBasicName'>
              <FormLabel>Customer Name:</FormLabel>
              <FormControl type='email' placeholder='Enter Name'/>
              <FormText className='texted-muted'></FormText>
            </FormGroup>

            <FormGroup className='mb-3' controlId='formBasicEmail'>
              <FormLabel>Email:</FormLabel>
              <FormControl type='email' placeholder='Enter Email'/>
              <FormText className='texted-muted'></FormText>
            </FormGroup>

            <FormGroup className='mb-3' controlId='formBasicEmail'>
              <FormLabel>Phone Number:</FormLabel>
              <FormControl type='phonenumber' placeholder='Enter phonenumber'/>
            </FormGroup>

            <FormGroup className='mb-3' controlId='formBasicProduct'>
              <FormLabel>Product:</FormLabel>
              <FormControl type='productname' placeholder='Enter product'/>
            </FormGroup>
            <Button variant='primary' type='submit'>
            </Button>
          </Form>
          </div>
      </header>
    </div>
  );
}

export default App;
