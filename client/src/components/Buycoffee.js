import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./design.css";
const { ethers } = require("ethers");

const Buycoffee=({state})=>{
    const buyChai = async(event)=>{
        event.preventDefault();
        const {contract}=state;
        const name = document.querySelector("#name").value;
        const message = document.querySelector("#message").value
        const varieties = document.querySelector("#varieties").value;;
        const value = document.querySelector("#amount").value;
        const amount = {value:ethers.utils.parseEther(value)}
        const transaction = await contract.BuyChai(name,message,varieties,amount)
        await transaction.wait();
        alert("Transaction is successul");
        window.location.reload();
      }
    return (
        <>
        <section id="order" className="bg-gray">
          <div className='text-center'>
        <Container className='m-3 p-5'>
          
          <h3 style={{color:'chocolate'}}>Make Order</h3>
      <Row className="justify-content-center">
        <Col md={5}>
        <div className=' border border-1 border-light m-3 p-3 shadow bg-light'>
        <form onSubmit={buyChai}>
        <div className='text-start'>
          <label className='fw-bold fst-italic' style={{color:'brown'}}>Name</label>
          </div>       
        <Form.Control type="text" id="name" placeholder="Name" />
         <br />

         <div className='text-start'>
          <label  className='fw-bold fst-italic' style={{color:'brown'}}>Message</label>
          </div>
         <Form.Control type="text" id="message" placeholder="Messages" />
         <br />

         <div className='text-start'>
          <label  className='fw-bold fst-italic' style={{color:'brown'}}>varieties</label>
          </div>
         <Form.Control type="text" id="varieties" placeholder="Your favourite" />
         <br />

         <div className='text-start'>
          <label  className='fw-bold fst-italic' style={{color:'brown'}}>Amount</label>
          </div>
         <Form.Control type="text" id="amount" placeholder="Amount to pay 1Gwei for an order" />
         <br />
         <br></br>
         <div className='text-center'>
         <button id='cnfmbtn' type='submit'>Order Placed</button>
         </div>
        </form>
        </div>
        </Col>
      </Row >
    </Container>
    </div>
        </section>
        </>
    )
}

export default Buycoffee