import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap'; 

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
      </header>
    </div>
  );
}

export default App;
