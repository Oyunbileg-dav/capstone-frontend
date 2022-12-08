import React from "react";
import { Col, Row } from "react-bootstrap";
import Navbar from "./Navbar";
import Register from "./Register";

export default function SignUpPage() {
  return (
    <Row>
    <Navbar/>
      <Col>
      </Col>
      {/* Register */}
      <Col xs={12} sm={12} md={6} lg={6}>
        <Register />
      </Col>
      <Col>
      </Col>
    </Row>
  );
}