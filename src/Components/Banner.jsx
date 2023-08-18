import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import powerWash from "../Assets/powerWash.png";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["We're here to help you", "and your business"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : " "
                  }
                >
                  <span className="tagline"> {text} </span>
                  <h1>
                    {"We're here to help you "}
                    <span className="wrap">and your business</span>
                  </h1>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reprehenderit cum expedita ratione autem, nobis
                    exercitationem hic officiis commodi omnis nulla corporis
                    doloribus veritatis recusandae doloremque ipsum, eligendi
                    necessitatibus eius modi!
                  </p>
                  <button onClick={() => console.log("connected")}>
                    Contact Us <BsFillArrowRightCircleFill />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img
                    className="powerwash-image"
                    src={powerWash}
                    alt="Header img"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
