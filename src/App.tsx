import React from 'react';
import logo from './logo.svg';
import './App.css';
import { APP_TITLE } from './config.js';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'

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

function App() {
  return (
      <Container fluid>
        <Row>
          <Col className="App-header"><img src={logo} className="App-logo" alt="logo" />{APP_TITLE}</Col>
        </Row>
        <Row>
          <Col/>
        </Row>
        <Row><Col xs={2} /><Col className="Lcd-body">0123456789.00</Col><Col xs={2} /></Row>
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
