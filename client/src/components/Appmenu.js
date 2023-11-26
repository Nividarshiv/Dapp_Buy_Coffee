import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "./design.css";

function AppMenu() {

  return (
    <>
      <section id="menu" className="bg-light">
        <Container>
          <h1 className="text-center display-3 fw-bolder fs-1 my-3 py-3" style={{ color: "orange" }}>Wonderful menu for you</h1>
          <Row className='justify-content-evenly'>
            <Col md={3}>
              <Card>
                <Card.Img variant="top" src={require("../pictures/flatcof.jpg")} />
                <Card.Body>
                  <Card.Title><h1 id='titstyle'>Flat White</h1></Card.Title>
                  <Card.Text>
                    A flat white is a blend of micro-foamed milk poured over a single or double shot of espresso.
                  </Card.Text>
                  <div className="text-center">
                    <button id="btnmenu"><a href="#order" className="text-decoration-none text-dark btn btn-md">Lets's drink</a></button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Img variant="top" src={require("../pictures/capcof.jpg")} />
                <Card.Body>
                  <Card.Title><h1 id='titstyle'>Cappuccino</h1></Card.Title>
                  <Card.Text>
                    A cappuccino is the perfect balance of espresso,
                    steamed milk and foam.
                    An expertly made should be rich.

                  </Card.Text>
                  <div className="text-center">
                    <button id="btnmenu"><a href="#order" className="text-decoration-none text-dark btn btn-md">Lets's drink</a></button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} mx-4 px-4>
              <Card>
                <Card.Img variant="top" src={require("../pictures/icecof.jpg")} />
                <Card.Body>
                  <Card.Title><h1 id='titstyle'>Iced coffee</h1></Card.Title>
                  <Card.Text>
                    Iced coffee is a cold version of your favourite coffee, but it's not simply a coffee that has been left to cool.
                  </Card.Text>
                  <div className="text-center">
                    <button id="btnmenu"><a href="#order" className="text-decoration-none text-dark btn btn-md">Lets's drink</a></button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className='justify-content-evenly mt-5 pb-3'>
            <Col md={3}>
              <Card>
                <Card.Img variant="top" src={require("../pictures/moccof.jpg")} />
                <Card.Body>
                  <Card.Title><h1 id='titstyle'>Mocha</h1></Card.Title>
                  <Card.Text>
                    A shot of espresso is combined with a chocolate powder or syrup, followed by milk or cream.
                  </Card.Text>
                  <div className="text-center">
                    <button id="btnmenu"><a href="#order" className="text-decoration-none text-dark btn btn-md">Lets's drink</a></button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Img variant="top" src={require("../pictures/logcof.jpg")} />
                <Card.Body>
                  <Card.Title><h1 id='titstyle'>Long black</h1></Card.Title>
                  <Card.Text>
                    Exactly the same as an Espresso shot, but two shots are made into the one cup.
                  </Card.Text>
                  <div className="text-center">
                    <button id="btnmenu"><a href="#order" className="text-decoration-none text-dark btn btn-md">Lets's drink</a></button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} mx-4 px-4>
              <Card>
                <Card.Img variant="top" src={require("../pictures/latcof.jpg")} />
                <Card.Body>
                  <Card.Title><h1 id='titstyle'>Latte</h1></Card.Title>
                  <Card.Text>
                    A milk coffee is a made up of one or two shots of espresso,steamed milk and a final,thin layer of frothed milk.
                  </Card.Text>
                  <div className="text-center">
                    <button id="btnmenu"><a href="#order" className="text-decoration-none text-dark btn btn-md">Lets's drink</a></button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default AppMenu