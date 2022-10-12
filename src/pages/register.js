import React from "react";
import {Container, Row, Col,Form,Button} from "react-bootstrap";
import Footer from "../components/footer";
import "../style/register.css";


function Register() {
  const registerHandler=()=>{

  }
  return (
    <div style={{
      width: "100%",
      height: "100vh",
      backgroundColor:"#9F8772"

  }}>
       <Container className="main">
          <Row className=" registerContainer" >
              <Col >
                  <h1 className="margin">Register</h1><hr></hr>
                  <Form >
                      <Form.Group controlId="formBasicEmail">
                          <Form.Control className="input" type="text" placeholder="Username" />
                      </Form.Group><br></br>
                      <Form.Group controlId="margin formBasicPassword">
                          <Form.Control className="input" type="password" placeholder="Password" />
                      </Form.Group><br></br>
                      <Form.Group controlId="margin formBasicPassword">
                          <Form.Control className="input" type="password" placeholder="Confirm Password" />
                      </Form.Group>
                      <Button onClick={registerHandler}  className="registerButton" variant="secondary" type="submit">
                          Register
                      </Button>
                  </Form>
              </Col>
          </Row>
          <Footer />
      </Container>
  </div>
  )
}
export default Register;
