import { useState, useEffect } from "react";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../Img/kaiju2.jpg";

export default function Bann() {
   
  const rotateSkills = ["Web developer", "Programmer", "Student"];
  

  return (
    
    <section className="banner" id="home">
      <Container className="banner-container">
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline"></span>
            <h1>
              {`Hi i am Vaibhav `}
              <span className="wrap">Full Stack Developer</span>
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img className="headerImg" src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
