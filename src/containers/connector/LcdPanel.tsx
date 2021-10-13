import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { State } from "../../redux";

interface Props extends PropsFromRedux {}

const mapStateToProps = (state: State) => ({
  operand1: state.keys.operand1,
  operand2: state.keys.operand2,
  whatToShow: state.keys.whatToShow,
});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

const LcdPanel: React.FC<Props> = (props: Props) => {
  const { operand1, operand2, whatToShow } = props;
  var lcdDisplay: string;

  if (whatToShow === "operand2") {
    lcdDisplay = operand2;
  } else {
    lcdDisplay = operand1;
  }
  return <div className="LcdBody">{lcdDisplay}</div>;
};

export default connector(LcdPanel);
