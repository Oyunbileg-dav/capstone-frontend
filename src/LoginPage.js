import React from "react";
import { Col, Row } from "react-bootstrap";
import Login from "./Login";
import Navbar from "./Navbar";

export default function LoginPage() {
  return (
    <Row>
    <Navbar/>
      <Col>
      </Col>
      {/* Login */}
      <Col xs={12} sm={12} md={6} lg={6}>
        <Login />
      </Col>
      <Col>
      </Col>
    </Row>
  );
}