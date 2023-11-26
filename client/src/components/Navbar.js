import React from "react"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const AppNavBar=()=>{
    return(
        <>
        <Navbar expand="lg" className="bg-body-tertiary"   bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home"><h3><span><i class="bi bi-yelp"></i>TASTE BEGINS</span></h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end ">
        <Nav>
            <Nav.Link href="#menu" className="px-3"><h5>Menu</h5></Nav.Link>
            <Nav.Link href="#todaycoffee"><h5>Today's coffee</h5></Nav.Link>
            <Nav.Link href="#order" className="px-3"><h5>Order</h5></Nav.Link>
            </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}

export default AppNavBar