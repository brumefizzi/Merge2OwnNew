import React from 'react';
import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";


export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div>
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Join the waitlist<br></br> & never miss latest updates</h3>
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx d-flex flex-column flex-md-row">
                  <input className=" new-email-bx mb-3 mb-md-0 mr-md-2 flex-grow-1" value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email Address" />
                  <button type="submit">Submit</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}