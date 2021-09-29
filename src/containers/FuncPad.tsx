import React from "react";
//import PropTypes from 'prop-types'
import { connect, ConnectedProps } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import { KeyCap } from "../components/KeyCap";
import { keyPressFunc } from "../redux/actions";
import { AppState } from "../redux";
import { AnyAction, Dispatch } from "redux";

export const FuncPad: React.FC<Props> = (props: Props) => {
  return (
    <Col className="FuncPadCol" line-height={1.5} xs={4.5}>
      <Container fluid>
        <Row>
          <div className="FuncKeySpace">
            <KeyCap
              id={"SIN"}
              type={"button"}
              name={"SIN"}
              caption={"SIN"}
              onClick={props.keyPressFunc}
            />
          </div>
          <div className="FuncKeySpace">
            <KeyCap
              id={"COS"}
              type={"button"}
              name={"COS"}
              caption={"COS"}
              onClick={props.keyPressFunc}
            />
          </div>
          <div className="FuncKeySpace">
            <KeyCap
              id={"TAN"}
              type={"button"}
              name={"TAN"}
              caption={"TAN"}
              onClick={props.keyPressFunc}
            />
          </div>
        </Row>
        <Row>
          <div className="FuncKeySpace">
            <KeyCap
              id={"LOG"}
              type={"button"}
              name={"LOG"}
              caption={"LOG"}
              onClick={props.keyPressFunc}
            />
          </div>
          <div className="FuncKeySpace">
            <KeyCap
              id={"LN"}
              type={"button"}
              name={"LN"}
              caption={"LN"}
              onClick={props.keyPressFunc}
            />
          </div>
          <div className="FuncKeySpace">
            <KeyCap
              id={"X*"}
              type={"button"}
              name={"X*"}
              caption={"X*"}
              onClick={props.keyPressFunc}
            />
          </div>
        </Row>
        <Row>
          <div className="FuncKeySpace">
            <KeyCap
              id={"EXP"}
              type={"button"}
              name={"EXP"}
              caption={"EXP"}
              onClick={props.keyPressFunc}
            />
          </div>
          <div className="FuncKeySpace">
            <KeyCap
              id={"PI"}
              type={"button"}
              name={"PI"}
              caption={"PI"}
              onClick={props.keyPressFunc}
            />
          </div>
          <div className="FuncKeySpace">
            <KeyCap
              id={"e"}
              type={"button"}
              name={"e"}
              caption={"e"}
              onClick={props.keyPressFunc}
            />
          </div>
        </Row>
        <Row>
          <div className="FuncKeySpace">
            <KeyCap
              id={"FC1"}
              type={"button"}
              name={"FC1"}
              caption={""}
              onClick={props.keyPressFunc}
            />
          </div>
          <div className="FuncKeySpace">
            <KeyCap
              id={"FC2"}
              type={"button"}
              name={"FC2"}
              caption={""}
              onClick={props.keyPressFunc}
            />
          </div>
          <div className="FuncKeySpace">
            <KeyCap
              id={"FC3"}
              type={"button"}
              name={"FC3"}
              caption={""}
              onClick={props.keyPressFunc}
            />
          </div>
        </Row>
      </Container>
    </Col>
  );
};
/* 
FuncPad.propTypes = {
  props: propTypes,
};
 */

interface StateProps {}

interface DispatchProps {
  keyPressFunc: (funcName: string) => AnyAction;
}

const mapStateToProps = (state: AppState): StateProps => ({});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): DispatchProps => {
  return {
    keyPressFunc: (funcName: string) => dispatch(keyPressFunc(funcName)),
  };
  /*   
  return bindActionCreators(
    { keyPressFunc: (funcName: string) => keyPressFunc(funcName) },
    dispatch
  );
 */
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
interface Props extends PropsFromRedux {}
//interface Props extends StateProps, DispatchProps {}

export default connector(FuncPad);
