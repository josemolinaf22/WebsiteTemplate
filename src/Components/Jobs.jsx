import React from "react";
import { ProjectCard } from "./ProjectCard";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Jobs = () => {
  const projects = [
    {
      title: "Pavement Cleaning",
      description: "Left Clean enough to eat off of",
      imgUrl: "",
    },
    {
      title: "Trailer Cleaning",
      description: "Left Clean enough to eat off of",
      imgUrl: "",
    },
    {
      title: "House cleaning",
      description: "Left Clean enough to eat off of",
      imgUrl: "",
    },
    {
      title: "Sidewalk Cleaning",
      description: "Left Clean enough to eat off of",
      imgUrl: "",
    },
    {
      title: "Car Cleaning",
      description: "Left Clean enough to eat off of",
      imgUrl: "",
    },
    {
      title: "Carpet Cleaning",
      description: "Left Clean enough to eat off of",
      imgUrl: "",
    },
  ];

  return (
    <section className="project" id="jobs">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Previous Jobs</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Modi iure labore quis reprehenderit aut nostrum voluptatum
                    sunt placeat nisi! Ea maiores delectus beatae non sit
                    praesentium nemo amet eos velit.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Architecto odit doloremque dolorem pariatur nihil quas
                        deserunt aut? Dolorem adipisci cupiditate quibusdam
                        doloribus corrupti, maiores eligendi, impedit labore et
                        quisquam voluptatum!{" "}
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Itaque illo id explicabo nulla minus hic quidem,
                        velit quod eos eaque omnis laborum quisquam, enim sit
                        minima dignissimos quae dolor deserunt.
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img src="" alt="" />
    </section>
  );
};
