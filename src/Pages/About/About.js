import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../../image/personal/personalimage.jpg";

const About = () => {
  return (
    <div className="" style={{ bacgroundColor: "#ffffff" }}>
      <Container className="mt-3 mx-auto p-auto">
        <Row className="">
          <Col sm={12} md={5}>
            <img src={image} className="img-fluid" alt="" />
          </Col>
          <Col sm={12} md={7}>
            <h5 className="fw-bolder">ABOUT ME</h5>
            <h2 className="fw-bolder my-4">Hello, I am Md. Kawsar Hossain.</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim enim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <Row className="my-3">
              <Col sm={12} md={6}>
                <h6>Web Design</h6>
                <h6>Web Design</h6>
                <h6>Web Design</h6>
              </Col>
              <Col sm={12} md={6}>
                <h6>Mobile Apps</h6>
                <h6>Mobile Apps</h6>
                <h6>Mobile Apps</h6>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
