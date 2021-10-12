import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { State } from "../../redux";
import { keyPressNum } from "../../redux/actions";
import { Row, Container } from "react-bootstrap";
import { KeyCap } from "../../components/KeyCap";
import { AnyAction, Dispatch } from "redux";

const mapStateToProps = (state: State) => ({});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    onClickHandle: (keyIn: string) => dispatch(keyPressNum(keyIn)),
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {}

const NumPad: React.FC<Props> = (props: Props) => {
  const { onClickHandle } = props;

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
            caption={"+/-"}
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

export default connector(NumPad);
