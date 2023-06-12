import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  //... all the useState and useEffect declarations go here

    
    return (
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div style={{ position: 'relative' }}>
                    
                    <Row>
                      <Col>
                        <div className="mobile-content" style={{  margin: '100px 0' }}>
                          <Row>
                          <Row>
                            <Col>
                              <div className="desktop5-group206">
                                <div className="desktop5-text04">
                                  <span className="desktop5-text05">
                                    <span>Own your first home</span>
                                    <br />
                                    <span>through </span>
                                  </span>
                                  <span className="desktop5-text09">co-ownership!</span>
                                </div>
                              </div>
                            </Col>
                          </Row>
                            <p>
                              Are you experiencing challenges in buying your own home or interested in providing services to enable people buy their own home?
                              If you are excited as we are in finding creative solutions, please join the waitlist!
                            </p>
                          </Row>
                          <Row>
                            <a href="https://mailchi.mp/e85a62322b90/join-the-waitlist" className="waitlist-btn">
                              Join the Waitlist
                            </a>
                          </Row>
                        </div>
                      </Col>
                    </Row>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} sm={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div>
                    <img src={headerImg} alt="Header Img" style={{ borderRadius: "25px" }}/>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }

