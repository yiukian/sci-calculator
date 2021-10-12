import React from "react";
//import PropTypes from 'prop-types'
import { Row, Col, Container } from "react-bootstrap";
import { KeyCap } from "../components/KeyCap";
import { keyPressFunc } from "../redux/actions";
import { RootState, AppDispatch } from "../redux";
import { useDispatch } from "react-redux";

const mapState = (state: RootState) => ({});
const mapDispatch = {};

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = typeof mapDispatch;

type Props = StateProps & DispatchProps;

export const FuncPad: React.FC<Props> = (props: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const onClickHandle = (keyIn: string) => dispatch(keyPressFunc(keyIn));

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
              onClick={onClickHandle}
            />
          </div>
          <div className="FuncKeySpace">
            <KeyCap
              id={"COS"}
              type={"button"}
              name={"COS"}
              caption={"COS"}
              onClick={onClickHandle}
            />
          </div>
          <div className="FuncKeySpace">
            <KeyCap
              id={"TAN"}
              type={"button"}
              name={"TAN"}
              caption={"TAN"}
              onClick={onClickHandle}
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
              onClick={onClickHandle}
            />
          </div>
          <div className="FuncKeySpace">
            <KeyCap
              id={"LN"}
              type={"button"}
              name={"LN"}
              caption={"LN"}
              onClick={onClickHandle}
            />
          </div>
          <div className="FuncKeySpace">
            <KeyCap
              id={"EXP"}
              type={"button"}
              name={"EXP"}
              caption={"EXP"}
              onClick={onClickHandle}
            />
          </div>
        </Row>
        <Row>
          <div className="FuncKeySpace">
            <KeyCap
              id={"phi"}
              type={"button"}
              name={"phi"}
              caption={"\u03C6"}
              onClick={onClickHandle}
            />
          </div>
          <div className="FuncKeySpace">
            <KeyCap
              id={"PI"}
              type={"button"}
              name={"PI"}
              caption={"PI"}
              onClick={onClickHandle}
            />
          </div>
          <div className="FuncKeySpace">
            <KeyCap
              id={"e"}
              type={"button"}
              name={"e"}
              caption={"e"}
              onClick={onClickHandle}
            />
          </div>
        </Row>
        <Row>
          <div className="FuncKeySpace">
            <KeyCap
              id={"divBy1"}
              type={"button"}
              name={"divBy1"}
              caption={"1/x"}
              onClick={onClickHandle}
            />
          </div>
          <div className="FuncKeySpace">
            <KeyCap
              id={"POW"}
              type={"button"}
              name={"POW"}
              caption={"x\u02B8"}
              onClick={onClickHandle}
            />
          </div>
          <div className="FuncKeySpace">
            <KeyCap
              id={"RPOW"}
              type={"button"}
              name={"RPOW"}
              caption={"\u02B8\u221Ax"}
              onClick={onClickHandle}
            />
          </div>
        </Row>
      </Container>
    </Col>
  );
};

export default FuncPad;
