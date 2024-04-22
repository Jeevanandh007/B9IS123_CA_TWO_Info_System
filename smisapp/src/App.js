import React from 'react';
//import './App.css';
//import login from './components/Assets/Login/Login';
import Navbar from "./components/Navbar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
//import Home from "./pages";
import Order from "./pages/order";
import Login from "./pages/login";
import Search from "./pages/search";


import { Nav, Form,  FormControl,Button } from 'react-bootstrap';



function App() {
  return (
    <div className="App">

    <div className="header_title">
        
        <Nav href="#" className="Project">
            <h1>Sales Management Information System</h1>
          </Nav>

          <Nav className='mr-auto'>
            <Form className="d-flex ms-auto">
              <FormControl type="search" placeholder="Enter PO Number" className="me-2" aria-label="Search" />
              <Button variant="primary">Search</Button>
            </Form>
          </Nav>

      </div>
     
      

      <body className="App-header">

      <Router>
            <Navbar />
            <Routes>
                
                <Route path="/order" element={<Order />} />
                <Route path="/login" element={<Login />} />
                <Route path="/login" element={<Search />} />
                
              
            </Routes>
        </Router>
       
      </body>
    </div>
  );
}

export default App;
