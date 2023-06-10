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
    if (email && email.indexOf("@") > -1) {
      try {
        onValidated({
          EMAIL: email,
        });
      } catch (error) {
        console.error("Error in handleSubmit", error);
      }
    }
  }

  const clearFields = () => {
    setEmail('');
  }

  return (
      <Col lg={12}>
        <div>
          <Row>
              <form onSubmit={handleSubmit}>
                <div className="new-email-bx d-flex flex-column flex-md-row">
                  <input className=" new-email-bx mb-3 mb-md-0 mr-md-2 flex-grow-1" value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email Address" />
                  <button type="submit">Submit</button>
                </div>
              </form>
          </Row>
          <Row>
              {status === 'sending' && <Alert>Sending...</Alert>}
              {status === 'error' && <Alert variant="danger">{message}</Alert>}
              {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Row>
        </div>
      </Col>
  )
}