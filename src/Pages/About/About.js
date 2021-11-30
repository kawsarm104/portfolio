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
          <Col sm={12} md={6} className="" style={{ marginTop: "30px" }}>
            <h5 className="fw-bolder mt-5">ABOUT ME</h5>
            <h2 className="fw-bolder my-4">Hello, I am Md. Kawsar Hossain.</h2>
            <p className="mb-4">
              Well I am Md. Kawsar Hossain.Completed my BSc in Computer Science
              & Engineering. I love to learn new things and always excited about
              it.
            </p>
            <h4>My Skills </h4>
            <div className="mt-4">
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
