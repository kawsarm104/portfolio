import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Typical from "react-typical";
import image from "../../image/personal/personalimageforhome.png";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <Container fluid className="homepage">
        <Row className="mx-5">
          <Col sm={12} md={7} className="position-parent">
            <div className=" position-child ">
              <h1 className="">Md. Kawsar Hossain</h1>

              <h1>
                I am a
                <Typical
                  steps={[
                    " React Js Developer",
                    1000,
                    " Front-End Developer",
                    1000,
                  ]}
                  loop={Infinity}
                  wrapper="b"
                />
              </h1>
            </div>
          </Col>
          <Col sm={12} md={5} className="">
            <img src={image} className="img-fluid" alt="" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
