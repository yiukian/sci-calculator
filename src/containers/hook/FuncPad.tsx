import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { KeyCap } from "../../components/KeyCap";
import { keyPressFunc } from "../../redux/actions";
import { RootState, AppDispatch } from "../../redux";
import { useDispatch } from "react-redux";

const mapState = (state: RootState) => ({});
const mapDispatch = {};

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = typeof mapDispatch;

type Props = StateProps & DispatchProps;

const FuncPad: React.FC<Props> = (props: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const onClickHandle = (keyIn: string) => dispatch(keyPressFunc(keyIn));

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

export default FuncPad;
