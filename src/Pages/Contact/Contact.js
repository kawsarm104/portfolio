import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import image from "../../image/personal/personalimageforhomewhite.png";
import "./Contact.css";

const Contact = () => {
  return (
    <Container className="">
      <Row className="">
        <Col sm={12} md={6} className="">
          <img src={image} className="img-fluid p-5 " style={{marginTop:"-40px"}} alt="" />
        </Col>
        <Col sm={12} md={6}style={{marginTop:"40px"}}>
          <h5 className="fw-bolder mt-3 text-warning">CONTACT ME</h5>
          <h1 className="fw-bolder my-4">Get in touch with me today.</h1>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label> Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Name"
                className="border border-dark rounded"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                className="border border-dark rounded"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                className="border border-dark rounded"
                rows={5}
              />
            </Form.Group>
            <Button variant="warning">Send Message</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
