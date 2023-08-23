import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ImInstagram } from "react-icons/im";
import { AiFillPhone } from "react-icons/ai";
import { BiLogoFacebookSquare } from "react-icons/bi";
export const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src="" alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#facebook">
                <BiLogoFacebookSquare className="social-icons" />
              </a>
              <a href="#instagram">
                <ImInstagram className="social-icons" />
              </a>
              <a href="#phone">
                <AiFillPhone className="social-icons" />
              </a>
            </div>
            <p>Copyright© {year}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
