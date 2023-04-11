import React, { Component } from 'react';
import './App.css';
import { Navbar, Container, Row, Col, Card, Button, Nav, Table} from 'react-bootstrap'




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty_aventador: 0,
      qty_i8: 0,
      qty_fer488: 0,
      };
      
    }
   
   

  IncrementButton(product){
    if(product === 'aventador'){this.setState({qty_aventador: this.state.qty_aventador + 1});}
    else if(product === 'i8'){this.setState({qty_i8: this.state.qty_i8 + 1});}
    else if(product === 'fer488'){this.setState({qty_fer488: this.state.qty_fer488 + 1});}
  }

  DecrementButton(product){
    
    if(product === 'aventador'){
      if(this.state.qty_aventador > 0)
        this.setState({qty_aventador: this.state.qty_aventador - 1});
      else
        this.setState({qty_aventador: 0});
    }
      
    else if(product === 'i8'){
      if(this.state.qty_i8 > 0)
        this.setState({qty_i8: this.state.qty_i8 - 1});
      else
        this.setState({qty_i8: 0});
    }
      
    else if(product === 'fer488'){
      if(this.state.qty_fer488 > 0) 
        this.setState({qty_fer488 : this.state.qty_fer488 - 1});
      else
        this.setState({qty_fer488: 0})
    }
   
  }
 


  render() {
    console.log(this.state);
   
    
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand={false}>
          <Container fluid>
            <Navbar.Brand href="#">MotoShop</Navbar.Brand>
            <Nav className='me-auto'>
              <Nav.Link href="#order">Order</Nav.Link>
            </Nav>
          </Container>   
        </Navbar>
        <div class="pt-5">
        <Container>
          <Row xs="auto">
            <Col className='aven'>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="aventador.jpg" />
                <Card.Body>
                <Card.Title>Lamborghini Aventador</Card.Title>
                <Card.Text>
                  $300
                </Card.Text>
                <Button  variant="primary"  onClick={this.DecrementButton.bind(this, 'aventador')}>-</Button>
                <Button  variant='secondary' disabled>Quantity :  <label >{this.state.qty_aventador}</label> </Button>
                <Button  variant="primary"  onClick={this.IncrementButton.bind(this, 'aventador')}>+</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="i8.jpg" />
                <Card.Body>
                <Card.Title>BMW i8</Card.Title>
                <Card.Text>
                  $200
                </Card.Text>
                <Button  variant="primary" name="DecrementI8" onClick={this.DecrementButton.bind(this, 'i8')}>-</Button>
                <Button  variant='secondary' disabled>Quantity :  <label>{this.state.qty_i8}</label> </Button>
                <Button  variant="primary" name="IncrementI8" onClick={this.IncrementButton.bind(this, 'i8')}>+</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="fer488.jpg" />
                <Card.Body>
                <Card.Title>Ferrari 488 GTB</Card.Title>
                <Card.Text>
                  $100
                </Card.Text>
                <Button  variant="primary" onClick={this.DecrementButton.bind(this, 'fer488')}>-</Button>
                <Button  variant='secondary' disabled>Quantity :  <label>{this.state.qty_fer488}</label> </Button>
                <Button  variant="primary" onClick={this.IncrementButton.bind(this, 'fer488')}>+</Button>
                </Card.Body>
                </Card>
            </Col>
            <Col>
            <div class="pt-5">
                  <Table striped bordered hover size="sm" >
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Lamborghini Aventador</td>
                        <td>{this.state.qty_aventador}</td>
                        <td>{this.state.qty_aventador*300}</td>
                      </tr>
                      <tr>
                        <td>BMW i8</td>
                        <td>{this.state.qty_i8}</td>
                        <td>{this.state.qty_i8*200}</td>
                      </tr>
                      <tr>
                        <td>Ferrari 488 GTB</td>
                        <td>{this.state.qty_fer488}</td>
                        <td>{this.state.qty_fer488*100}</td>
                      </tr>
                      
                    </tbody>
                    <thead>
                      <tr>
                        <th>Total</th>
                        <th>{this.state.qty_aventador + this.state.qty_i8 + this.state.qty_fer488 }</th>
                        <th>{(this.state.qty_aventador*300) + (this.state.qty_i8*200) + (this.state.qty_fer488*100)}</th>
                      </tr>
                    </thead>
                  </Table>
                  <label>&copy;63103600 นาย ดนัยนันท์ ชำนาญไพสณฑ์</label>
                  <label>&copy;63103766 นาย ไตรทัพ มณีเจริญ</label>
                </div>
            </Col>
          </Row>
        </Container>
        </div>


      </div>
    );
  }
}
export default App;