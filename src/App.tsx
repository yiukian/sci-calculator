import React from "react";
import "./App.css";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { LcdPanel, NumPad, OprPad, FuncPad } from "./containers";
import { LogoTitle } from "./components";

/**
 * @returns html elements
 */

function App() {
  return (
    <Container fluid>
      <Row>
        <Col className="AppHeaderSpace" xs={12}>
          <LogoTitle />
        </Col>
      </Row>
      <Row></Row>

      <Row>
        <Col className="LcdSpace" xs={12}>
          <LcdPanel />
        </Col>
      </Row>

      <Row>
        <Col className="FuncPadCol" xs={5}>
          <FuncPad />
        </Col>
        <Col className="NumPadCol" xs={4}>
          <NumPad />
        </Col>
        <Col className="OperPadCol" xs={3}>
          <OprPad />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
