import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";

import { MdCleaningServices } from "react-icons/md";
import { TbWash, TbWashTemperature6, TbWashGentle } from "react-icons/tb";

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
                    isVisible ? "animate__animated animate__fadeIn" : "hidden"
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
                        <MdCleaningServices size="small" />
                        <br /> <br />
                        <h5>Service 1</h5>
                      </div>
                      <div className="item">
                        <TbWash size="small" />
                        <br /> <br />
                        <h5>Service 2</h5>
                      </div>
                      <div className="item">
                        <TbWashGentle size="small" />
                        <br /> <br />
                        <h5>Services 3</h5>
                      </div>
                      <div className="item">
                        <TbWashTemperature6 size="small" />
                        <br /> <br />
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
