import React from "react";
import Footer from '../components/footer';
import {Container, Row, Col,Card} from "react-bootstrap";
import Navbar from '../components/navbar';
import "../style/user.css";

function User() {
  return (
    <div style={{backgroundColor:"aquamarine"}}>
      <Navbar />
      <Container>
        <Row className="firstRow">
          <Col className="leftCol" xs={4}>
            <div className="photoDiv">
              <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" className="avatar"/>
            </div>
          </Col>
          <Col className="rightCol" xs={8}>
            Tayyip Canbay
            <div className="divider">
            </div>
            <p className="info">
              Username: 
            </p>
            <p className="info">
              Views: 
            </p>
          </Col>
        </Row>
        <Row className="secondRow">
          <Col className="linkBox">
            <Card>
                <Card.Body>
                    <a style={{width:"30%", color:"black important!"}} href="https://www.instagram.com/tayyipcanbay">instagram</a>
                </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}
export default User;
