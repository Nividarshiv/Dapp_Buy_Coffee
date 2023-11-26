import React,{useState} from "react";
import { Container,Row,Col,Image } from "react-bootstrap";
import "./design.css";

const Appvarient=()=>{

    return(
        <>
         <section id="todaycoffee" className="my-3">
            <div className="text-center">
                <h1 className="display-2 fw-bolder" style={{color:'chocolate'}}>Today varient</h1>
            </div>
            <Container>
            <div id="backcolor" >
                <Row className="align-items-center">
                
                    <Col md={7}>
                        <Image src="https://source.unsplash.com/random/600x600/?coffeedrink" fluid={true} alt="food" rounded></Image>
                    </Col>
                    
                    <Col md={4}>
                        <div >
                            <h1 className="h2 fst-italic" style={{color:"coral"}}>Don't drink coffee to wake up. Wake up to drink coffee.</h1>
                            <br></br>
                            <p className="laed text-muted">Lets have a test will be mouth wandering</p>
                            
                            <button id="buttn"><a href="#order" className="text-decoration-none text-dark btn btn-md">Lets's drink</a></button>
                        </div>
                    </Col>
                    
                </Row>
                </div>
               
            </Container>
         </section>
        </>
    )

}
export default Appvarient