import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { AppState } from "../../redux";
import { keyPressOpr } from "../../redux/actions";
import { Row, Col, Container } from "react-bootstrap";
import { KeyCap } from "../../components/KeyCap";
import { AnyAction, Dispatch } from "redux";

const mapStateToProps = (state: AppState) => ({});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    keyPressOpr: (keyIn: string) => dispatch(keyPressOpr(keyIn)),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {}

const OprPad: React.FC<Props> = (props: Props) => {
  return (
    <Col className="OperatorPadCol" line-height={1.5} xs={2.5}>
      <Container fluid>
        <Row>
          <div className="OperKeySpace">
            <KeyCap
              id={"/"}
              type={"Button"}
              name={"/"}
              caption={"/"}
              onClick={props.keyPressOpr}
            />
          </div>
          <div className="OperKeySpace">
            <KeyCap
              id={"AC"}
              type={"Button"}
              name={"AC"}
              caption={"AC"}
              onClick={props.keyPressOpr}
            />
          </div>
        </Row>
        <Row>
          <div className="OperKeySpace">
            <KeyCap
              id={"*"}
              type={"Button"}
              name={"*"}
              caption={"x"}
              onClick={props.keyPressOpr}
            />
          </div>
          <div className="OperKeySpace">
            <KeyCap
              id={"DEL"}
              type={"Button"}
              name={"DEL"}
              caption={"C"}
              onClick={props.keyPressOpr}
            />
          </div>
        </Row>
        <Row>
          <div className="OperKeySpace">
            <KeyCap
              id={"-"}
              type={"Button"}
              name={"-"}
              caption={"-"}
              onClick={props.keyPressOpr}
            />
          </div>
          <div className="OperKeySpace">
            <KeyCap
              id={"M"}
              type={"Button"}
              name={"M"}
              caption={"M"}
              onClick={props.keyPressOpr}
            />
          </div>
        </Row>
        <Row>
          <div className="OperKeySpace">
            <KeyCap
              id={"+"}
              type={"Button"}
              name={"+"}
              caption={"+"}
              onClick={props.keyPressOpr}
            />
          </div>
          <div className="OperKeySpace">
            <KeyCap
              id={"="}
              type={"Button"}
              name={"="}
              caption={"="}
              onClick={props.keyPressOpr}
            />
          </div>
        </Row>
      </Container>
    </Col>
  );
};

export default connector(OprPad);
