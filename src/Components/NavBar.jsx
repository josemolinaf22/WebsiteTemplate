import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BiLogoFacebookSquare, BiSolidHomeAlt2 } from "react-icons/bi";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { AiFillProject, AiFillPhone } from "react-icons/ai";
import { ImInstagram } from "react-icons/im";
// import NavDropdown from "react-bootstrap/NavDropdown";

export const NavBar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else setScrolled(false);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActive = (value) => {
    setActive(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src="" alt="LOGO" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                active === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActive("home")}
            >
              <BiSolidHomeAlt2 />
              <br />
              Home
            </Nav.Link>
            <Nav.Link
              href="#services"
              className={
                active === "services" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActive("services")}
            >
              <BsFillPersonVcardFill />
              <br />
              Services
            </Nav.Link>
            <Nav.Link
              href="#jobs"
              className={
                active === "jobs" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActive("Jobs")}
            >
              <AiFillProject />
              <br />
              Previous Jobs
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
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
            <button className="vvd" onClick={() => console.log("conect")}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
