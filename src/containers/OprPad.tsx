import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { AppState } from '../redux'
import { keyPressAc, keyPressAns, keyPressDel, keyPressOpr } from '../redux/actions'
import { Row, Col, Container } from 'react-bootstrap'
import { KeyCap } from '../components/KeyCap'

interface Props extends PropsFromRedux {

}

export const OprPad: React.FC<Props> = (props: Props) => {
  return (
    <Col className="OperatorPadCol" line-height={1.5} xs={2.5}>
    <Container fluid>
      <Row>
        <div className="OperKeySpace">
          <KeyCap id={"/"} type={"Button"} name={"/"} caption={"/"} action={() => keyPressOpr('/')}/>
        </div>
        <div className="OperKeySpace">
        <KeyCap id={"AC"} type={"Button"} name={"AC"} caption={"AC"} action={() => keyPressAc()}/>
        </div>
      </Row>
      <Row>
        <div className="OperKeySpace">
          <KeyCap id={"*"} type={"Button"} name={"*"} caption={"x"} action={() => keyPressOpr('*')}/>
        </div>
        <div className="OperKeySpace">
        <KeyCap id={"DEL"} type={"Button"} name={"DEL"} caption={"C"} action={() => keyPressDel()}/>
        </div>
      </Row>
      <Row>
        <div className="OperKeySpace">
          <KeyCap id={"-"} type={"Button"} name={"-"} caption={"-"} action={() => keyPressOpr('-')}/>
        </div>
        <div className="OperKeySpace">
        <KeyCap id={"M"} type={"Button"} name={"M"} caption={"M"} action={() => keyPressOpr('M')}/>
        </div>
      </Row>
      <Row>
        <div className="OperKeySpace">
          <KeyCap id={"+"} type={"Button"} name={"+"} caption={"+"} action={() => keyPressOpr('+')}/>
        </div>
        <div className="OperKeySpace">
        <KeyCap id={"="} type={"Button"} name={"="} caption={"="} action={() => keyPressAns()}/>
        </div>
      </Row>
    </Container>
  </Col>
  )
}


const mapStateToProps = (state: AppState) => ({
  
})

const mapDispatchToProps = {

}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(OprPad)
