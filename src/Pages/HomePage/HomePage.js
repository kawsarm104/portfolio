import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Typical from "react-typical";
import image from "../../image/personal/kimsoohyun.jpg";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <Container fluid className="homepage">
        <Row className="mx-5">
          <Col sm={12} md={7} className="position-parent">
            <div className=" position-child text-center bg-primary">
              <h1 className="">Md. Kawsar Hossain</h1>
              <h2>Front-End Developer</h2>
              <div className="inline-class bg-warning">
                <h3>I am a </h3>
                <Typical
                  steps={[
                    "React Js Developer",
                    1000,
                    "Front-End Developer",
                    500,
                  ]}
                  loop={Infinity}
                  wrapper="h2"
                />
              </div>
            </div>
          </Col>
          <Col sm={12} md={5} className="p-3 mt-4">
            <img src={image} className="img-fluid" alt="" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
