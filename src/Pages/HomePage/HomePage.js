import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <Container fluid className="homepage">
        <Row className="mx-5">
          <Col sm={12} md={7} className="">
            <div className=" position-class text-center">
              <h1 className="">Md. Kawsar Hossain</h1>
              <h2>Front-End Developer</h2>
            </div>
          </Col>
          <Col sm={12} md={5} className="bg-info">
            fdskkldskdsklklkfsklkl
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
