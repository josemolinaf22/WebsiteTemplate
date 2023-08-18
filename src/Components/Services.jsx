import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Services = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="service" id="services">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <div className="service-box">
                    <h2>Services We Offer</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Pariatur soluta, eum labore minima repellendus non dolor
                      enim, ex nisi laborum itaque ullam cumque at illo aliquam
                      quae voluptate beatae dolorem!
                    </p>
                    <Carousel
                      responsive={responsive}
                      infinite={true}
                      className="service-slider"
                    >
                      <div className="item">
                        <img src="" alt="service one" />
                        <h5>Service 1</h5>
                      </div>
                      <div className="item">
                        <img src="" alt="service two" />
                        <h5>Service 2</h5>
                      </div>
                      <div className="item">
                        <img src="" alt="service three" />
                        <h5>Services 3</h5>
                      </div>
                      <div className="item">
                        <img src="" alt="service four" />
                        <h5>Services 4 </h5>
                      </div>
                    </Carousel>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
