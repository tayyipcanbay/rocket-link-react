import React from "react";
import {Container, Row, Col,Form,Button} from "react-bootstrap";
import '../style/login.css';
import Footer from "../components/footer";


function Login() {
    const loginHandler=()=>{

    }
  return (
    <div style={{
        width: "100%",
        height: "100vh",
        backgroundColor:"#9F8772"

    }}>
         <Container className="main">
            <Row className=" loginContainer" >
                <Col >
                    <h1 className="margin">Login</h1><hr></hr>
                    <Form >
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control className="input" type="text" placeholder="Username" />
                            <Form.Text className="text-muted">
                            We'll never share your information with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="margin formBasicPassword">
                            <Form.Control className="input" type="password" placeholder="Password" />
                        </Form.Group>
                        <Button onClick={loginHandler} className="loginButton" variant="secondary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Footer />
        </Container>
    </div>
    );
}

export default Login;
