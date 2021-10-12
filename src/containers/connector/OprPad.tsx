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
    onClickHandle: (keyIn: string) => dispatch(keyPressOpr(keyIn)),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {}

const OprPad: React.FC<Props> = (props: Props) => {
  const { onClickHandle } = props;

  return (
    <Container fluid="md">
      <Row>
        <Col className="OperKeySpace">
          <KeyCap
            id={"/"}
            type={"Button"}
            name={"/"}
            caption={"/"}
            onClick={onClickHandle}
          />
        </Col>
        <Col className="OperKeySpace">
          <KeyCap
            id={"AC"}
            type={"Button"}
            name={"AC"}
            caption={"AC"}
            onClick={onClickHandle}
          />
        </Col>
      </Row>
      <Row>
        <Col className="OperKeySpace">
          <KeyCap
            id={"*"}
            type={"Button"}
            name={"*"}
            caption={"x"}
            onClick={onClickHandle}
          />
        </Col>
        <Col className="OperKeySpace">
          <KeyCap
            id={"DEL"}
            type={"Button"}
            name={"DEL"}
            caption={"C"}
            onClick={onClickHandle}
          />
        </Col>
      </Row>
      <Row>
        <Col className="OperKeySpace">
          <KeyCap
            id={"-"}
            type={"Button"}
            name={"-"}
            caption={"-"}
            onClick={onClickHandle}
          />
        </Col>
        <Col className="OperKeySpace">
          <KeyCap
            id={"M"}
            type={"Button"}
            name={"M"}
            caption={"M"}
            onClick={onClickHandle}
          />
        </Col>
      </Row>
      <Row>
        <Col className="OperKeySpace">
          <KeyCap
            id={"+"}
            type={"Button"}
            name={"+"}
            caption={"+"}
            onClick={onClickHandle}
          />
        </Col>
        <Col className="OperKeySpace">
          <KeyCap
            id={"="}
            type={"Button"}
            name={"="}
            caption={"="}
            onClick={onClickHandle}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default connector(OprPad);
