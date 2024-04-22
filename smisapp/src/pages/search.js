import React from "react";
import { Nav, Form,  FormControl,Button } from 'react-bootstrap';

const order = () => {
    return (

    
      <Nav className='mr-auto'>
            <Form className="d-flex ms-auto">
              <FormControl type="search" placeholder="Enter PO Number" className="me-2" aria-label="Search" />
              <Button variant="primary">Search</Button>
            </Form>
          </Nav>
          
 
   
    );
};
 
export default order;