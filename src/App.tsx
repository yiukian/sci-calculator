import React from "react";
import logo from "./logo.svg";
import "./App.css";
//import 'bootstrap/dist/css/bootstrap.min.css';
import { APP_TITLE } from "./config.js";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import LcdPanel from "./containers/LcdPanel";
import NumPad from "./containers/NumPad";
//import { KeyCap } from './components/KeyCap';
//import { keyPressAc, keyPressDel, keyPressNum, keyPressOpr, keyPressAns, keyPressFunc } from './redux/actions';
import OprPad from "./containers/OprPad";
import FuncPad from "./containers/FuncPad";

/**
 * Note: "<Col className="FuncPadCol" line-height={1.5} xs={4.5}>"
 *       "xs={4.5}" make the colume position become fixed (not relative) so the width is fixed!!
 * @returns html elements
 */

function App() {
  return (
    <Container fluid>
      <Row>
        <Col className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {APP_TITLE}
        </Col>
      </Row>
      <Row></Row>
      <LcdPanel />
      <Row>
        <Col className="Test-Col1" xs={1} />
        <FuncPad></FuncPad>
        <NumPad></NumPad>
        <OprPad></OprPad>
        <Col className="Test-Col1" xs={1} />
      </Row>
    </Container>
  );
}

export default App;
