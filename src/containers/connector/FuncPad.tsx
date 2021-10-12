import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { Row, Col, Container } from "react-bootstrap";
import { KeyCap } from "../../components/KeyCap";
import { keyPressFunc } from "../../redux/actions";
import { AppState } from "../../redux";
import { AnyAction, Dispatch } from "redux";

interface StateProps {}
interface DispatchProps {
  onClickHandle: (funcName: string) => AnyAction;
}

const mapStateToProps = (state: AppState): StateProps => ({});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): DispatchProps => {
  return {
    onClickHandle: (funcName: string) => dispatch(keyPressFunc(funcName)),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {}

const FuncPad: React.FC<Props> = (props: Props) => {
  const { onClickHandle } = props;

  return (
    <Container fluid>
      <Row>
        <Col className="FuncKeySpace">
          <KeyCap
            id={"SIN"}
            type={"button"}
            name={"SIN"}
            caption={"sin"}
            onClick={onClickHandle}
          />
        </Col>
        <Col className="FuncKeySpace">
          <KeyCap
            id={"COS"}
            type={"button"}
            name={"COS"}
            caption={"cos"}
            onClick={onClickHandle}
          />
        </Col>
        <Col className="FuncKeySpace">
          <KeyCap
            id={"TAN"}
            type={"button"}
            name={"TAN"}
            caption={"tan"}
            onClick={onClickHandle}
          />
        </Col>
      </Row>
      <Row>
        <Col className="FuncKeySpace">
          <KeyCap
            id={"LOG"}
            type={"button"}
            name={"LOG"}
            caption={"log"}
            onClick={onClickHandle}
          />
        </Col>
        <Col className="FuncKeySpace">
          <KeyCap
            id={"LN"}
            type={"button"}
            name={"LN"}
            caption={"ln"}
            onClick={onClickHandle}
          />
        </Col>
        <Col className="FuncKeySpace">
          <KeyCap
            id={"EXP"}
            type={"button"}
            name={"EXP"}
            caption={"exp"}
            onClick={onClickHandle}
          />
        </Col>
      </Row>
      <Row>
        <Col className="FuncKeySpace">
          <KeyCap
            id={"phi"}
            type={"button"}
            name={"phi"}
            caption={"\u03C6"}
            onClick={onClickHandle}
          />
        </Col>
        <Col className="FuncKeySpace">
          <KeyCap
            id={"PI"}
            type={"button"}
            name={"PI"}
            caption={"PI"}
            onClick={onClickHandle}
          />
        </Col>
        <Col className="FuncKeySpace">
          <KeyCap
            id={"e"}
            type={"button"}
            name={"e"}
            caption={"e"}
            onClick={onClickHandle}
          />
        </Col>
      </Row>
      <Row>
        <Col className="FuncKeySpace">
          <KeyCap
            id={"divBy1"}
            type={"button"}
            name={"divBy1"}
            caption={"1/x"}
            onClick={onClickHandle}
          />
        </Col>
        <Col className="FuncKeySpace">
          <KeyCap
            id={"POW"}
            type={"button"}
            name={"POW"}
            caption={"x\u02B8"}
            onClick={onClickHandle}
          />
        </Col>
        <Col className="FuncKeySpace">
          <KeyCap
            id={"RPOW"}
            type={"button"}
            name={"RPOW"}
            caption={"\u02B8\u221Ax"}
            onClick={onClickHandle}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default connector(FuncPad);
