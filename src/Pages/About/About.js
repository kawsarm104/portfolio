import React from "react";
import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import image from "../../image/personal/personalimageforhomewhite.png";
import Skill from "../Skill/Skill";

const About = () => {
  const html = 100;
  const css = 75;
  const js = 70;
  const react = 70;
  return (
    <div
      className=""
      style={{ bacgroundColor: "#ffffff", overflowX: "hidden" }}
    >
      <Container className="mt-3">
        <Row className="">
          <Col sm={12} md={6} className="">
            <img
              src={image}
              className="img-fluid"
              style={{ marginTop: "" }}
              alt=""
            />
          </Col>
          <Col
            sm={12}
            md={6}
            className=""
            style={{ marginTop: "30px" }}
          >
            <h5 className="fw-bolder mt-5">ABOUT ME</h5>
            <h2 className="fw-bolder my-4">Hello, I am Md. Kawsar Hossain.</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim enim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="my-4">
              HTML
              <ProgressBar now={html} label={`${html}%`} />
              CSS
              <ProgressBar now={css} label={`${css}%`} />
              JavaScript
              <ProgressBar now={js} label={`${js}%`} />
              React
              <ProgressBar now={react} label={`${react}%`} />
            </div>
            <Skill></Skill>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
