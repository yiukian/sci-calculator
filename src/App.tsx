import React from "react";
import "./App.css";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { CLcdPanel, HNumPad, HOprPad, HFuncPad } from "./containers";
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
          <CLcdPanel />
        </Col>
      </Row>

      <Row>
        <Col className="FuncPadCol" xs={5}>
          <HFuncPad />
        </Col>
        <Col className="NumPadCol" xs={4}>
          <HNumPad />
        </Col>
        <Col className="OperPadCol" xs={3}>
          <HOprPad />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
