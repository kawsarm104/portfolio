import React, { useState, useEffect } from 'react';
import { Row, Col, Card } from "react-bootstrap"
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    fetch("./data.json")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setProjects(data)
      })
  }, [])
  return (
    <>
      <Row xs={1} sm={1} md={3} className="mx-auto my-3 g-3">
        {projects.map((project) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={project.image} />
              <Card.Body className="text-center">
                <Card.Title>{project.name}</Card.Title>
                <Card.Text className="d-flex justify-content-between ">
                  {/* {project?.requirements} */}
                  <Link to={project.liveLink} style={{textDecoration:"none"}}>Live Demo</Link>
                  <Link to={project.liveLink} style={{textDecoration:"none"}}>Github Client</Link>
                  <Link to={project.liveLink} style={{textDecoration:"none"}}>Github Server</Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </>
  );
};

export default Portfolio;