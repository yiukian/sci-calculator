import React from "react";
import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { AppState, RootState } from "../redux";

const mapState = (state: RootState) => ({});
const mapDispatch = {};

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = typeof mapDispatch;

type Props = StateProps & DispatchProps;

export const LcdPanel: React.FC<Props> = (props: Props) => {
  const operand1: string = useSelector(
    (state: AppState) => state.keys.operand1
  );

  return (
    <Row>
      <Col xs={1} />
      <Col xs={10.5} className="LcdSpace">
        <div className="LcdBody">{operand1}</div>
      </Col>
      <Col xs={1} />
    </Row>
  );
};

export default LcdPanel;
