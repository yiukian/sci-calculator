import React from "react";
import { keyPressNum } from "../../redux/actions";
import { Row, Container } from "react-bootstrap";
import { KeyCap } from "../../components/KeyCap";
import { RootState, AppDispatch } from "../../redux";
import { useDispatch } from "react-redux";

const mapState = (state: RootState) => ({});
const mapDispatch = {};

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = typeof mapDispatch;

type Props = StateProps & DispatchProps;

const NumPad: React.FC<Props> = (props: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const onClickHandle = (keyIn: string) => dispatch(keyPressNum(keyIn));

  return (
    <Container fluid>
      <Row>
        <div className="NumKeySpace">
          <KeyCap
            id={"7"}
            type={"button"}
            name={"7"}
            caption={"7"}
            onClick={onClickHandle}
          />
        </div>
        <div className="NumKeySpace">
          <KeyCap
            id={"8"}
            type={"button"}
            name={"8"}
            caption={"8"}
            onClick={onClickHandle}
          />
        </div>
        <div className="NumKeySpace">
          <KeyCap
            id={"9"}
            type={"button"}
            name={"9"}
            caption={"9"}
            onClick={onClickHandle}
          />
        </div>
      </Row>
      <Row>
        <div className="NumKeySpace">
          <KeyCap
            id={"4"}
            type={"button"}
            name={"4"}
            caption={"4"}
            onClick={onClickHandle}
          />
        </div>
        <div className="NumKeySpace">
          <KeyCap
            id={"5"}
            type={"button"}
            name={"5"}
            caption={"5"}
            onClick={onClickHandle}
          />
        </div>
        <div className="NumKeySpace">
          <KeyCap
            id={"6"}
            type={"button"}
            name={"6"}
            caption={"6"}
            onClick={onClickHandle}
          />
        </div>
      </Row>
      <Row>
        <div className="NumKeySpace">
          <KeyCap
            id={"1"}
            type={"button"}
            name={"1"}
            caption={"1"}
            onClick={onClickHandle}
          />
        </div>
        <div className="NumKeySpace">
          <KeyCap
            id={"2"}
            type={"button"}
            name={"2"}
            caption={"2"}
            onClick={onClickHandle}
          />
        </div>
        <div className="NumKeySpace">
          <KeyCap
            id={"3"}
            type={"button"}
            name={"3"}
            caption={"3"}
            onClick={onClickHandle}
          />
        </div>
      </Row>
      <Row>
        <div className="NumKeySpace">
          <KeyCap
            id={"+-"}
            type={"button"}
            name={"+-"}
            caption={"\u00B1"}
            onClick={onClickHandle}
          />
        </div>
        <div className="NumKeySpace">
          <KeyCap
            id={"0"}
            type={"button"}
            name={"0"}
            caption={"0"}
            onClick={onClickHandle}
          />
        </div>
        <div className="NumKeySpace">
          <KeyCap
            id={"."}
            type={"button"}
            name={"."}
            caption={"."}
            onClick={onClickHandle}
          />
        </div>
      </Row>
    </Container>
  );
};

export default NumPad;
