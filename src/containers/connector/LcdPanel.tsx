import React from "react";
import { connect, ConnectedProps, useSelector } from "react-redux";
import { AppState, State } from "../../redux";

interface Props extends PropsFromRedux {}

const mapStateToProps = (state: State) => ({});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const LcdPanel: React.FC<Props> = (props: Props) => {
  const operand1: string = useSelector(
    (state: AppState) => state.keys.operand1
  );

  return <div className="LcdBody">{operand1}</div>;
};

export default connector(LcdPanel);
