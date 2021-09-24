import React from 'react'
//import PropTypes from 'prop-types'
import { connect, ConnectedProps } from 'react-redux'
import { Row, Col, Container } from 'react-bootstrap'
import { KeyCap } from '../components/KeyCap'
import { keyPressFunc } from '../redux/actions'
import { AppState } from '../redux'

interface Props extends PropsFromRedux {

}

export const FuncPad: React.FC<Props> = (props: Props) => {
  return (
    <Col className="FuncPadCol" line-height={1.5} xs={4.5}>
    <Container fluid>
      <Row>
        <div className="FuncKeySpace">
          <KeyCap id={"SIN"} type={"Button"} name={"SIN"} caption={"SIN"} action={() => keyPressFunc('SIN')}/>
        </div>
        <div className="FuncKeySpace">
          <KeyCap id={"COS"} type={"Button"} name={"COS"} caption={"COS"} action={() => keyPressFunc('COS')}/>
        </div>
        <div className="FuncKeySpace">
          <KeyCap id={"TAN"} type={"Button"} name={"TAN"} caption={"TAN"} action={() => keyPressFunc('TAN')}/>
        </div>
      </Row>
      <Row>
        <div className="FuncKeySpace">
          <KeyCap id={"LOG"} type={"Button"} name={"LOG"} caption={"LOG"} action={() => keyPressFunc('LOG')}/>
        </div>
        <div className="FuncKeySpace">
          <KeyCap id={"LN"} type={"Button"} name={"LN"} caption={"LN"} action={() => keyPressFunc('LN')}/>
        </div>
        <div className="FuncKeySpace">
          <KeyCap id={"X*"} type={"Button"} name={"X*"} caption={"X*"} action={() => keyPressFunc('XY')}/>
        </div>
      </Row>
      <Row>
        <div className="FuncKeySpace">
          <KeyCap id={"EXP"} type={"Button"} name={"EXP"} caption={"EXP"} action={() => keyPressFunc('EXP')}/>
        </div>
        <div className="FuncKeySpace">
          <KeyCap id={"PI"} type={"Button"} name={"PI"} caption={"PI"} action={() => keyPressFunc('PI')}/>
        </div>
        <div className="FuncKeySpace">
          <KeyCap id={"e"} type={"Button"} name={"e"} caption={"e"} action={() => keyPressFunc('e')}/>
        </div>
      </Row>
      <Row>
        <div className="FuncKeySpace">
          <KeyCap id={"FC1"} type={"Button"} name={""} caption={""} action={() => keyPressFunc('')}/>
        </div>
        <div className="FuncKeySpace">
          <KeyCap id={"FC2"} type={"Button"} name={""} caption={""} action={() => keyPressFunc('')}/>
        </div>
        <div className="FuncKeySpace">
          <KeyCap id={"FC3"} type={"Button"} name={""} caption={""} action={() => keyPressFunc('')}/>
        </div>
      </Row>
    </Container>
  </Col>
  )
}

/* FuncPad.propTypes = {
  props: PropTypes
} */

const mapStateToProps = (state: AppState) => ({
  
})

const mapDispatchToProps = {
  
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(FuncPad)
