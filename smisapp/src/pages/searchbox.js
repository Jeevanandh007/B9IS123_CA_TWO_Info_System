import React from "react";
import {  Form,  FormControl,Button } from 'react-bootstrap';

const searchbox = () => {
    return (

    
      <Form className="d-flex ms-auto">
              <FormControl type="search" placeholder="Enter PO Number" className="me-2" aria-label="Search" />
              <Button variant="primary">Search</Button>
       </Form>
  
    
    );
};
 
export default searchbox;