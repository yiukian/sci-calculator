import React from 'react';
import logo from './logo.svg';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { APP_TITLE } from './config.js';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import { KeyCap } from './components/KeyCap';

/*
function App() {
  return (
    <Container>
  <Row className="justify-content-md-center">
    <Col xs lg="2">
      1 of 3
    </Col>
    <Col md="auto">Variable width content</Col>
    <Col xs lg="2">
      3 of 3
    </Col>
  </Row>
  <Row>
    <Col>a of c</Col>
    <Col md="auto">Variable width content</Col>
    <Col xs lg="2">
      c of c
    </Col>
  </Row>
</Container>

  )
}
*/


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
      <Row>
        <Col xs={1} />
        <Col xs={10.5} className="LcdSpace">
          <div className="LcdBody">0123456789.00</div>
        </Col>
        <Col xs={1} />
      </Row>
      <Row>
        <Col className="Test-Col1" xs={1} />
        <Col className="FuncPadCol" line-height={1.5} xs={4.5}>
          <Container fluid>
            <Row>
              <div className="FuncKeySpace">
                <KeyCap id={"SIN"} type={"Button"} name={"SIN"} caption={"SIN"} />
              </div>
              <div className="FuncKeySpace">
                <KeyCap id={"COS"} type={"Button"} name={"COS"} caption={"COS"} />
              </div>
              <div className="FuncKeySpace">
                <KeyCap id={"TAN"} type={"Button"} name={"TAN"} caption={"TAN"} />
              </div>
            </Row>
            <Row>
              <div className="FuncKeySpace">
                <KeyCap id={"LOG"} type={"Button"} name={"LOG"} caption={"LOG"} />
              </div>
              <div className="FuncKeySpace">
                <KeyCap id={"LN"} type={"Button"} name={"LN"} caption={"LN"} />
              </div>
              <div className="FuncKeySpace">
                <KeyCap id={"X*"} type={"Button"} name={"X*"} caption={"X*"} />
              </div>
            </Row>
            <Row>
              <div className="FuncKeySpace">
                <KeyCap id={"EXP"} type={"Button"} name={"EXP"} caption={"EXP"} />
              </div>
              <div className="FuncKeySpace">
                <KeyCap id={"PI"} type={"Button"} name={"PI"} caption={"PI"} />
              </div>
              <div className="FuncKeySpace">
                <KeyCap id={"e"} type={"Button"} name={"e"} caption={"e"} />
              </div>
            </Row>
            <Row>
              <div className="FuncKeySpace">
                <KeyCap id={"FC1"} type={"Button"} name={""} caption={""} />
              </div>
              <div className="FuncKeySpace">
                <KeyCap id={"FC2"} type={"Button"} name={""} caption={""} />
              </div>
              <div className="FuncKeySpace">
                <KeyCap id={"FC3"} type={"Button"} name={""} caption={""} />
              </div>
            </Row>
          </Container>
        </Col>
        <Col className="NumPadCol" line-height={1.5} xs={3.5}>
          <Container fluid>
            <Row>
              <div className="NumKeySpace">
                <KeyCap id={"7"} type={"Button"} name={"7"} caption={"7"} />
              </div>
              <div className="NumKeySpace">
                <KeyCap id={"8"} type={"Button"} name={"8"} caption={"8"} />
              </div>
              <div className="NumKeySpace">
                <KeyCap id={"9"} type={"Button"} name={"9"} caption={"9"} />
              </div>
            </Row>
            <Row>
              <div className="NumKeySpace">
                <KeyCap id={"4"} type={"Button"} name={"4"} caption={"4"} />
              </div>
              <div className="NumKeySpace">
                <KeyCap id={"5"} type={"Button"} name={"5"} caption={"5"} />
              </div>
              <div className="NumKeySpace">
                <KeyCap id={"6"} type={"Button"} name={"6"} caption={"6"} />
              </div>
            </Row>
            <Row>
              <div className="NumKeySpace">
                <KeyCap id={"1"} type={"Button"} name={"1"} caption={"1"} />
              </div>
              <div className="NumKeySpace">
                <KeyCap id={"2"} type={"Button"} name={"2"} caption={"2"} />
              </div>
              <div className="NumKeySpace">
                <KeyCap id={"3"} type={"Button"} name={"3"} caption={"3"} />
              </div>
            </Row>
            <Row>
              <div className="NumKeySpace">
                <KeyCap id={"+-"} type={"Button"} name={"+-"} caption={"+/-"} />
              </div>
              <div className="NumKeySpace">
                <KeyCap id={"0"} type={"Button"} name={"0"} caption={"0"} />
              </div>
              <div className="NumKeySpace">
                <KeyCap id={"."} type={"Button"} name={"."} caption={"."} />
              </div>
            </Row>
          </Container>
        </Col>
        <Col className="OperatorPadCol" line-height={1.5} xs={2.5}>
          <Container fluid>
            <Row>
              <div className="OperKeySpace">
                <KeyCap id={"/"} type={"Button"} name={"/"} caption={"/"} />
              </div>
              <div className="OperKeySpace">
              <KeyCap id={"AC"} type={"Button"} name={"AC"} caption={"AC"} />
              </div>
            </Row>
            <Row>
              <div className="OperKeySpace">
                <KeyCap id={"*"} type={"Button"} name={"*"} caption={"x"} />
              </div>
              <div className="OperKeySpace">
              <KeyCap id={"DEL"} type={"Button"} name={"DEL"} caption={"C"} />
              </div>
            </Row>
            <Row>
              <div className="OperKeySpace">
                <KeyCap id={"-"} type={"Button"} name={"-"} caption={"-"} />
              </div>
              <div className="OperKeySpace">
              <KeyCap id={"M"} type={"Button"} name={"M"} caption={"M"} />
              </div>
            </Row>
            <Row>
              <div className="OperKeySpace">
                <KeyCap id={"+"} type={"Button"} name={"+"} caption={"+"} />
              </div>
              <div className="OperKeySpace">
              <KeyCap id={"="} type={"Button"} name={"="} caption={"="} />
              </div>
            </Row>
          </Container>
        </Col>
        <Col className="Test-Col1" xs={1} />
      </Row>
    </Container>
  );
}


/*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span>{APP_TITLE}</span>
      </header>
      <div className="Calculator">
        <table width="500px">
          <tbody>
            <tr>
              <td colSpan={0}>
                <div className="Lcd-body">0123456789.00</div>
              </td>
            </tr>
            <tr className="Keypad">
              <td>
                {/* keypad 1  }
              </td>
              <td>
                {/* keypad 2  }
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
*/

export default App;
