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
            <Navbar.Brand/>
          <Container/>
          <Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
