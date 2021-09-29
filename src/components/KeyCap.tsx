import React from "react";
import { Button } from "react-bootstrap";
//import { useState, useDispatch } from 'react-redux';

type KeyAction = (keyId: string) => void;

interface KeyCapProps {
  type: string;
  //  style: string;
  name: string;
  caption: string;
  id: string;
  onClick: KeyAction;
}

export const KeyCap: React.FC<KeyCapProps> = (props) => {
  //  const dispatch = useDispatch();
  //  const [currentState, setState] = useState(initialState);

  return (
    <Button
      type={props.type}
      id={props.id}
      name={props.name}
      size="lg"
      onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
        props.onClick(e.currentTarget.name)
      }
    >
      {props.caption}
    </Button>
  );

  /*   return (
    <Button type={props.type} Style={'btn-primary'} onClick={() => props.action(props.capture)}>{props.capture}</Button>
  ); */
};

KeyCap.defaultProps = {
  type: "button",
  //  style: 'btn-primary',
  name: "Test",
  caption: "Test",
  id: "Test",
  onClick: (keyId: string) => {},
};
