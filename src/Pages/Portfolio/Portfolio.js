import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import a8 from "../../image/portfolio/screenshot-awesome-wozniak-716a19.netlify.app-2021.11.30-17_18_12.png";
import a9 from "../../image/portfolio/screenshot-brave-mcnulty-9635a1.netlify.app-2021.11.30-17_19_27.png";
import ebike from "../../image/portfolio/screenshot-e-bike-client.web.app-2021.11.30-16_50_36.png";
import kfood from "../../image/portfolio/screenshot-k-food-a0ea3.web.app-2021.11.30-16_51_06.png";
import medicenter from "../../image/portfolio/screenshot-medicenter-dentist.firebaseapp.com-2021.11.30-16_51_42.png";
import a7 from "../../image/portfolio/screenshot-serene-raman-b80cc4.netlify.app-2021.11.30-17_20_35.png";

const Portfolio = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center text-warning mb-5">Portfolio</h1>
      <Row sm={12} md={3} className="g-4">
        <Col border="dark" sm={12}>
          <Card>
            <Card.Img
              variant="top"
              style={{ width: "100%", height: "300px" }}
              src={ebike}
            />
          </Card>
        </Col>
        <Col border="dark" sm={12}>
          <Card>
            <Card.Img
              variant="top"
              style={{ width: "100%", height: "300px" }}
              src={kfood}
            />
          </Card>
        </Col>
        <Col border="dark" sm={12}>
          <Card>
            <Card.Img
              variant="top"
              style={{ width: "100%", height: "300px" }}
              src={medicenter}
            />
          </Card>
        </Col>
        <Col border="dark" sm={12}>
          <Card>
            <Card.Img
              variant="top"
              style={{ width: "100%", height: "300px" }}
              src={a7}
            />
          </Card>
        </Col>
        <Col border="dark" sm={12}>
          <Card>
            <Card.Img
              variant="top"
              style={{ width: "100%", height: "300px" }}
              src={a8}
            />
          </Card>
        </Col>
        <Col border="dark" sm={12}>
          <Card>
            <Card.Img
              variant="top"
              style={{ width: "100%", height: "300px" }}
              src={a9}
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Portfolio;
