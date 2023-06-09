import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import { MailchimpForm } from './MailchimpForm';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  //... all the useState and useEffect declarations go here

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <>
                  <div style={{ position: 'relative' }}>
                    <div className="desktop5-group206">
                      <span className="desktop5-text04">
                        <span className="desktop5-text05">
                          <span>Co-ownership</span>
                          <br />
                          <span>for </span>
                        </span>
                        <span className="desktop5-text09">everybody!</span>
                      </span>
                      <img
                        alt="Vector3136"
                        src={require("../assets/img/vector3136-leq.svg")}
                        className="desktop5-vector"
                      />
                    </div>
                  </div>
                  <div>
                    <p>
                      Are you experiencing challenges in buying your own home or interested in providing services to enable people buy their own home?
                      If you are excited as we are in finding creative solutions, please join the waitlist!
                    </p>
                    <MailchimpForm />
                  </div>
                </>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" style={{ borderRadius: "25px" }}/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
